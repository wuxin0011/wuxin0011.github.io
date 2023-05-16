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
        </div>
        <div v-if="dataList &&dataList.length>0">
            <Card :cardData="dataList"/>
        </div>
        <div class="no-result" v-else>
            搜索结果为空！
        </div>
        <a href="javascript:;void(0)" @click="handlePage(1)" v-if="hasMore && !!username ">点击加载更多...</a>
    </div>
</template>

<script>

import {addTip} from "../components/GlobalTip.vue";
import Card from "../components/Card.vue";

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
            initFist: true,
            isSave: false,
            beforeSearchUsername: ''
        }
    },

    computed: {
        dataList() {
            let keywords = this.keywords
            let arr = this.starList
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
        }

    },

    mounted() {

        this.username = window.localStorage.getItem('wuxin-github-star-username') ?? 'wuxin0011'
        var isSave = window.localStorage.getItem('wuxin-github-star-save');
        this.isSave = !!isSave && isSave !== 'false'
        this.beforeSearchUsername = this.username
        this.init()

        // 监听username
        this.$watch('username', () => {
            window.localStorage.setItem('wuxin-github-star-username', this.username)
        })
    },
    methods: {
        init() {
            if (!this.username) {
                addTip('请输入用户名再进行操作！', 'warning')
                return;
            }
            // 每次搜索完毕之后都进行缓存
            if (this.isSave) {
                let arr = JSON.parse(window.localStorage.getItem('wuxin-github-star-default'));
                this.starList = arr && Array.isArray(arr) ? arr : []
                this.page = parseInt(this.dataList.length / this.size) + 1
                let hasMore = window.localStorage.getItem("wuxin-github-star-hasMore");
                this.hasMore = !!hasMore && hasMore !== 'false'
                return;
            }
            // 用户名如果改变了，搜索结果要清空！
            if (this.beforeSearchUsername !== this.username) {
                this.starList = []
                this.beforeSearchUsername = this.username
            }


            let url = `https://api.github.com/users/${this.username}/starred?page=${this.page}`
            // 如果支持 window fetch
            if (window?.fetch) {
                window.fetch(url).then(res => res.json())
                    .then(res => {
                        this.loadData(res)
                    }).catch(e => {
                    addTip(`搜索失败😢,原因是: ${JSON.stringify(e)}`, 'danger')
                })
            } else {
                // 使用浏览器自带xml处理
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
                        this.loadData(JSON.parse(response))
                    } else {
                        addTip(`加载失败！`, 'danger')
                    }

                }
            }
        },

        handlePage(num) {
            this.page += num
            this.isSave = false
            this.init()
        },

        search() {
            console.log('只有用户名改变了才支持该操作')
            if (this.username !== this.beforeSearchUsername) {
                this.page = 1
                this.isSave = false
                this.init()
            } else {
                addTip(`只有用户名改变了才支持该操作！`, 'warning')
            }
        },


        clear() {
            window.localStorage.setItem('wuxin-github-star-default', JSON.stringify([]))
            window.localStorage.setItem("wuxin-github-star-save", 'false')
            window.localStorage.setItem("wuxin-github-star-hasMore", 'false')
            addTip(`缓存已清空！`, 'success')
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

                    this.starList.push({
                        id: id,
                        cardName: `${name||'unknown'} ${stargazers_count>1000?`${parseInt(stargazers_count/1000)}K`:`${stargazers_count}`}`,
                        cardSrc: html_url,
                        cardImgSrc: avatar_url,
                        cardContent: description,
                        stargazers_count: stargazers_count,
                    })


                })
                // 首次不显示内容
                if (!this.initFist) {
                    addTip(`搜索到${res.length}条结果🚀`, 'success')
                }
                window.localStorage.setItem('wuxin-github-star-default', JSON.stringify(this.starList))
                window.localStorage.setItem("wuxin-github-star-save", 'true')
                window.localStorage.setItem("wuxin-github-star-hasMore", String(this.hasMore))

            } else {
                addTip('搜索结果为空🤔,可能没有跟多内容了', 'warning')
            }
            this.initFist = false
        }
    }
}
</script>
<style scoped>


.head input, .head select, .head option {
    padding: 8px 10px;
    border: none;
    outline: teal 1px solid;
}

button {
    cursor: pointer;
    padding: 8px 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    transition: all ease-in-out 0.3s;
}

button:hover {
    background: #0d4a68;
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

</style>
