(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-45ce394c","chunk-0d84462c","chunk-0976050e","chunk-408de33a"],{"2d30":function(t,e,s){"use strict";var n=s("69d1");s.n(n).a},5437:function(t,e,s){"use strict";s.r(e),s("34a3");var n={data:function(){return{activeList:[]}},mounted:function(){this.getBreadcrumb()},watch:{$route:function(t,e){var s=t.fullPath.replace("/","");this.getBreadcrumb(s)}},methods:{getBreadcrumb:function(t){this.activeList=[],this.activeList.push(this.$store.state.breadList[0]);var e=this.$store.state.breadList;"home"!==t?"home"!==e[e.length-1]&&this.activeList.push(e[e.length-1]):this.$store.commit("SET_BREAD",this.activeList)}}},a=(s("6453"),s("17cc")),l=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("transition-group",{attrs:{name:"fade-transform",mode:"out-in"}},[t._l(t.$store.state.breadList,function(e,n){return[s("el-breadcrumb-item",{key:n,attrs:{to:-1==t.activeList.indexOf(e)?"":{path:"/"+e}}},[t._v(t._s(t.$t("route."+e)))])]})],2)],1)],1)},[],!1,null,"32333cca",null);e.default=l.exports},6453:function(t,e,s){"use strict";var n=s("9988");s.n(n).a},"69d1":function(t,e,s){},"6b56":function(t,e,s){"use strict";s.r(e);var n=s("cfd5"),a=s("8b18"),l=s("5437"),c={components:{showAside:n.default,selectLang:a.default,breadcrumb:l.default},data:function(){return{fullscreen:!1,name:"linxin",message:2,username:"zyh"}},computed:{isCollapse:{get:function(){return this.$store.state.isCollapse},set:function(t){this.$store.commit("IS_COLLAPSE",t)}}},methods:{toggleClick:function(){this.isCollapse=!this.isCollapse},logout:function(t){this.$store.commit("TAGES_LIST",[]),this.$store.commit("SET_BREAD",["home"]),this.$router.push("/login")},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},i=(s("2d30"),s("17cc")),r=Object(i.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head-container clearfix"},[s("div",{staticClass:"header-left"},[s("showAside",{attrs:{"toggle-click":t.toggleClick}}),s("breadcrumb")],1),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?t.$t("header.cancelFullScreen"):t.$t("header.fullScreen"),placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("select-lang"),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.$t("header.message"),placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),s("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[s("div",{staticClass:"avatar-wrapper"},[s("img",{staticClass:"user-avatar",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"}}),t._v("\n          "+t._s(t.username)),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[s("router-link",{staticClass:"inlineBlock",attrs:{to:"/home"}},[s("el-dropdown-item",[t._v(t._s(t.$t("route.home")))])],1),s("el-dropdown-item",[t._v(t._s(t.$t("header.setting")))]),s("el-dropdown-item",{attrs:{divided:""}},[s("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v(t._s(t.$t("header.logout")))])])],1)],1)],1)])])},[],!1,null,"1ca33e44",null);e.default=r.exports},"79e8":function(t,e,s){"use strict";var n=s("a6d2");s.n(n).a},"8b18":function(t,e,s){"use strict";s.r(e);var n={computed:{lang:function(){return this.$store.state.lang}},methods:{handleSetLanguage:function(t){this.$i18n.locale=t,this.$store.commit("GET_LANGUAGE",t)}}},a=(s("ebb9"),s("17cc")),l=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-dropdown",{attrs:{trigger:"click"},on:{command:this.handleSetLanguage}},[e("span",{staticClass:"el-dropdown-link"},[e("svg",{staticClass:"icon-font"},[e("use",{attrs:{"xlink:href":"#icon-yuyanfanyi"}})])]),e("el-dropdown-menu",{staticClass:"dropMenu",attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{disabled:"zh"===this.lang,command:"zh"}},[this._v("中文")]),e("el-dropdown-item",{attrs:{disabled:"en"===this.lang,command:"en"}},[this._v("English")])],1)],1)],1)},[],!1,null,"0232ddee",null);e.default=l.exports},9988:function(t,e,s){},a6d2:function(t,e,s){},a776:function(t,e,s){},cfd5:function(t,e,s){"use strict";s.r(e);var n={name:"showAside",props:{toggleClick:{type:Function,default:null}}},a=(s("79e8"),s("17cc")),l=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"showAside pull-left",on:{click:this.toggleClick}},[e("i",{staticClass:"el-icon-menu"})])])},[],!1,null,"d0e62b68",null);e.default=l.exports},ebb9:function(t,e,s){"use strict";var n=s("a776");s.n(n).a}}]);