(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/mark-tool/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},4602:function(e,t,o){"use strict";o("e67c")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-link",{attrs:{to:"ComSitTool"}},[e._v("ComSitTool")]),o("router-view")],1)},i=[],r=(o("5c0b"),o("2877")),s={},c=Object(r["a"])(s,n,i,!1,null,null,null),l=c.exports,p=o("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{staticClass:"copy__icon",attrs:{alt:"Vue logo",src:o("605b")}}),a("div",{staticClass:"copy__container"},[a("div",{staticClass:"copy__form copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.tip,expression:"copyForm.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:e.copyForm.tip},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"tip",t.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.value,expression:"copyForm.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:e.copyForm.value},on:{input:function(t){t.target.composing||e.$set(e.copyForm,"value",t.target.value)}}}),e._v(" "),a("div",{staticClass:"button__group"},[a("button",{on:{click:e.addItem}},[e._v("確認")])])]),a("draggable",e._b({model:{value:e.copyList,callback:function(t){e.copyList=t},expression:"copyList"}},"draggable",e.dragOptions,!1),e._l(e.copyList,(function(t){return a("div",{key:t.timestamp,staticClass:"copy__item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tip,expression:"item.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:t.tip},on:{input:function(o){o.target.composing||e.$set(t,"tip",o.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:t.value},on:{input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}}),a("div",{staticClass:"button__group"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.value,expression:"item.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}]},[e._v(" 複製 ")]),a("button",{on:{click:function(t){return e.handleDelete(e.index)}}},[e._v("刪除此列")]),a("button",{staticClass:"handle"},[a("img",{staticClass:"icon",attrs:{src:o("b778")}})])])])})),0)],1)])},d=[],m=(o("a434"),o("b76a")),v=o.n(m),g={name:"Home",data:function(){return{copyList:[],copyForm:{value:"",tip:""}}},watch:{copyList:{handler:function(){this.handleSave()},deep:!0}},computed:{dragOptions:function(){return{animation:10,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{handleAdd:function(){this.copyList.push({value:"",tip:""})},copySuccess:function(){},copyError:function(){alert("copy Error")},handleSave:function(){var e=JSON.stringify(this.copyList);localStorage.setItem("copyList",e)},handleRestore:function(){var e=localStorage.getItem("copyList");if(e)try{var t=JSON.parse(e);this.copyList=t}catch(o){localStorage.removeItem("copyList")}},handleDelete:function(e){this.copyList.splice(e,1)},addItem:function(){var e=this.copyForm,t=e.value,o=e.tip,a={tip:o,value:t,timestamp:Date.parse(new Date)};this.copyList.unshift(a),this.copyForm={value:"",tip:""}}},mounted:function(){this.handleRestore(),window.onbeforeunload=function(){return!0}},components:{draggable:v.a}},y=g,f=(o("5f38"),Object(r["a"])(y,u,d,!1,null,"1e4dbee4",null)),b=f.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CopyTool"},[o("div",{staticClass:"CopyTool__container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],staticClass:"CopyTool__input CopyTool__input--guestName",attrs:{type:"text",placeholder:"人名"},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingDate,expression:"bookingDate"}],staticClass:"CopyTool__input CopyTool__input--bookingDate",attrs:{type:"date",placeholder:"日期"},domProps:{value:e.bookingDate},on:{input:function(t){t.target.composing||(e.bookingDate=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingStartTime,expression:"bookingStartTime"}],staticClass:"CopyTool__input CopyTool__input--bookingTime",attrs:{type:"time",placeholder:"開始時間"},domProps:{value:e.bookingStartTime},on:{input:function(t){t.target.composing||(e.bookingStartTime=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bookingEndTime,expression:"bookingEndTime"}],staticClass:"CopyTool__input CopyTool__input--bookingTime",attrs:{type:"time",placeholder:"結束時間"},domProps:{value:e.bookingEndTime},on:{input:function(t){t.target.composing||(e.bookingEndTime=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.lockPassword,expression:"lockPassword"}],staticClass:"CopyTool__input CopyTool__input--lockPassword",attrs:{type:"text",placeholder:"電子鎖密碼"},domProps:{value:e.lockPassword},on:{input:function(t){t.target.composing||(e.lockPassword=t.target.value)}}}),o("span",[e._v(e._s(e.guestName)+" "+e._s(e.bookingDate)+" "+e._s(e.bookingStartTime)+" "+e._s(e.bookingEndTime)+" "+e._s(e.lockPassword))]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dialogue,expression:"dialogue"}],staticClass:"CopyTool__textBlock",domProps:{value:e.dialogue},on:{input:function(t){t.target.composing||(e.dialogue=t.target.value)}}})]),o("div",{staticClass:"CopyTool__ProduceButton"},[o("button",{on:{click:e.handleProduceText}},[e._v("一鍵生成")])]),o("div",{staticClass:"CopyTool__CopyButton"},[o("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.dialogue,expression:"dialogue",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.handleCopySuccess,expression:"handleCopySuccess",arg:"success"}]},[e._v(" 一鍵複製 ")])])])},h=[],k=(o("99af"),{name:"CopyTool",data:function(){return{guestName:"",bookingDate:"",bookingStartTime:"",bookingEndTime:"",bookingDay:"週三",lockPassword:"",dialogue:""}},watch:{},methods:{handleProduceText:function(){this.bookingDay=this.generateWeekDay(this.bookingDate);var e="早安～".concat(this.guestName,"\n我們").concat(this.bookingDate," ").concat(this.bookingDay,"有來坐預約\n我們來坐採自助式入場\n\n到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。\n前來時您的密碼為「").concat(this.lockPassword,"#」要記得加#唷！\n密碼時效為").concat(this.bookingDay," ").concat(this.bookingStartTime," - ").concat(this.bookingEndTime,"，中途都可自行進出\n\n疫情期間比較不一樣的是我們會在門口放上感應式溫度計及酒精，入場時幫我們掃個QR碼後，量個溫度+手部消毒後再入場\n\n我們的wifi是：\n名稱：comesit\n密碼：comesitspace\n因為地下室訊號較差建議先連上呦😄\n\n冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供）。\n另外為保持場地品質來坐一律不能吸菸、喝酒、開伙和砸派呦。\n離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內！\n\n停車資訊：\n騎機車的朋友們可以直接停來坐門口空位處，開車的朋友可停附近貴和停車場\n（https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)\n\n若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！\n祝您有個愉快的一天❤️\n");this.dialogue=e},handleCopySuccess:function(){alert("複製成功")},generateWeekDay:function(e){var t=new Date(e),o=t.getDay();return this.mappingDayToChineseDay(o)},mappingDayToChineseDay:function(e){var t=["週一","週二","週三","週四","週五","週六","週日"];return t[e]}},computed:{},components:{}}),C=k,x=(o("4602"),Object(r["a"])(C,_,h,!1,null,"33b84a26",null)),w=x.exports;a["a"].use(p["a"]);var T=[{path:"/",name:"Home",component:b},{path:"/ComSitTool",name:"ComeSitTool",component:w}],S=new p["a"]({mode:"history",base:"/mark-tool/",routes:T}),P=S,N=o("2f62");a["a"].use(N["a"]);var D=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=o("4eb5"),E=o.n(O);a["a"].config.productionTip=!1,a["a"].use(E.a),new a["a"]({router:P,store:D,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"5f38":function(e,t,o){"use strict";o("6f03")},"605b":function(e,t,o){e.exports=o.p+"img/clipboard.2bd4e4cb.svg"},"6f03":function(e,t,o){},"9c0c":function(e,t,o){},b778:function(e,t,o){e.exports=o.p+"img/menu.a450cc10.svg"},e67c:function(e,t,o){}});
//# sourceMappingURL=app.3efcecda.js.map