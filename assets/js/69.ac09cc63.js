(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{406:function(v,_,t){"use strict";t.r(_);var a=t(4),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[v._v("#")]),v._v(" 缓存穿透")]),v._v(" "),_("p",[v._v("原因 ：同一时间大量请求访问缓存中不存在的数据，因为缓存中没有，所以大量请求直接进入数据库，但是数据库中也没有，导致一时间数据库请求量过大！")]),v._v(" "),_("p",[v._v("处理办法:")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("布隆过滤器")])]),v._v(" "),_("p",[v._v("通过布隆过滤器，判断该数据库是不是数据库一定不存在的数据！然后保存在缓存中，下次\t\t  访问，对一定没有的数据直接返回")])]),v._v(" "),_("li",[_("p",[v._v('对于一定不存在的数据 设置一个过期时间，下次访问，如果获取到这个key的value （ 这个value 自己设置一个代表为查询结果为null 的 比如 "abcdeftfdafa90sfads89f08asdfa"）')])])]),v._v(" "),_("h3",{attrs:{id:"缓存雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[v._v("#")]),v._v(" 缓存雪崩")]),v._v(" "),_("p",[v._v("原因: 大量缓存的数据，同一时刻失效，同时大量请求也访问该数据，导致直接访问数据库。")]),v._v(" "),_("p",[v._v("处理办法:")]),v._v(" "),_("ol",[_("li",[v._v("缓存的数据设置一个随机过期时间")]),v._v(" "),_("li",[v._v("使用熔断机制，添加一个保护机制")]),v._v(" "),_("li",[v._v("redis 集群 或者 主从复制")]),v._v(" "),_("li",[v._v("mysql 集群 或者 主从复制")])]),v._v(" "),_("h3",{attrs:{id:"缓存击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[v._v("#")]),v._v(" 缓存击穿")]),v._v(" "),_("p",[v._v("原因: 一个高热点数据，大量请求访问，比如访问量如果失效了，会出现大量数据库进入数据库进行 查询、修改操作")]),v._v(" "),_("p",[v._v("处理办法")]),v._v(" "),_("ol",[_("li",[v._v("对于高热点数据，尽量设置"),_("strong",[v._v("较大的")]),v._v(" 过期时间 或者设置"),_("strong",[v._v("永不过期")]),v._v("时间")]),v._v(" "),_("li",[v._v("使用互斥锁，大量请求进入，只有拿到了锁请的请求才能访问数据库 （ "),_("strong",[v._v("分布式情况下使用分布式锁")]),v._v(" ）")])]),v._v(" "),_("br"),v._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("穿透")]),v._v(" ：都穿透了，掏空了，还是查不到。（ 缓存->数据库->result == null ）")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("雪崩")]),v._v(" ： 发生了雪崩没有一片雪花是无辜的 ( 缓存大量失效 - > 压力给到了数据库，可能导致宕机 )")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("击穿")]),v._v(" ：通过一个点，破！（ 热点数据 -> 压力给到了数据库  ）")])])]),v._v(" "),_("h3",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[v._v("#")])])])}),[],!1,null,null,null);_.default=s.exports}}]);