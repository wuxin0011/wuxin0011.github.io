/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

import components from './config/import-components'
import nav from './nav-config'

const DOMAIN_NAME = 'wuxin0011.github.io' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址
const IS_DEV = process.env.NODE_ENV == 'development'
export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm主题包
    // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: "wuxin0011`blog",
            description: '欢迎访问个人静态网站',
        }
    },


    // 主题配置
    themeConfig: {
        // 导航配置
        nav: nav,
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'wuxin0011/wuxin0011.github.io', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        docsBranch: 'main', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
        editLinks: true, // 启用编辑
        editLinkText: '编辑',

        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        // bodyBgImg: [
        //     'https://cdn.staticaly.com/gh/wuxin0011/wuxin@main/blog-resource/img/bg1.jpg',
        //     'https://cdn.staticaly.com/gh/wuxin0011/wuxin@main/blog-resource/img/bg2.jpg',
        //     'https://cdn.staticaly.com/gh/wuxin0011/wuxin@main/blog-resource/img/bg3.jpg'
        // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
        bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~1.0, 默认0.5
        // bodyBgImgInterval: 30, // body多张背景图时的切换间隔, 默认15，单位s
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: true, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: true, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
        // defaultMode: 'auto',

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'wuxin0011', // 必需
            link: 'https://github.com/wuxin0011', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://avatars.githubusercontent.com/u/65836396?v=4',
            name: 'wuxin0011',
            slogan: '懂得越多，懂得越少',
        },

        indexImg: {
            navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
            switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
            // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
            bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
            bgTimeColorArray: [
                "transparent",
                "transparent",
                "transparent",
                "transparent",
            ], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
            descFade: true, // 是否开启图片中间描述的淡入淡出效果，默认为 false
            desc: [
                "积跬步以至千里，致敬每个爱学习的你!",
            ], // 多条描述，如果填写则覆盖 index.md 的 tagline，不填写则默认读取 index.md 的 tagline，descFadeIn 为 true 生效
            descFontSize: "1.4rem", // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
            descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
            descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
            descNextTime: 800, // 当有多个 desc 时，一个 desc 展示完后或准备开始时，多少时间后出现下一个 desc，默认 800 毫秒
            bubble: false, // 是否开启图片的气泡效果，默认为 false
            bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
            bubbleNum: 200, // 气泡的个数，bubble 为 true 生效，默认 200 个
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:2191377759@qq.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/wuxin0011',
                },
                {
                    iconClass: 'icon-bilibili',
                    title: 'bilibili',
                    link: 'https://space.bilibili.com/259072250',
                },
                {
                    iconClass: 'icon-bokeyuan',
                    title: '博客园',
                    link: 'https://www.cnblogs.com/wuxin001/',
                },
                {
                    iconClass: 'icon-juejin',
                    title: '掘金',
                    link: 'https://juejin.cn/user/2019183212631912',
                },
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2020, // 博客创建年份
            copyrightInfo:
                'wuxin0011 | <a href="https://github.com/wuxin0011/wuxin0011.github.io" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },

        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: 'wuxin0011',
                link: 'https://github.com/wuxin0011'
            }
        },

        // 自定义hmtl(广告)模块
        htmlModules
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css' }],
        ['script', { rel: 'stylesheet', src: 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js', crossorigin: 'anonymous' }],
        ['script', { rel: 'stylesheet', src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js', crossorigin: 'anonymous' }],
        // ['script', { rel: 'stylesheet', src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', crossorigin: 'anonymous' }],
        [
            'meta',
            {
                name: 'keywords',
                content: '欢迎访问个人博客',
            },
        ],
        ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],


    // 插件配置
    plugins: <UserPlugins>[
        {
            name: 'custom-plugins',
            globalUIComponents: components
        },
        [
            "sitemap", // 网站地图
            {
                hostname: WEB_SITE,
            },
        ],
        ['reading-progress'],
        ['vuepress-plugin-baidu-autopush'], // 百度自动推送

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode,
            },
        ],

        // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
        // 'fulltext-search',

        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        [
            'thirdparty-search',
            {
                thirdparty: [
                    {
                        title: '在MDN中搜索',
                        frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                        behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                    },
                    {
                        title: '在Github中搜索',
                        frontUrl: 'https://github.com/search?q=',
                    },
                    {
                        title: '在Vue API中搜索',
                        frontUrl: 'https://cn.vuejs.org/api/#',
                    },
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    {
                        title: '在stackoverflow中搜索',
                        frontUrl: 'https://stackoverflow.org.cn/search?q=',
                    },
                    {
                        title: '通过百度搜索本站的',
                        frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
                    },
                ],
            }
        ],

        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],


        // 基于 github Dissicon 的评论项目 giscus
        // https://plugin-comment2.vuejs.press/
        // https://giscus.app/zh-CN
        // commentPlugin({
        //     provider: "Giscus",
        //     repo: 'wuxin0011/blog-giscus-comment',
        //     repoId: 'R_kgDOJADaHw', // id
        //     category: 'Announcements',
        //     categoryId: 'DIC_kwDOJADaH84CUUwQ', // id
        //     mapping: 'pathname', // url
        //     strict: 0,
        //     lazyLoading: true,
        //     reactionsEnabled: true,
        //     inputPosition: 'bottom',// top | bottom
        //     lang: 'zh-CN'
        // }),

        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: IS_DEV ? '89da537c46f15ccbf324' : '24a11f32692b0bf7b210',
                    clientSecret: IS_DEV ? '676dc75bbdec5ff92ea699e578365d9135bc22f1' : 'b6c93c64ccca35cfe509c076cf0cea1342539d16',
                    repo: 'blog-gitalk-comment', // GitHub 仓库
                    owner: 'wuxin0011', // GitHub仓库所有者
                    admin: ['wuxin0011'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],


        // "上次更新"时间格式
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY-MM-DD, HH:mm:ss')
                },
            },
        ],
    ],

    // 提取标题到侧边栏的级别，默认['h2', 'h3']
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ]
})
