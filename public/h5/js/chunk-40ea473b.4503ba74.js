(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40ea473b"],{"13b9":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{ref:"container",staticClass:"return-list"},[t._l(t.orderList,function(n){return r("div",{key:n.order_id,staticClass:"goodWrapper"},[-1===n._status._type?r("div",{staticClass:"iconfont icon-tuikuanzhong powder"}):t._e(),-2===n._status._type?r("div",{staticClass:"iconfont icon-yituikuan"}):t._e(),r("div",{staticClass:"orderNum"},[t._v("订单号："+t._s(n.order_id))]),t._l(n.cartInfo,function(e){return r("div",{key:e.id,staticClass:"item acea-row row-between-wrapper",on:{click:function(r){return t.$router.push({path:"/order/detail/"+n.order_id})}}},[r("div",{staticClass:"pictrue"},[r("img",{staticClass:"image",attrs:{src:e.productInfo.image},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:"/detail/"+e.productInfo.id})}}})]),r("div",{staticClass:"text"},[r("div",{staticClass:"acea-row row-between-wrapper"},[r("div",{staticClass:"name line1"},[t._v(t._s(e.productInfo.store_name))]),r("div",{staticClass:"num"},[t._v("x "+t._s(e.cart_num))])]),e.productInfo.attrInfo?r("div",{staticClass:"attr line1"},[t._v("\n          "+t._s(e.productInfo.attrInfo.suk)+"\n        ")]):r("div",{staticClass:"attr line1"},[t._v(t._s(e.productInfo.store_name))]),r("div",{staticClass:"money"},[t._v("￥"+t._s(e.productInfo.price))])])])}),r("div",{staticClass:"totalSum"},[t._v("\n      共"+t._s(n.cartInfo.length||0)+"件商品，总金额\n      "),r("span",{staticClass:"font-color-red price"},[t._v("￥"+t._s(n.pay_price))])])],2)}),0===t.orderList.length&&t.page>1?r("div",{staticClass:"noCart"},[t._m(0)]):t._e(),r("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],2)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pictrue"},[e("img",{attrs:{src:r("530f")}})])}],o=r("f8b7"),a=r("3a5e"),s={name:"ReturnList",components:{Loading:a["a"]},data:function(){return{orderList:[],page:1,limit:20,loading:!1,loaded:!1}},methods:{getOrderList:function(){var t=this,n=this.page,r=this.limit;this.loading||this.loaded||(this.loading=!0,Object(o["g"])({page:n,limit:r,type:-3}).then(function(n){t.orderList=t.orderList.concat(n.data),t.loading=!1,t.loaded=n.data.length<r,t.page++}))}},mounted:function(){var t=this;this.getOrderList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getOrderList()})}},u=s,c=(r("72c7"),r("2877")),d=Object(c["a"])(u,e,i,!1,null,"69b4fdee",null);n["default"]=d.exports},"45bb":function(t,n,r){},"530f":function(t,n,r){t.exports=r.p+"h5/img/noOrder.90017ce2.png"},"72c7":function(t,n,r){"use strict";var e=r("45bb"),i=r.n(e);i.a},f8b7:function(t,n,r){"use strict";r.d(n,"l",function(){return i}),r.d(n,"k",function(){return o}),r.d(n,"e",function(){return a}),r.d(n,"b",function(){return s}),r.d(n,"f",function(){return u}),r.d(n,"g",function(){return c}),r.d(n,"a",function(){return d}),r.d(n,"i",function(){return f}),r.d(n,"h",function(){return l}),r.d(n,"m",function(){return p}),r.d(n,"n",function(){return g}),r.d(n,"c",function(){return _}),r.d(n,"d",function(){return v}),r.d(n,"j",function(){return m});var e=r("b775");function i(t){return e["a"].post("/order/confirm",{cartId:t})}function o(t,n){return e["a"].post("/order/computed/"+t,n)}function a(t){return e["a"].get("/coupons/order/"+(parseFloat(t)||0))}function s(t,n){return e["a"].post("/order/create/"+t,n||{})}function u(){return e["a"].get("/order/data")}function c(t){return e["a"].get("/order/list",t)}function d(t){return e["a"].post("/order/cancel",{id:t})}function f(t){return e["a"].get("/order/detail/"+t)}function l(){return e["a"].get("/order/refund/reason")}function p(t){return e["a"].post("/order/refund/verify",t)}function g(t){return e["a"].post("/order/take",{uni:t})}function _(t){return e["a"].post("/order/del",{uni:t})}function v(t){return e["a"].get("order/express/"+t)}function m(t,n,r){return e["a"].post("order/pay",{uni:t,paytype:n,from:r})}}}]);
//# sourceMappingURL=chunk-40ea473b.4503ba74.js.map