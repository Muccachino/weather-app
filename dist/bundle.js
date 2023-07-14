(()=>{"use strict";var t={99:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,'*{margin:0;box-sizing:border-box}body{display:grid;justify-content:center;background-color:lavender}body #cityInput{width:40vw;height:40px;font-size:large;border:none;border-bottom:2px solid mediumaquamarine;border-radius:5px;margin-top:200px;padding-left:10px}body #switch{margin-top:20px;place-self:start end;position:relative;display:inline-block;width:40px;height:24px}body #switch input{opacity:0;width:0;height:0}body #switch input:checked+#slider{background-color:#2196f3}body #switch input:focus+#slider{box-shadow:0 0 1px #2196f3}body #switch input:checked+#slider:before{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}body #switch #slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;border-radius:34px;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s}body #switch #slider::before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;border-radius:50%;background-color:white;-webkit-transition:0.4s;transition:0.4s}body #cel-fa{place-self:center end}body .hide{display:none}body #container{padding:20px;width:40vw;display:grid;justify-items:center;align-items:center;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(4, 60px);border-radius:10px}body #container p{grid-column:2;font-size:1.5em}body #container .data1{grid-column:3;grid-row:1/5;font-size:3em}body #container img{grid-column:1;grid-row:1/5;width:130px;height:130px}\n',""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=o(t,r),d=0;d<i.length;d++){var u=n(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(99),m={};function h(t,e,n,o){let r=document.createElement(t);return null!=e&&r.classList.add(e),null!=n&&(r.id=n),null!=o&&(r.innerHTML=o),r}function x(t,e){t.appendChild(e)}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=t=>{container.innerHTML="";for(let e=0;e<t.length-1;e++){const n=document.createElement("p");n.innerHTML=t[e],n.classList.add(`data${e}`),container.appendChild(n)}!function(t,e){let n=new Image;n.src=t,e.appendChild(n)}(`https://openweathermap.org/img/wn/${t[5]}@2x.png`,container),y()},y=()=>{document.querySelector("#switch").classList.remove("hide"),document.querySelector("#slider").classList.remove("hide"),document.querySelector("#cel-fa").classList.remove("hide")};async function w(t,e){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=dcdb46266f021e65cfdf86ea280dcece`),o=await n.json();if("Celsius"===e){const t=[[o.name,o.sys.country],`${(o.main.temp-273.15).toFixed(1)} °C`,`Min: ${(o.main.temp_min-273.15).toFixed(1)} °C`,`Max: ${(o.main.temp_max-273.15).toFixed(1)} °C`,o.weather[0].description,o.weather[0].icon];b(t),(t=>{const e=document.querySelector("body");e.style.background="Clear"===t?"url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)":"Clouds"===t?"url(https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)":"Mist"===t?"url(https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)":"Snow"===t?"url(https://images.unsplash.com/photo-1491569916836-1d2e4fc9300b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)":"Rain"===t?"url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)":"Drizzle"===t?"url(https://images.unsplash.com/photo-1608890306831-58efdc14450b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1177&q=80)":"Thunderstorm"===t?"url(https://images.unsplash.com/photo-1583459094467-e0db130c0dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)":"url(https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",e.style.backgroundPosition="center",e.style.backgroundSize="cover"})(o.weather[0].main)}else if("Fahrenheit"===e){const t=[[o.name,o.sys.country],`${(9*(o.main.temp-273.15)/5+32).toFixed(1)} °F`,`Min: ${(9*(o.main.temp_min-273.15)/5+32).toFixed(1)} °F`,`Max: ${(9*(o.main.temp_max-273.15)/5+32).toFixed(1)} °F`,o.weather[0].description,o.weather[0].icon];b(t)}}catch(t){throw new Error("Sorry, something went wrong")}}let g=1;!function(){const t=h("input",null,"cityInput");t.type="text",t.placeholder="City",x(document.body,t)}(),function(){!function(t){const e=h("label","hide","switch"),n=h("input",null,"switchbox");n.type="checkbox";const o=h("span","hide","slider");x(e,n),x(e,o),x(t,e)}(document.body);const t=h("span","hide","cel-fa","°C / °F");x(document.body,t)}(),function(){const t=h("div",null,"container");x(document.body,t)}(),document.querySelector("#slider").addEventListener("click",(()=>{const t=cityInput.value;1===g?(w(t,"Fahrenheit"),g=2):(w(t,"Celsius"),g=1)})),cityInput.addEventListener("keydown",(t=>{"Enter"===t.key&&(w(cityInput.value,"Celsius"),container.style.backgroundColor="rgba(135,206,235,0.5)")}))})()})();