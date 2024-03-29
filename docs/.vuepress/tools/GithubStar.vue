<template>
    <div class="github-star-project">
        <div class="head">
            <input type="text" v-model="keywords" placeholder="输入关键词过滤...">
            <select v-model="sort">
                <option :value="0" label="默认"></option>
                <option :value="1" label="按星数低"></option>
                <option :value="2" label="按星数高"></option>
            </select>
            <input type="text" v-model="username" placeholder="github username...">
            <button @click="search" v-show="username !== beforeSearchUsername && !!username">搜索</button>
            <button @click="clear">清空缓存</button>

            <div class="avatar-link" >
                <a :href="`https://github.com/${username}`" target="_blank">
                    <img :src="avatar" :alt="username" :title="`点击访问${username}主页`" class="avatar">
                </a>
            </div>

        </div>
        <div v-if="dataList && dataList.length > 0">
            <Card :cardData="dataList" />
        </div>
        <div class="no-result" v-else>
            {{ tip }}
        </div>

        <a href="javascript:void(0)" @click="handlePage(1)" v-if="hasMore && !!username">
            {{ loading ? '加载中...' : '点击加载更多...' }}
        </a>

    </div>
</template>

<script>

import { addTip } from "../components/GlobalTip.vue";


const getUrlData = (url, callback, onerror) => {

    if (!url) {
        console.error('url 为请求地址！')
        return;
    }

    if (typeof callback !== 'function') {
        console.error('callback为回调函数！')
        return;
    }

    // 浏览器是否支持fetch api
    if (typeof window?.fetch !== 'undefined') {
        window.fetch(url).then(res => res.json()).then(res => callback(res)).catch(e => onerror(e))
    } else {  // 使用浏览器自带 XMLHttpRequest 处理
        if (typeof XMLHttpRequest === 'undefined') {
            addTip(`当前浏览器版本过低，请更换浏览器！`, 'danger')
            return;
        }
        let request = new XMLHttpRequest();
        request.open('GET', url)
        request.send()
        request.onload = (data) => {
            const {
                readyState,
                status,
                response
            } = data.target

            if (readyState === 4 && status === 200) {
                callback(JSON.parse(response))
            } else {
                onerror(`加载失败！未知错误😢`)
            }

        }
        request.onerror = (e) => {
            onerror(e)
        }
    }
}

const setValue = (key, value) => {
    if (typeof key === 'undefined' || typeof value === 'undefined' || key === null || value === null) {
        console.warn('key value 不允许为null或者undefined')
        return;
    }
    window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}

const getValue = (key, parse) => {
    if (key === null || typeof key === 'undefined') {
        console.warn('key不允许为null或者undefined')
        return false;
    }
    if (typeof parse === 'undefined') {
        parse = false
    }
    return parse ? JSON.parse(window.localStorage.getItem(key)) : window.localStorage.getItem(key)
}

const getBoolean = (key) => {
    let value = getValue(key)
    return !!value && value !== 'false'
}

function throttle(func, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arguments);
                timer = null;
            }, delay);
        }
    };
}

// object array
const LOCAL_DATA = "wuxin-github-star-default"
// string
const LOCAL_USERNAME = "wuxin-github-star-username"
const LOCAL_USER_AVTAR = "wuxin-github-star-user-avatar"
// boolean
const LOCAL_HAS_MORE = "wuxin-github-star-hasMore"
const LOCAL_IS_SAVE = "wuxin-github-star-save"
const LOCAL_USER_IS_EXIST = "wuxin-github-user-exist"

