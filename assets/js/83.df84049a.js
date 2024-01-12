(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{418:function(s,e,a){"use strict";a.r(e);var t=a(4),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"个人网站模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#个人网站模板"}},[s._v("#")]),s._v(" 个人网站模板")]),s._v(" "),e("p",[e("img",{attrs:{src:"/vue-page/vue-page-index.png",alt:"vue-page"}})]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wuxin0011.github.io/vue-page",target:"_blank",rel:"noopener noreferrer"}},[s._v("改造版"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"脚本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本使用"}},[s._v("#")]),s._v(" 脚本使用")]),s._v(" "),e("h3",{attrs:{id:"在bin目录中提供了不同脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在bin目录中提供了不同脚本"}},[s._v("#")]),s._v(" 在bin目录中提供了不同脚本")]),s._v(" "),e("p",[s._v("默认使用"),e("code",[s._v("pnpm")]),s._v(",如果是"),e("code",[s._v("yarn")]),s._v("或者"),e("code",[s._v("npm")]),s._v("，请注意修改包管理。")]),s._v(" "),e("p",[s._v("安装 "),e("code",[s._v("pnpm")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("脚本类型")]),s._v(" "),e("ul",[e("li",[s._v("下载 "),e("code",[s._v("pnpm install")])]),s._v(" "),e("li",[s._v("启动 "),e("code",[s._v("pnpm dev")])]),s._v(" "),e("li",[s._v("打包 "),e("code",[s._v("pnpm build")])]),s._v(" "),e("li",[s._v("推送 "),e("code",[s._v("git push")])]),s._v(" "),e("li",[s._v("部署（附带部署）"),e("code",[s._v("pnpm build")]),s._v(" + "),e("code",[s._v("git push")]),s._v(" + "),e("code",[s._v("部署到静态网址")])])]),s._v(" "),e("p",[s._v("为了方便，将脚本执行失败错误日志输出到 "),e("code",[s._v("log")]),s._v(" 目录下")]),s._v(" "),e("h3",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),e("p",[s._v("下面两种方法执行脚本都可以，下面演示部署脚本")]),s._v(" "),e("ol",[e("li",[s._v("进入目录bin目录启动")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入bin目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用默认发布消息")]),s._v("\n./deploy.sh \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 使用传入参数消息")]),s._v("\n./deploy.sh message\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("在项目根目录部署")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(" ./bin/deploy.sh \n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 使用传入参数消息")]),s._v("\n ./bin/deploy.sh message\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("因为对脚本路径判断了，所以在不在项目根路径下执行都可以")])])]),s._v(" "),e("h3",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),e("p",[s._v("因为每个部署发布仓库不同，需要修改 "),e("code",[s._v("deploy.sh")]),s._v(" 中默认参数,")]),s._v(" "),e("p",[s._v("一般来说只需要修改一下几个参数就可以了")]),s._v(" "),e("p",[e("strong",[s._v("必填项")])]),s._v(" "),e("ol",[e("li",[e("code",[s._v("git_source")]),s._v(" 仓库地址")])]),s._v(" "),e("p",[e("strong",[s._v("可选")])]),s._v(" "),e("ol",[e("li",[e("code",[s._v("build_source")]),s._v(" ，包管理,默认是 "),e("code",[s._v("pnpm")]),s._v("，如果需要修改请指定")]),s._v(" "),e("li",[e("code",[s._v("web_url")]),s._v(" 项目发布消息，一般填写发布网址，这个可以随便填")]),s._v(" "),e("li",[e("code",[s._v("main_branch")]),s._v(",主分支,默认值 "),e("code",[s._v("main")]),s._v(","),e("strong",[s._v("如果你的主分支是 "),e("code",[s._v("master")]),s._v("，请修改！")])]),s._v(" "),e("li",[e("code",[s._v("pages_branch")]),s._v("，静态网页部署分支，默认 "),e("code",[s._v("gh-pages")]),s._v(",如果你想指定分支为部署分支 "),e("a",{attrs:{href:"https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击这里"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("code",[s._v("git_message")]),s._v(",提交消息，默认是发布地址 "),e("code",[s._v("web_url")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目发布域名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("web_url")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://wuxin0011.github.io/vue-page\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目git 地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("git_source")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/wuxin0011/vue-page\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传分支，如果是 master 请使用 main_branch=master")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("main_branch")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目打包生成的上传分支")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pages_branch")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-pages\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传消息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("git_message")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$web_url")]),s._v('"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"使用-gtihub-actions-自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-gtihub-actions-自动化部署"}},[s._v("#")]),s._v(" 使用 "),e("code",[s._v("gtihub actions")]),s._v(" ,自动化部署")]),s._v(" "),e("p",[s._v("1.取消 "),e("code",[s._v(".github/workflows/ci.yml")]),s._v(" 的全部注释！，然后 申请token")]),s._v(" "),e("p",[s._v("如果你想使用 github actions 部署，请申请 "),e("code",[s._v("github_token")]),s._v(" ，如果你还不知道如果申请token，点击这里 "),e("a",{attrs:{href:"https://github.com/settings/personal-access-tokens",target:"_blank",rel:"noopener noreferrer"}},[s._v("申请token"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("img",{attrs:{src:"/vue-page/github-token-setting.png",alt:"点击私人设置"}}),s._v(" "),e("img",{attrs:{src:"/vue-page/vue-token-setting-2.png",alt:"点击development"}}),s._v(" "),e("img",{attrs:{src:"/vue-page/gtihub-token-setting-3.png",alt:"生成token"}})]),s._v(" "),e("p",[s._v("2.找到仓库环境变量设置选项，设置token，变量名设置为 "),e("code",[s._v("ACCESS_TOKEN")]),s._v("，")]),s._v(" "),e("p",[e("img",{attrs:{src:"/vue-page/vue-page-setting.png",alt:"设置"}}),s._v(" "),e("img",{attrs:{src:"/vue-page/vue-page-variable.png",alt:"设置token环境变量"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);