(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/mark-tool/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1dff":function(t,e,o){"use strict";o("5704")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AppHeader",{attrs:{headerList:t.headerList}}),o("div",{staticClass:"appContent"},[o("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"appHeader"},[o("div",{staticClass:"container"},t._l(t.headerList,(function(e,a){return o("div",{key:a,staticClass:"headerItem",class:{active:t.routeActiveIndex===a,headerItem:e}},[o("div",{staticClass:"item",on:{click:function(o){return t.handleClickHeaderItem(e,a)}}},[t._v(" "+t._s(e.text)+" ")])])})),0)])},s=[],c={name:"AppHeader",props:{headerList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{routeActiveIndex:0}},methods:{handleClickHeaderItem:function(t,e){console.log(t.routeName,"headerItem"),t.routeName&&(this.$router.push({name:t.routeName}),this.routeActiveIndex=e)}}},u=c,l=(o("cd2b"),o("2877")),p=Object(l["a"])(u,r,s,!1,null,"33fbcb6b",null),d=p.exports,m=[{text:"Home",routeName:"Home"},{text:"ComeSitTool",routeName:"ComeSitTool"},{text:"TestPage",routeName:"TestPage"}],v=m,f={name:"App",components:{AppHeader:d},data:function(){return{headerList:v}}},g=f,h=(o("5c0b"),Object(l["a"])(g,n,i,!1,null,null,null)),b=h.exports,y=o("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{staticClass:"copy__icon",attrs:{alt:"Vue logo",src:o("605b")}}),a("div",{staticClass:"copy__container"},[a("div",{staticClass:"copy__form copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyForm.tip,expression:"copyForm.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:t.copyForm.tip},on:{input:function(e){e.target.composing||t.$set(t.copyForm,"tip",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyForm.value,expression:"copyForm.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:t.copyForm.value},on:{input:function(e){e.target.composing||t.$set(t.copyForm,"value",e.target.value)}}}),t._v(" "),a("div",{staticClass:"button__group"},[a("button",{on:{click:t.addItem}},[t._v("確認")])])]),a("draggable",t._b({model:{value:t.copyList,callback:function(e){t.copyList=e},expression:"copyList"}},"draggable",t.dragOptions,!1),t._l(t.copyList,(function(e){return a("div",{key:e.timestamp,staticClass:"copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tip,expression:"item.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:e.tip},on:{input:function(o){o.target.composing||t.$set(e,"tip",o.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}}),a("div",{staticClass:"button__group"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"item.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}]},[t._v(" 複製 ")]),a("button",{on:{click:function(e){return t.handleDelete(t.index)}}},[t._v("刪除此列")]),a("button",{staticClass:"handle"},[a("img",{staticClass:"icon",attrs:{src:o("b778")}})])])])})),0)],1)])},k=[],x=(o("a434"),o("b76a")),T=o.n(x),C={name:"Home",data:function(){return{copyList:[],copyForm:{value:"",tip:""}}},watch:{copyList:{handler:function(){this.handleSave()},deep:!0}},computed:{dragOptions:function(){return{animation:10,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{handleAdd:function(){this.copyList.push({value:"",tip:""})},copySuccess:function(){},copyError:function(){alert("copy Error")},handleSave:function(){var t=JSON.stringify(this.copyList);localStorage.setItem("copyList",t)},handleRestore:function(){var t=localStorage.getItem("copyList");if(t)try{var e=JSON.parse(t);this.copyList=e}catch(o){localStorage.removeItem("copyList")}},handleDelete:function(t){this.copyList.splice(t,1)},addItem:function(){var t=this.copyForm,e=t.value,o=t.tip,a={tip:o,value:e,timestamp:Date.parse(new Date)};this.copyList.unshift(a),this.copyForm={value:"",tip:""}}},mounted:function(){this.handleRestore()},components:{draggable:T.a}},D=C,w=(o("d1eb"),Object(l["a"])(D,_,k,!1,null,"39a9587d",null)),P=w.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"CopyTool"},[o("div",{staticClass:"container"},[o("div",{staticClass:"input__item textInput"},[o("div",{staticClass:"textInput__item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.guestName,expression:"guestName"}],staticClass:"CopyTool__input CopyTool__input--guestName",attrs:{type:"text",placeholder:"人名"},domProps:{value:t.guestName},on:{input:function(e){e.target.composing||(t.guestName=e.target.value)}}})]),o("div",{staticClass:"textInput__item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.lockPassword,expression:"lockPassword"}],staticClass:"CopyTool__input CopyTool__input--lockPassword",attrs:{type:"text",placeholder:"電子鎖密碼"},domProps:{value:t.lockPassword},on:{input:function(e){e.target.composing||(t.lockPassword=e.target.value)}}})]),o("div",{staticClass:"periodSelect-container"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.period,expression:"period"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.period=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"whole"}},[t._v("整天")]),o("option",{attrs:{value:"morning"}},[t._v("上午場")]),o("option",{attrs:{value:"evening"}},[t._v("下午場")])])])]),o("div",{staticClass:"input__item"},[o("v-date-picker",{model:{value:t.bookingDate,callback:function(e){t.bookingDate=e},expression:"bookingDate"}})],1),o("div",{staticClass:"input__item"},[o("v-date-picker",{attrs:{mode:"time",isRange:"",is24hr:"",validHours:t.validHoursRange,"minute-increment":60},model:{value:t.bookingTime,callback:function(e){t.bookingTime=e},expression:"bookingTime"}})],1)]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dialogue,expression:"dialogue"}],staticClass:"CopyTool__textBlock",domProps:{value:t.dialogue},on:{input:function(e){e.target.composing||(t.dialogue=e.target.value)}}}),o("div",{staticClass:"CopyTool__ProduceButton"},[o("button",{on:{click:t.handleGenerateAndCopy}},[t._v("一鍵生成與複製")])])])},S=[],Y=o("c23f"),O=Y["a"],E=(o("1dff"),Object(l["a"])(O,N,S,!1,null,"4cd237f0",null)),H=E.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"TestPage"},[o("h1",[t._v("Test")]),o("AppTable",{attrs:{headData:t.headData},scopedSlots:t._u([{key:"thead",fn:function(e){return[t._v(" "+t._s(e.items)+" "),o("div",[t._v(" "+t._s(e.number)+" ")])]}}])})],1)},M=[],j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"AppTable"},[o("table",[o("thead",[t._t("thead",(function(){return[o("tr",t._l(t.headData,(function(e,a){return o("th",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]}),{number:t.headData.length,items:t.headData})],2)])])},I=[],A=o("ec26"),$={name:"AppTable",props:{headData:{type:Array,required:!1,default:function(){return 9}}},methods:{generateUUID:function(){return Object(A["a"])()}}},F=$,R=(o("9a32"),Object(l["a"])(F,j,I,!1,null,"3b0d6734",null)),B=R.exports,J={name:"TestPage",components:{AppTable:B},data:function(){return{headData:["name","age","gender"]}}},U=J,z=Object(l["a"])(U,L,M,!1,null,"00f48bc2",null),G=z.exports;a["default"].use(y["a"]);var V=[{path:"/",name:"Home",component:P},{path:"/ComSitTool",name:"ComeSitTool",component:H},{path:"/TestPage",name:"TestPage",component:G}],q=new y["a"]({mode:"history",base:"/mark-tool/",routes:V}),K=q,Q=o("2f62");a["default"].use(Q["a"]);var X=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=o("4eb5"),W=o.n(Z),tt=o("86e3"),et=o.n(tt),ot=o("404b"),at=o.n(ot);a["default"].config.productionTip=!1,a["default"].use(W.a),a["default"].component("v-calendar",et.a),a["default"].component("v-date-picker",at.a),new a["default"]({router:K,store:X,render:function(t){return t(b)}}).$mount("#app")},5704:function(t,e,o){},"5c0b":function(t,e,o){"use strict";o("9c0c")},"605b":function(t,e,o){t.exports=o.p+"img/clipboard.2bd4e4cb.svg"},"631b":function(t,e,o){},"73bd":function(t,e,o){},"9a32":function(t,e,o){"use strict";o("73bd")},"9c0c":function(t,e,o){},b778:function(t,e,o){t.exports=o.p+"img/menu.a450cc10.svg"},c23f:function(t,e,o){"use strict";(function(t){var a=o("1da1"),n=(o("99af"),o("96cf"),o("5a0c")),i=o.n(n);o("50878");e["a"]={name:"CopyTool",data:function(){return{guestName:"",bookingStartTime:"",bookingEndTime:"",bookingDate:new Date,bookingTime:{start:i()(new Date).format("YYYY-MM-DDT12:00:00"),end:i()(new Date).format("YYYY-MM-DDT21:00:00")},lockPassword:"",dialogue:"",isCustomizeTime:!1,period:"whole",days:[]}},created:function(){i.a.locale("zh-tw"),t.vuecp=this},watch:{bookingDate:function(t){this.bookingTime={start:i()(t).format("YYYY-MM-DDT12:00:00"),end:i()(t).format("YYYY-MM-DDT21:00:00")}}},methods:{onDayClick:function(t){console.log("onDayClick",t)},setBookingTime:function(){"whole"===this.period?"6"===i()(this.bookingDate).format("d")||"0"===this.bookingDay?(this.bookingTime.start=i()(i()(this.bookingDate).format("YYYY-MM-DDT12:00:00")).toDate(),this.bookingTime.end=i()(i()(this.bookingDate).format("YYYY-MM-DDT21:00:00")).toDate(),console.log("設定中")):(this.bookingStartTime="09:00",this.bookingEndTime="21:00"):"morning"===this.period?(this.bookingStartTime="09:00",this.bookingEndTime="14:00"):(this.bookingStartTime="15:00",this.bookingEndTime="21:00")},handleGenerateAndCopy:function(){this.handleProduceText(),this.copy()},copy:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$copyText(t.dialogue).catch((function(){throw new Error("copy error")}));case 2:case"end":return e.stop()}}),e)})))()},handleProduceText:function(){var t="這邊先給您入場資訊與密碼呦～\n\n感謝".concat(this.guestName?"坐友":"").concat(this.guestName,"預約～\n我們：").concat(this.arrangeBookingDate," 有來坐預約，採自助式入場\n\n到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。\n前來時您的密碼為「").concat(this.lockPassword,"#」要記得加#唷！\n密碼時效為 ").concat(this.arrangeStartTime," - ").concat(this.arrangeEndTime,"，中途都可自行進出\n\n\n我們的wifi是：\n名稱：comesit\n密碼：comesitspace\n\n這邊也提供設備的使用教學👉\n\n投影機使用教學：https://youtu.be/jmIlVMdkUKU\n藍芽音響使用教學：https://youtu.be/OhyRXlig23s\n\n冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供）。\n另外為保持場地品質來坐一律不能吸菸、喝酒、開伙和砸派呦。\n離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內！\n\n停車資訊：\n騎機車的朋友們可以直接停來坐招牌前方與正門口，並請勿鎖龍頭。\n開車的朋友可停附近貴和停車場呦\n（https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)\n\n若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！\n祝您有個愉快的一天❤️\n");this.dialogue=t},handleCopyError:function(){alert("複製失敗")}},computed:{arrangeBookingDate:function(){return i()(this.bookingDate).format("YYYY/MM/DD dddd")},arrangeStartTime:function(){return i()(this.bookingTime.start).format("HH:mm")},arrangeEndTime:function(){return i()(this.bookingTime.end).format("HH:mm")},validHoursRange:function(){return 6!==this.bookingDate.getDay()&&0!==this.bookingDate.getDay()?{min:9,max:21}:{min:12,max:21}}},components:{}}}).call(this,o("c8ba"))},cd2b:function(t,e,o){"use strict";o("631b")},d1eb:function(t,e,o){"use strict";o("db77")},db77:function(t,e,o){}});
//# sourceMappingURL=app.eee6f7cd.js.map