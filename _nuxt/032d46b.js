(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{325:function(t,e,o){"use strict";o.r(e);var r=o(3),n=(o(24),o(89)),c={props:{bg:{type:Boolean,default:!1}},data:function(){return{email:null,footer:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.a)(t,"/global/contacts",t.$i18n.locale);case 2:return o=e.sent,e.next=5,Object(n.a)(t,"/global/footer",t.$i18n.locale);case 5:r=e.sent,t.email=o.story.content.email,t.footer=r.story.content;case 8:case"end":return e.stop()}}),e)})))()}},l=o(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer",class:[t.bg&&"footer--bg"]},[o("div",{staticClass:"center-wrap"},[o("div",{staticClass:"footer__wrap"},[o("nuxt-link",{staticClass:"footer__home",attrs:{to:t.localePath("index")}},[t._v(t._s(t.footer.link_text))]),o("a",{staticClass:"footer__email",attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))]),t._v(" "),o("p",{staticClass:"footer__copyr"},[t._v(t._s(t.footer.copy_text))])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);