export default {
    name: 'GithubStar',
    data() {
        return {
            starList: [],
            hasMore: true,
            keywords: '',
            size: 30,
            page: 1,
            sort: 0,
            username: '',
            avatar: '',
            initFirst: true,
            isSave: false,
            beforeSearchUsername: '',
            userIsExist: false,
            loading: false,

        }
    },

    computed: {
        dataList() {
            let keywords = this.keywords
            let arr = [...this.starList]
            let defaultList = [...this.starList]

            switch (this.sort) {
                case 1:
                    arr.sort((a, b) => a.stargazers_count - b.stargazers_count > 0 ? 1 : -1)
                    break
                case 2:
                    arr.sort((a, b) => a.stargazers_count - b.stargazers_count > 0 ? -1 : 1)
                    break
                default:
                    arr = defaultList
                    break
            }
            return arr.filter(item => item && item.cardName && item.cardName.indexOf(keywords) !== -1 || item && item.cardContent && item.cardContent.indexOf(keywords) !== -1)
        },

        tip: function () {

            if (!this.userIsExist) {
                return '用户不存在！'
            }

            if (this.beforeSearchUsername !== this.username) {
                return '请点击搜索按钮'
            }

            if (this.loading) {
                return '搜索中...'
            } else if (!this.loading && Array.isArray(this.starList) && this.starList.length === 0) {
                return '搜索结果为空！'
            }

            return '未知错误！'
        }

    },

    mounted() {

        this.username = getValue(LOCAL_USERNAME) ?? 'wuxin0011'
        this.avatar = getValue(LOCAL_USER_AVTAR)
        this.isSave = getBoolean(LOCAL_IS_SAVE)
        this.userIsExist = getBoolean(LOCAL_USER_IS_EXIST)
        this.beforeSearchUsername = this.username
        this.init()

        // 监听username
        this.$watch('username', throttle(() => {
            setValue(LOCAL_USERNAME, this.username)
            this.validUserIsExist()
        }, 2000))


        window.document.querySelector('img.avatar').addEventListener('error', (e) => {
            e.target.src = '/icon/logo.ico'
        })



    },
    methods: {
        async init() {

            if (this.initFirst && !this.userIsExist) {
                // 检查一次如果还是查不到报错
                await this.validUserIsExist()
                // 用户不存在需要清除缓存 走下面搜索链接
                this.isSave = false
                if (!this.userIsExist) {
                    addTip('当前用户不存在！请重新输入用户名！', 'warning')
                    return;
                }
            }


            // 每次搜索完毕之后都进行缓存
            if (this.isSave) {
                let arr = getValue(LOCAL_DATA, true);
                this.starList = arr && Array.isArray(arr) ? arr : []
                this.page = parseInt(String(this.starList.length / this.size)) + 1
                this.hasMore = getBoolean(LOCAL_HAS_MORE);
                this.userIsExist = getBoolean(LOCAL_USER_IS_EXIST)
                return;
            }

            // 用户名如果改变了，搜索结果要清空！
            if (this.beforeSearchUsername !== this.username) {
                this.starList = []
                this.beforeSearchUsername = this.username
            }
            // 查询
            this.loading = true
            getUrlData(`https://api.github.com/users/${this.username}/starred?page=${this.page}`, (res) => {
                this.loadData(res)
                this.loading = false
            }, (e) => {
                this.loading = false
                addTip(e, 'danger')
            })

        },

        handlePage(num) {
            this.page += num
            this.isSave = false
            this.init()
        },

        search() {
            if (this.username !== this.beforeSearchUsername) {
                this.page = 1
                this.isSave = false
                this.init()
            } else {
                addTip(`只有用户名改变了才支持该操作！`, 'warning')
            }
        },


        clear(isTool = true) {
            setValue(LOCAL_DATA, []);
            // this.starList = []
            [LOCAL_IS_SAVE, LOCAL_HAS_MORE].forEach(key => setValue(key, 'false'));
            if (isTool) {
                addTip(`缓存已清空！`, 'success')
            }
        },

        loadData(res) {
            if (Array.isArray(res)) {
                this.hasMore = res.length === this.size
                res.forEach(item => {
                    const {
                        id,
                        name,
                        description,
                        html_url,
                        stargazers_count,
                        owner: {
                            avatar_url
                        }
                    } = item

                    // 每次搜索结果累加
                    this.starList.push({
                        id: id,
                        cardName: `${name || 'unknown'} ${stargazers_count > 1000 ? `${parseInt(String(stargazers_count / 1000))}K` : `${stargazers_count}`}`,
                        cardSrc: html_url,
                        cardImgSrc: avatar_url,
                        cardContent: description || '暂无描述...',
                        stargazers_count: stargazers_count,
                    })


                })
                // 首次不显示内容
                if (!this.initFirst) {
                    addTip(`搜索到${res.length}条结果🚀,共计结果${this.starList.length}条🚗${this.hasMore ? '，点击加载更多查看更多内容！' : '，没有更多了！'}`, 'success')
                }

                // 缓存到本地
                setValue(LOCAL_DATA, this.starList)
                setValue(LOCAL_IS_SAVE, String(true))
                setValue(LOCAL_HAS_MORE, String(this.hasMore))

            } else {
                addTip('搜索结果为空🤔,可能没有跟多内容了或者检查用户名是否存在', 'warning')
            }
            this.initFirst = false
        },


        validUserIsExist() {
            getUrlData(`https://api.github.com/users/${this.username}`, (res) => {
                this.userIsExist = !!res?.login
                this.avatar = res.avatar_url || '/icon/logo.ico'
                setValue(LOCAL_USER_IS_EXIST, String(this.userIsExist))
                setValue(LOCAL_USER_AVTAR, this.avatar)
                // 如果搜索到结果OK 清空之前结果
                if (this.username !== this.beforeSearchUsername) {
                    this.clear(false)
                }
            }, (e) => {
                this.userIsExist = false
                this.avatar = '/icon/logo.ico'
                setValue(LOCAL_USER_AVTAR, this.avatar)
                setValue(LOCAL_USER_IS_EXIST, String(false))
            })
        },

        toHome(){
            window.open(`https://github.com/${this.username}`,'_blank')
        }
    }
}
</script>
<style scoped>
.github-star-project {
    position: relative;
}

.head {
    margin-left: 10px;
}


.head input,
.head select,
.head option {
    padding: 8px 10px;
    border: none;
    outline: teal 1px solid;
    margin-right: 10px;
}

button {
    cursor: pointer;
    padding: 8px 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    transition: all ease-in-out 0.3s;
    background: #0d4a68;
    color: white;
}

button:hover {
    background: #3d3ed0;
    color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.head input:focus {
    outline: 2px solid #3d3ed0;
}

.no-result {
    font-size: 24px;
    color: red;
    text-align: center;
    margin: 10px 0;
}

.avatar-link {
    position: absolute;
    right: -10px;
    top: -60px;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    outline: none;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
    transition: 0.8s all ease-in-out;
    cursor: pointer;
    display: inline-block;
}

.avatar:hover {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
    transform: rotate(360deg);
}

.last-updated {
    display: none !important;
}
</style>
