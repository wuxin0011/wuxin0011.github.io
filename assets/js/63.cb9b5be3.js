(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{398:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[s("strong",[t._v("摘要")])]),t._v(" "),s("p",[t._v("在网络上查资料老铁们都知道，有时候搜索到一个感觉还不错的项目，想了解详情或者体验更多功能，这个时候弹出一个二维码要注xxx 公众号，其实大多数人是很反感的，因为这些公众号全部都是广告，跟个营销号差不多。但是如果你想继续体验，没办法只好掏出手机微信扫一扫 🙄。")]),t._v(" "),s("p",[s("strong",[t._v("思考")])]),t._v(" "),s("p",[t._v("这个时候你需要思考密码或者验证码是不是写死的 ，其实大多数情况下是写死的 ，为什么？")]),t._v(" "),s("ul",[s("li",[t._v("关注公众号的目的是为了推流（100%）")]),t._v(" "),s("li",[t._v("要实现动态二维码发送到微信公众号才能获取成本不小，也比较麻烦，既然只是一个个人网站或者是一个演示项目 ，这么做肯定时不划算的（90%+）。")])]),t._v(" "),s("h2",{attrs:{id:"演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[t._v("#")]),t._v(" 演示")]),t._v(" "),s("h3",{attrs:{id:"普通前端网站密码获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通前端网站密码获取"}},[t._v("#")]),t._v(" 普通前端网站密码获取")]),t._v(" "),s("p",[s("strong",[t._v("找ID")])]),t._v(" "),s("p",[t._v("通过找到对应Id，然后前文检查 使用该Id地方，如果没有到引用js地方找")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/static-project-demo-00.png",alt:"找ID"}})]),t._v(" "),s("p",[t._v("如果找不到请找引用 js ，排除一些肯定不是的 比如常见库文件，比如这个就是引用方式")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/static-project-demo-01.png",alt:"find"}})]),t._v(" "),s("p",[t._v("找 js 引用，经过检索，这个最有可能")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/static-project-demo-02.png",alt:""}})]),t._v(" "),s("p",[t._v("找密码")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/static-project-demo-05.png",alt:"密码"}})]),t._v(" "),s("p",[t._v("所以这弹窗密码是 "),s("code",[t._v("coke")])]),t._v(" "),s("h3",{attrs:{id:"模块化打包后项目密码获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化打包后项目密码获取"}},[t._v("#")]),t._v(" 模块化打包后项目密码获取")]),t._v(" "),s("p",[t._v("模块化打包项目后的文件可读性十分差的，也没有办法通过 上面直接查找方式直接获取。")]),t._v(" "),s("p",[t._v("这个时候需要从提示信息方面获取，"),s("strong",[t._v("不管是 Vue 还是 React 打包后的项目，提示信息是唯一的。")])]),t._v(" "),s("p",[s("strong",[t._v("比如输入验证码错误后会提示 验证码错误之类")]),t._v("，通过错误信息获取验证码字段，然后检索找到。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/error-message.png",alt:"错误信息提示"}})]),t._v(" "),s("p",[t._v("无从下手")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/source-demo-01.png",alt:""}})]),t._v(" "),s("p",[t._v("其实仔细观察，下面 el-xxx 结尾的都是 element 打包后的js文件，肯定跟密码无关。")]),t._v(" "),s("p",[t._v("找错误信息，发现打包将中文提示信息全部转换为 unicode 编码，所以需要将 错误信息转换为 unicode 编码。")]),t._v(" "),s("p",[t._v("在浏览器中将 "),s("code",[t._v("验证码不能为空")]),t._v(" 字段转换为 unicode 编码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" verificationCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"验证码不能为空"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将人机验证字符串转换为 Unicode")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" unicodeString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verificationCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\u"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" char"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unicodeString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\u9a8c\\u8bc1\\u7801\\u4e0d\\u80fd\\u4e3a\\u7a7a")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("经过几次筛选找到字段信息了")]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/search-code--02.png",alt:"find-info"}})]),t._v(" "),s("p",[t._v("全文检索 找到错误信息这个js文件中 ， 其实也在这个文件中。比如上面通过错误信息找到验证码字段为 "),s("code",[t._v("code")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/static-project-password/code.png",alt:"code"}})]),t._v(" "),s("p",[t._v("当 S.code === E && N() ,字段信息上面都能看到 ，画横线懂得都懂，将获取之后验证码保存到浏览器本地中（因为下次访问还需要通过这个字段验证）")]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v('E = "yunai"')]),t._v(",函数 "),s("code",[t._v("N()")]),t._v(" 是保存验证码的，只有 S.code === E 才会执行保存密码函数 "),s("code",[t._v("N()")])]),t._v(" "),s("p",[t._v("所以字段 "),s("code",[t._v('code = "yunai"')])]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("以上仅供学习🤣")])])}),[],!1,null,null,null);s.default=r.exports}}]);