(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==n[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fe51cd5b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}n[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mark-tool/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},3646:function(e,t,o){"use strict";o("9cce")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],c=(o("5c0b"),o("2877")),i={},u=Object(c["a"])(i,n,a,!1,null,null,null),s=u.exports,l=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{staticClass:"copy__icon",attrs:{alt:"Vue logo",src:o("605b")}}),r("div",{staticClass:"copy__container"},[r("div",{staticClass:"copy__form copy__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.tip,expression:"copyForm.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:e.copyForm.tip},on:{blur:e.handleSave,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.copyForm,"tip",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.copyForm.value,expression:"copyForm.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:e.copyForm.value},on:{blur:e.handleSave,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.copyForm,"value",t.target.value)}}}),r("div",{staticClass:"button__group"},[r("button",{on:{click:e.addItem}},[e._v("確認")])])]),e._l(e.copyList,(function(t,o){return r("div",{key:o,staticClass:"copy__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tip,expression:"item.tip"}],staticClass:"copy__text copy__text--tip",attrs:{type:"text",placeholder:"給個標題"},domProps:{value:t.tip},on:{blur:e.handleSave,input:function(o){o.target.composing||e.$set(t,"tip",o.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"copy__text copy__text--value",attrs:{type:"text",placeholder:"要複製的文字"},domProps:{value:t.value},on:{blur:e.handleSave,input:function(o){o.target.composing||e.$set(t,"value",o.target.value)}}}),r("div",{staticClass:"button__group"},[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.value,expression:"item.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}]},[e._v(" 複製 ")]),r("button",{on:{click:function(t){return e.handleDelete(o)}}},[e._v("刪除此列")])])])}))],2)])},d=[],m=(o("a434"),{name:"Home",data:function(){return{copyList:[],copyForm:{value:"",tip:""}}},methods:{handleAdd:function(){this.copyList.push({value:"",tip:""})},copySuccess:function(){},copyError:function(){alert("copy Error")},handleSave:function(){var e=JSON.stringify(this.copyList);localStorage.setItem("copyList",e)},handleRestore:function(){var e=localStorage.getItem("copyList");if(e)try{var t=JSON.parse(e);this.copyList=t}catch(o){localStorage.removeItem("copyList")}},handleDelete:function(e){this.copyList.splice(e,1)},addItem:function(){this.copyList.push(this.copyForm),this.copyForm={value:"",tip:""},this.handleSave()}},mounted:function(){this.handleRestore()},components:{}}),v=m,f=(o("3646"),Object(c["a"])(v,p,d,!1,null,"e7183392",null)),y=f.exports;r["a"].use(l["a"]);var h=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],b=new l["a"]({mode:"history",base:"/mark-tool/",routes:h}),_=b,g=o("2f62");r["a"].use(g["a"]);var x=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=o("4eb5"),k=o.n(w);r["a"].config.productionTip=!1,r["a"].use(k.a),new r["a"]({router:_,store:x,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"605b":function(e,t,o){e.exports=o.p+"img/clipboard.2bd4e4cb.svg"},"9c0c":function(e,t,o){},"9cce":function(e,t,o){}});
//# sourceMappingURL=app.7bb36d44.js.map