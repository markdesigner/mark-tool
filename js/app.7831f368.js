(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],p=0,m=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/mark-tool/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("AppHeader",{attrs:{headerList:e.headerList}}),o("div",{staticClass:"appContent"},[o("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"appHeader"},[o("div",{staticClass:"container"},e._l(e.headerList,(function(t,a){return o("div",{key:a,staticClass:"headerItem",class:{active:e.routeActiveIndex===a,headerItem:t}},[o("div",{staticClass:"item",on:{click:function(o){return e.handleClickHeaderItem(t,a)}}},[e._v(" "+e._s(t.text)+" ")])])})),0)])},r=[],c={name:"AppHeader",props:{headerList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{routeActiveIndex:0}},methods:{handleClickHeaderItem:function(e,t){console.log(e.routeName,"headerItem"),e.routeName&&(this.$router.push({name:e.routeName}),this.routeActiveIndex=t)}}},l=c,u=(o("cd2b"),o("2877")),p=Object(u["a"])(l,s,r,!1,null,"33fbcb6b",null),m=p.exports,d=[{text:"Home",routeName:"Home"},{text:"ComeSitTool",routeName:"ComeSitTool"},{text:"TestPage",routeName:"TestPage"}],v=d,g={name:"App",components:{AppHeader:m},data:function(){return{headerList:v}}},h=g,y=(o("5c0b"),Object(u["a"])(h,n,i,!1,null,null,null)),b=y.exports,f=o("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{staticClass:"copy__icon",attrs:{alt:"Vue logo",src:o("605b")}}),a("div",{staticClass:"copy__container"},[a("div",{staticClass:"copy__form copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.tip,expression:"copyForm.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:e.copyForm.tip},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"tip",t.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.value,expression:"copyForm.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:e.copyForm.value},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"value",t.target.value)}}}),e._v(" "),a("div",{staticClass:"button__group"},[a("button",{on:{click:e.addItem}},[e._v("確認")])])]),a("draggable",e._b({model:{value:e.copyList,callback:function(t){e.copyList=t},expression:"copyList"}},"draggable",e.dragOptions,!1),e._l(e.copyList,(function(t){return a("div",{key:t.timestamp,staticClass:"copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tip,expression:"item.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:t.tip},on:{input:function(o){o.target.composing||e.$set(t,"tip",o.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}}),a("div",{staticClass:"button__group"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.value,expression:"item.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}]},[e._v(" 複製 ")]),a("button",{on:{click:function(t){return e.handleDelete(e.index)}}},[e._v("刪除此列")]),a("button",{staticClass:"handle"},[a("img",{staticClass:"icon",attrs:{src:o("b778")}})])])])})),0)],1)])},T=[],k=(o("a434"),o("b76a")),C=o.n(k),x={name:"Home",data:function(){return{copyList:[],copyForm:{value:"",tip:""}}},watch:{copyList:{handler:function(){this.handleSave()},deep:!0}},computed:{dragOptions:function(){return{animation:10,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{handleAdd:function(){this.copyList.push({value:"",tip:""})},copySuccess:function(){},copyError:function(){alert("copy Error")},handleSave:function(){var e=JSON.stringify(this.copyList);localStorage.setItem("copyList",e)},handleRestore:function(){var e=localStorage.getItem("copyList");if(e)try{var t=JSON.parse(e);this.copyList=t}catch(o){localStorage.removeItem("copyList")}},handleDelete:function(e){this.copyList.splice(e,1)},addItem:function(){var e=this.copyForm,t=e.value,o=e.tip,a={tip:o,value:t,timestamp:Date.parse(new Date)};this.copyList.unshift(a),this.copyForm={value:"",tip:""}}},mounted:function(){this.handleRestore()},components:{draggable:C.a}},w=x,D=(o("d1eb"),Object(u["a"])(w,_,T,!1,null,"39a9587d",null)),N=D.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CopyTool"},[o("div",{staticClass:"CopyTool__container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],staticClass:"CopyTool__input CopyTool__input--guestName",attrs:{type:"text",placeholder:"人名"},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingDate,expression:"bookingDate"}],staticClass:"CopyTool__input CopyTool__input--bookingDate",attrs:{type:"date",placeholder:"日期"},domProps:{value:e.bookingDate},on:{change:e.setWeekDay,input:function(t){t.target.composing||(e.bookingDate=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.isCustomizeTime,expression:"isCustomizeTime"}],staticClass:"CopyTool__input CopyTool__input--bookingTime",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isCustomizeTime)?e._i(e.isCustomizeTime,null)>-1:e.isCustomizeTime},on:{change:function(t){var o=e.isCustomizeTime,a=t.target,n=!!a.checked;if(Array.isArray(o)){var i=null,s=e._i(o,i);a.checked?s<0&&(e.isCustomizeTime=o.concat([i])):s>-1&&(e.isCustomizeTime=o.slice(0,s).concat(o.slice(s+1)))}else e.isCustomizeTime=n}}}),e._v("是否為客製化時間 "),o("div",{staticClass:"customizeTime-container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingStartTime,expression:"bookingStartTime"}],staticClass:"CopyTool__input CopyTool__input--bookingTime",attrs:{type:"time",placeholder:"開始時間"},domProps:{value:e.bookingStartTime},on:{input:function(t){t.target.composing||(e.bookingStartTime=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingEndTime,expression:"bookingEndTime"}],staticClass:"CopyTool__input CopyTool__input--bookingTime",attrs:{type:"time",placeholder:"結束時間"},domProps:{value:e.bookingEndTime},on:{input:function(t){t.target.composing||(e.bookingEndTime=t.target.value)}}})]),o("div",{staticClass:"periodSelect-container"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.period=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"whole"}},[e._v("整天")]),o("option",{attrs:{value:"morning"}},[e._v("上午場")]),o("option",{attrs:{value:"evening"}},[e._v("下午場")])])]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.lockPassword,expression:"lockPassword"}],staticClass:"CopyTool__input CopyTool__input--lockPassword",attrs:{type:"text",placeholder:"電子鎖密碼"},domProps:{value:e.lockPassword},on:{input:function(t){t.target.composing||(e.lockPassword=t.target.value)}}}),o("span",[e._v(e._s(e.guestName)+" "+e._s(e.bookingDate)+" "+e._s(e.bookingStartTime)+" "+e._s(e.bookingEndTime)+" "+e._s(e.lockPassword))]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dialogue,expression:"dialogue"}],staticClass:"CopyTool__textBlock",domProps:{value:e.dialogue},on:{input:function(t){t.target.composing||(e.dialogue=t.target.value)}}})]),o("div",{staticClass:"CopyTool__ProduceButton"},[o("button",{on:{click:e.handleProduceText}},[e._v("一鍵生成")])]),o("div",{staticClass:"CopyTool__CopyButton"},[o("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.dialogue,expression:"dialogue",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.handleCopySuccess,expression:"handleCopySuccess",arg:"success"}]},[e._v(" 一鍵複製 ")])])])},S=[],E=(o("99af"),{name:"CopyTool",data:function(){return{guestName:"",bookingDate:"",bookingStartTime:"",bookingEndTime:"",bookingDay:"",lockPassword:"",dialogue:"",isCustomizeTime:!1,period:"whole"}},watch:{period:{handler:function(){this.setBookingTime()},immediate:!0}},methods:{setBookingTime:function(){"whole"===this.period?"週六"===this.bookingDay||"週日"===this.bookingDay?(this.bookingStartTime="12:00",this.bookingEndTime="21:00"):(this.bookingStartTime="09:00",this.bookingEndTime="21:00"):"morning"===this.period?(this.bookingStartTime="09:00",this.bookingEndTime="14:00"):(this.bookingStartTime="15:00",this.bookingEndTime="21:00")},setWeekDay:function(){this.bookingDay=this.generateWeekDay(this.bookingDate),this.setBookingTime()},handleProduceText:function(){var e="感謝".concat(this.guestName?"坐友":"").concat(this.guestName,"預約～\n我們：").concat(this.bookingDate," ").concat(this.bookingDay," 有來坐預約，採自助式入場\n\n到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。\n前來時您的密碼為「").concat(this.lockPassword,"#」要記得加#唷！\n密碼時效為").concat(this.bookingDay," ").concat(this.bookingStartTime," - ").concat(this.bookingEndTime,"，中途都可自行進出\n\n疫情期間比較不一樣的是我們會在門口放上感應式溫度計及酒精，入場時幫我們掃個QR碼後，量個溫度+手部消毒後再入場\n\n我們的wifi是：\n名稱：comesit\n密碼：comesitspace\n\n\n冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供）。\n另外為保持場地品質來坐一律不能吸菸、喝酒、開伙和砸派呦。\n離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內！\n\n停車資訊：\n騎機車的朋友們可以直接停來坐門口空位處，開車的朋友可停附近貴和停車場\n（https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)\n\n若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！\n祝您有個愉快的一天❤️\n");this.dialogue=e},handleCopySuccess:function(){alert("複製成功")},generateWeekDay:function(e){var t=new Date(e),o=t.getDay();return this.mappingDayToChineseDay(o)},mappingDayToChineseDay:function(e){var t=["週日","週一","週二","週三","週四","週五","週六"];return t[e]}},computed:{},components:{}}),O=E,A=(o("e54a"),Object(u["a"])(O,P,S,!1,null,"89627838",null)),L=A.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"TestPage"},[o("h1",[e._v("Test")]),o("AppTable",{attrs:{headData:e.headData},scopedSlots:e._u([{key:"thead",fn:function(t){return[e._v(" "+e._s(t.items)+" "),o("div",[e._v(" "+e._s(t.number)+" ")])]}}])})],1)},I=[],z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"AppTable"},[o("table",[o("thead",[e._t("thead",(function(){return[o("tr",e._l(e.headData,(function(t,a){return o("th",{key:a},[e._v(" "+e._s(t)+" ")])})),0)]}),{number:e.headData.length,items:e.headData})],2)])])},H=[],$=o("11c1"),F={name:"AppTable",props:{headData:{type:Array,required:!1,default:function(){return 9}}},methods:{generateUUID:function(){return Object($["v4"])()}}},B=F,J=(o("9a32"),Object(u["a"])(B,z,H,!1,null,"3b0d6734",null)),M=J.exports,W={name:"TestPage",components:{AppTable:M},data:function(){return{headData:["name","age","gender"]}}},R=W,q=Object(u["a"])(R,j,I,!1,null,"00f48bc2",null),Q=q.exports;a["a"].use(f["a"]);var U=[{path:"/",name:"Home",component:N},{path:"/ComSitTool",name:"ComeSitTool",component:L},{path:"/TestPage",name:"TestPage",component:Q}],V=new f["a"]({mode:"history",base:"/mark-tool/",routes:U}),G=V,Z=o("2f62");a["a"].use(Z["a"]);var K=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=o("4eb5"),Y=o.n(X);a["a"].config.productionTip=!1,a["a"].use(Y.a),new a["a"]({router:G,store:K,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"605b":function(e,t,o){e.exports=o.p+"img/clipboard.2bd4e4cb.svg"},"631b":function(e,t,o){},"73bd":function(e,t,o){},"9a32":function(e,t,o){"use strict";o("73bd")},"9c0c":function(e,t,o){},b778:function(e,t,o){e.exports=o.p+"img/menu.a450cc10.svg"},be72:function(e,t,o){},cd2b:function(e,t,o){"use strict";o("631b")},d1eb:function(e,t,o){"use strict";o("db77")},db77:function(e,t,o){},e54a:function(e,t,o){"use strict";o("be72")}});
//# sourceMappingURL=app.7831f368.js.map