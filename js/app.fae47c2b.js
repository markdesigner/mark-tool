(function(e){function t(t){for(var n,r,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/mark-tool/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3d5e":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("AppHeader",{attrs:{headerList:e.headerList}}),o("div",{staticClass:"appContent"},[o("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"appHeader"},[o("div",{staticClass:"container"},e._l(e.headerList,(function(t,n){return o("div",{key:n,staticClass:"headerItem",class:{active:e.routeActiveIndex===n,headerItem:t}},[o("div",{staticClass:"item",on:{click:function(o){return e.handleClickHeaderItem(t,n)}}},[e._v(" "+e._s(t.text)+" ")])])})),0)])},s=[],c={name:"AppHeader",props:{headerList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{routeActiveIndex:0}},methods:{handleClickHeaderItem:function(e,t){console.log(e.routeName,"headerItem"),e.routeName&&(this.$router.push({name:e.routeName}),this.routeActiveIndex=t)}}},u=c,l=(o("cd2b"),o("2877")),p=Object(l["a"])(u,r,s,!1,null,"33fbcb6b",null),d=p.exports,m=[{text:"Home",routeName:"Home"},{text:"ComeSitTool",routeName:"ComeSitTool"},{text:"HouseTool",routeName:"HouseTool"},{text:"TestPage",routeName:"TestPage"}],v=m,f={name:"App",components:{AppHeader:d},data:function(){return{headerList:v}}},g=f,h=(o("5c0b"),Object(l["a"])(g,a,i,!1,null,null,null)),b=h.exports,y=o("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{staticClass:"copy__icon",attrs:{alt:"Vue logo",src:o("605b")}}),n("div",{staticClass:"copy__container"},[n("div",{staticClass:"copy__form copy__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.tip,expression:"copyForm.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:e.copyForm.tip},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"tip",t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.value,expression:"copyForm.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:e.copyForm.value},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"value",t.target.value)}}}),e._v(" "),n("div",{staticClass:"button__group"},[n("button",{on:{click:e.addItem}},[e._v("確認")])])]),n("draggable",e._b({model:{value:e.copyList,callback:function(t){e.copyList=t},expression:"copyList"}},"draggable",e.dragOptions,!1),e._l(e.copyList,(function(t){return n("div",{key:t.timestamp,staticClass:"copy__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tip,expression:"item.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:t.tip},on:{input:function(o){o.target.composing||e.$set(t,"tip",o.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}}),n("div",{staticClass:"button__group"},[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.value,expression:"item.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}]},[e._v(" 複製 ")]),n("button",{on:{click:function(t){return e.handleDelete(e.index)}}},[e._v("刪除此列")]),n("button",{staticClass:"handle"},[n("img",{staticClass:"icon",attrs:{src:o("b778")}})])])])})),0)],1)])},x=[],k=(o("a434"),o("b76a")),C=o.n(k),w={name:"Home",data:function(){return{copyList:[],copyForm:{value:"",tip:""}}},watch:{copyList:{handler:function(){this.handleSave()},deep:!0}},computed:{dragOptions:function(){return{animation:10,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{handleAdd:function(){this.copyList.push({value:"",tip:""})},copySuccess:function(){},copyError:function(){alert("copy Error")},handleSave:function(){var e=JSON.stringify(this.copyList);localStorage.setItem("copyList",e)},handleRestore:function(){var e=localStorage.getItem("copyList");if(e)try{var t=JSON.parse(e);this.copyList=t}catch(o){localStorage.removeItem("copyList")}},handleDelete:function(e){this.copyList.splice(e,1)},addItem:function(){var e=this.copyForm,t=e.value,o=e.tip,n={tip:o,value:t,timestamp:Date.parse(new Date)};this.copyList.unshift(n),this.copyForm={value:"",tip:""}}},mounted:function(){this.handleRestore()},components:{draggable:C.a}},T=w,D=(o("d1eb"),Object(l["a"])(T,_,x,!1,null,"39a9587d",null)),P=D.exports,N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CopyTool"},[o("div",{staticClass:"container"},[o("div",{staticClass:"input__item textInput"},[o("div",{staticClass:"textInput__item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],staticClass:"CopyTool__input CopyTool__input--guestName",attrs:{type:"text",placeholder:"人名"},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}})]),o("div",{staticClass:"textInput__item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.lockPassword,expression:"lockPassword"}],staticClass:"CopyTool__input CopyTool__input--lockPassword",attrs:{type:"text",placeholder:"電子鎖密碼"},domProps:{value:e.lockPassword},on:{input:function(t){t.target.composing||(e.lockPassword=t.target.value)}}})]),o("div",{staticClass:"periodSelect-container"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.period=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"whole"}},[e._v("整天場選擇")]),o("option",{attrs:{value:"morning"}},[e._v("上午場")]),o("option",{attrs:{value:"evening"}},[e._v("下午場")])])])]),o("div",{staticClass:"input__item"},[o("v-date-picker",{model:{value:e.bookingDate,callback:function(t){e.bookingDate=t},expression:"bookingDate"}})],1),o("div",{staticClass:"input__item"},[o("v-date-picker",{attrs:{mode:"time",isRange:"",is24hr:"",validHours:e.validHoursRange,"minute-increment":60},model:{value:e.bookingTime,callback:function(t){e.bookingTime=t},expression:"bookingTime"}})],1)]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dialogue,expression:"dialogue"}],staticClass:"CopyTool__textBlock",domProps:{value:e.dialogue},on:{input:function(t){t.target.composing||(e.dialogue=t.target.value)}}}),o("div",{staticClass:"CopyTool__ProduceButton"},[o("button",{on:{click:e.handleGenerateAndCopy}},[e._v("一鍵生成與複製")])])])},S=[],Y=o("c23f"),H=Y["a"],I=(o("a72a"),Object(l["a"])(H,N,S,!1,null,"4085b023",null)),O=I.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"TestPage"},[o("div",{staticClass:"tool"},[o("h1",{staticClass:"title"},[e._v("Rem換算")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rem,expression:"rem"}],attrs:{type:"text"},domProps:{value:e.rem},on:{input:[function(t){t.target.composing||(e.rem=t.target.value)},e.handleInputChange]}}),o("div",{staticClass:"answer"},[e._v(e._s(16*e.rem))])])])},L=[],M=(o("ac1f"),o("5319"),{name:"TestPage",components:{},data:function(){return{rem:1}},methods:{handleInputChange:function(){this.rem=this.rem.replace(/[^0-9.]/g,"")}}}),j=M,A=(o("95e1"),Object(l["a"])(j,E,L,!1,null,"fbe531e6",null)),$=A.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"HouseTool"},[o("div",{staticClass:"search-container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"text",placeholder:"建商名聲 or 建案全名"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}})]),o("div",{staticClass:"answer-container"},[o("span",[e._v("寶咖咖嗎？")]),e.isBao?o("div",{staticClass:"answer-text warning"},[e._v("是")]):o("div",{staticClass:"answer-text"},[e._v("否")])])])},B=[],R=(o("159b"),o("caad"),o("2532"),["佳瑞建設","佳陞建設","佳展建設","佳泰建設","佳群建設","佳晟建設","佳福建設","佳昂建設","佳順建設","佳鈜建設","佳鏵建設","佳峻建設","佳鋐建設","合遠建設","合康建設","合嘉建設","合陽建設","合新建設","合謙建設","合登建設","合硯建設","合雄建設","合展建設","合磊建設","和發建設","和峻建設","和瑞建設","和耀建設","和毅建設","和築建設","和宜建設","和洲建設","和紘建設","勝旺建設","勝華建設","勝麗建設","勝美建設","勝興建設","益欣建設","益展建設","益騏建設","益翔建設","鴻築建設","鴻灃建設","鴻承建設","鴻廣建設","寶佳建設","寶誠建設","寶欣建設","協和建設","協勝建設","協侑營造","櫻花建設","誠佳建設","傳佳建設","興築建設","鼎佳建設","築禾建設","泓瑞建設","悅佳建設","偉築建設","新大建設"]),J=R,z={name:"HouseTool",components:{},data:function(){return{answer:"順天建設"}},computed:{isBao:function(){return this.checkIsBao()}},methods:{checkIsBao:function(){var e=!1,t=this.answer.substr(0,2);return J.forEach((function(o){o.includes(t)&&(e=!0)})),e}}},G=z,q=(o("d9fe"),Object(l["a"])(G,F,B,!1,null,"3f67c292",null)),U=q.exports;n["default"].use(y["a"]);var V=[{path:"/",name:"Home",component:P},{path:"/ComSitTool",name:"ComeSitTool",component:O},{path:"/TestPage",name:"TestPage",component:$},{path:"/HouseTool",name:"HouseTool",component:U}],Q=new y["a"]({mode:"history",base:"/mark-tool/",routes:V}),Z=Q,K=o("2f62");n["default"].use(K["a"]);var W=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=o("4eb5"),ee=o.n(X),te=o("86e3"),oe=o.n(te),ne=o("404b"),ae=o.n(ne);n["default"].config.productionTip=!1,n["default"].use(ee.a),n["default"].component("v-calendar",oe.a),n["default"].component("v-date-picker",ae.a),new n["default"]({router:Z,store:W,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"605b":function(e,t,o){e.exports=o.p+"img/clipboard.2bd4e4cb.svg"},"631b":function(e,t,o){},9268:function(e,t,o){},"95e1":function(e,t,o){"use strict";o("9268")},"9c0c":function(e,t,o){},a72a:function(e,t,o){"use strict";o("adbb")},adbb:function(e,t,o){},b778:function(e,t,o){e.exports=o.p+"img/menu.a450cc10.svg"},c23f:function(e,t,o){"use strict";(function(e){var n=o("1da1"),a=(o("99af"),o("96cf"),o("5a0c")),i=o.n(a);o("50878");t["a"]={name:"CopyTool",data:function(){return{guestName:"",bookingStartTime:"",bookingEndTime:"",bookingDate:new Date,bookingTime:{start:i()(new Date).format("YYYY-MM-DDT12:00:00"),end:i()(new Date).format("YYYY-MM-DDT21:00:00")},lockPassword:"",dialogue:"",isCustomizeTime:!1,period:"whole",days:[]}},created:function(){i.a.locale("zh-tw"),e.vuecp=this},watch:{bookingDate:function(e){this.bookingTime={start:i()(e).format("YYYY-MM-DDT12:00:00"),end:i()(e).format("YYYY-MM-DDT21:00:00")}}},methods:{onDayClick:function(e){console.log("onDayClick",e)},setBookingTime:function(){"whole"===this.period?"6"===i()(this.bookingDate).format("d")||"0"===this.bookingDay?(this.bookingTime.start=i()(i()(this.bookingDate).format("YYYY-MM-DDT12:00:00")).toDate(),this.bookingTime.end=i()(i()(this.bookingDate).format("YYYY-MM-DDT21:00:00")).toDate(),console.log("設定中")):(this.bookingStartTime="09:00",this.bookingEndTime="21:00"):"morning"===this.period?(this.bookingStartTime="09:00",this.bookingEndTime="14:00"):(this.bookingStartTime="15:00",this.bookingEndTime="21:00")},handleGenerateAndCopy:function(){this.handleProduceText(),this.copy()},copy:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$copyText(e.dialogue).catch((function(){throw new Error("copy error")}));case 2:case"end":return t.stop()}}),t)})))()},handleProduceText:function(){var e="感謝預約，這邊先給您入場資訊與密碼呦～\n\n我們：".concat(this.arrangeBookingDate," 有來坐預約，採自助式入場\n\n到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。\n前來時您的密碼為「").concat(this.lockPassword,"#」要記得加#唷！\n密碼時效為 ").concat(this.arrangeStartTime," - ").concat(this.arrangeEndTime,"，中途都可自行進出\n\n\n我們的wifi是：\n名稱：comesit\n密碼：comesitspace\n\n這邊也提供設備的使用教學👉\n\n投影機使用教學：https://youtu.be/7xhJ_T1-SAU\n無線Airplay播放音樂教學: https://youtube.com/shorts/8qHSudYnUII?si=vzmeNdJY4npeST2m\n\n冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供）。\n另外為保持場地品質來坐一律不能吸菸、喝酒、開伙和砸派呦。\n離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內。\n使用過的餐具也幫我們集中到白色餐車上。\n\n停車資訊：\n騎機車的朋友們可以直接停來坐招牌前方與正門口，並請勿鎖龍頭。\n開車的朋友可停附近貴和停車場(無特約)、和周邊停車格呦!\n（https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)\n\n若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！\n祝您有個愉快的一天❤️\n");this.dialogue=e},handleCopyError:function(){alert("複製失敗")}},computed:{arrangeBookingDate:function(){return i()(this.bookingDate).format("YYYY/MM/DD dddd")},arrangeStartTime:function(){return i()(this.bookingTime.start).format("HH:mm")},arrangeEndTime:function(){return i()(this.bookingTime.end).format("HH:mm")},validHoursRange:function(){return 6!==this.bookingDate.getDay()&&0!==this.bookingDate.getDay()?{min:9,max:21}:{min:12,max:21}}},components:{}}}).call(this,o("c8ba"))},cd2b:function(e,t,o){"use strict";o("631b")},d1eb:function(e,t,o){"use strict";o("db77")},d9fe:function(e,t,o){"use strict";o("3d5e")},db77:function(e,t,o){}});
//# sourceMappingURL=app.fae47c2b.js.map