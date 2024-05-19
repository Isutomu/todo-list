(()=>{"use strict";var n={534:(n,t,e)=>{e.d(t,{A:()=>a});var r=e(354),o=e.n(r),s=e(314),i=e.n(s)()(o());i.push([n.id,"body {\n  min-height: 100vh;\n  background-color: rgb(99, 128, 240);\n\n  font-size: 24px;\n  text-align: center;\n  font-family: 'Courier New', Courier, monospace;\n\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 1fr;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  justify-items: center;\n}\n\nsection {\n  width: 100%;\n  padding: 15px;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton:hover {\n  background-color: rgba(0, 0, 0, 0.137);\n  color: purple;\n}\n\nbutton:active {\n  background-color: rgb(0, 0, 0);\n}","",{version:3,sources:["webpack://./src/style/common.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,mCAAmC;;EAEnC,eAAe;EACf,kBAAkB;EAClB,8CAA8C;;EAE9C,aAAa;EACb,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sCAAsC;EACtC,aAAa;AACf;;AAEA;EACE,8BAA8B;AAChC",sourcesContent:["body {\n  min-height: 100vh;\n  background-color: rgb(99, 128, 240);\n\n  font-size: 24px;\n  text-align: center;\n  font-family: 'Courier New', Courier, monospace;\n\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 1fr;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  justify-items: center;\n}\n\nsection {\n  width: 100%;\n  padding: 15px;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton:hover {\n  background-color: rgba(0, 0, 0, 0.137);\n  color: purple;\n}\n\nbutton:active {\n  background-color: rgb(0, 0, 0);\n}"],sourceRoot:""}]);const a=i},816:(n,t,e)=>{e.d(t,{A:()=>a});var r=e(354),o=e.n(r),s=e(314),i=e.n(s)()(o());i.push([n.id,"#list-display{\n  width: 100%;\n  display: grid;\n  justify-items: start;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr 50px;\n}\n\n#list-display h2 {\n  width: 100%;\n  padding-bottom: 15px;\n}\n\n#list-display h2 input {\n  width: 100%;\n  font-size: 3rem;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  word-spacing: -10px;\n  color: white;\n}\n\n#tasks-list{\n  width: 100%;\n  overflow: scroll;\n  display: grid;\n  grid-auto-rows: 40px;\n  grid-template-columns: 1fr;\n  list-style-type: none;\n  gap: 5px;\n  text-align: start;\n  user-select: none;\n}\n\n#tasks-list li{\n  background-color: rgb(255, 255, 255);\n  border-radius: 3px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n}\n\n#tasks-list button {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n\n#new-task-entry {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px;\n  align-self: end;\n  gap: 5px;\n  background-color: rgb(237, 238, 238);\n  border-radius: 3px;\n}\n\n#new-task-entry button {\n  border: none;\n  border-radius: 3px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n#new-task-entry input {\n  padding-left: 5px;\n  border: none;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#new-task-entry input:focus {\n  outline: none;\n  background-color: white;\n}","",{version:3,sources:["webpack://./src/style/list-display.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,wCAAwC;EACxC,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,qBAAqB;EACrB,QAAQ;EACR,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,wBAAwB;EACxB,eAAe;EACf,QAAQ;EACR,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB",sourcesContent:["#list-display{\n  width: 100%;\n  display: grid;\n  justify-items: start;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr 50px;\n}\n\n#list-display h2 {\n  width: 100%;\n  padding-bottom: 15px;\n}\n\n#list-display h2 input {\n  width: 100%;\n  font-size: 3rem;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  word-spacing: -10px;\n  color: white;\n}\n\n#tasks-list{\n  width: 100%;\n  overflow: scroll;\n  display: grid;\n  grid-auto-rows: 40px;\n  grid-template-columns: 1fr;\n  list-style-type: none;\n  gap: 5px;\n  text-align: start;\n  user-select: none;\n}\n\n#tasks-list li{\n  background-color: rgb(255, 255, 255);\n  border-radius: 3px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n}\n\n#tasks-list button {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n\n#new-task-entry {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px;\n  align-self: end;\n  gap: 5px;\n  background-color: rgb(237, 238, 238);\n  border-radius: 3px;\n}\n\n#new-task-entry button {\n  border: none;\n  border-radius: 3px;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n#new-task-entry input {\n  padding-left: 5px;\n  border: none;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#new-task-entry input:focus {\n  outline: none;\n  background-color: white;\n}"],sourceRoot:""}]);const a=i},942:(n,t,e)=>{e.d(t,{A:()=>a});var r=e(354),o=e.n(r),s=e(314),i=e.n(s)()(o());i.push([n.id,"#list-sidebar {\n  user-select: none;\n  \n  display: grid;\n  justify-items: start;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 1fr 40px;\n  background-color: rgb(255, 248, 240);\n  color: black;\n}\n\n#list-sidebar h2 {\n  font-size: 2rem;\n  align-self: center;\n}\n\n#lists-list {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: start;\n\n  display: grid;\n  grid-auto-rows: 35px;\n  gap: 5px;\n\n  justify-items: start;\n}\n\n#lists-list li {\n  width: 100%;\n  border: 1px black solid;\n  padding: 3px;\n\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  align-items: center;\n}\n\n#lists-list li:hover {\n  background-color: rgba(0, 0, 0, 0.137);\n}\n\n#lists-list li button {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  font-size: 0.6rem;\n  place-self: center;\n}\n\n#add-list-button {\n  border-radius: 5px;\n  border: none;\n  font-size: 1.05rem;\n  width: 100%;\n}","",{version:3,sources:["webpack://./src/style/list-sidebar.css"],names:[],mappings:"AAAA;EACE,iBAAiB;;EAEjB,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,iCAAiC;EACjC,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;;EAEjB,aAAa;EACb,oBAAoB;EACpB,QAAQ;;EAER,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,YAAY;;EAEZ,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb",sourcesContent:["#list-sidebar {\n  user-select: none;\n  \n  display: grid;\n  justify-items: start;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 1fr 40px;\n  background-color: rgb(255, 248, 240);\n  color: black;\n}\n\n#list-sidebar h2 {\n  font-size: 2rem;\n  align-self: center;\n}\n\n#lists-list {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: start;\n\n  display: grid;\n  grid-auto-rows: 35px;\n  gap: 5px;\n\n  justify-items: start;\n}\n\n#lists-list li {\n  width: 100%;\n  border: 1px black solid;\n  padding: 3px;\n\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  align-items: center;\n}\n\n#lists-list li:hover {\n  background-color: rgba(0, 0, 0, 0.137);\n}\n\n#lists-list li button {\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  font-size: 0.6rem;\n  place-self: center;\n}\n\n#add-list-button {\n  border-radius: 5px;\n  border: none;\n  font-size: 1.05rem;\n  width: 100%;\n}"],sourceRoot:""}]);const a=i},332:(n,t,e)=>{e.d(t,{A:()=>a});var r=e(354),o=e.n(r),s=e(314),i=e.n(s)()(o());i.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0; /* self-added */\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n/* End Reset */","",{version:3,sources:["webpack://./src/style/reset.css"],names:[],mappings:"AAAA;;;CAGC;AACD;EACE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU,EAAE,eAAe;AAC7B;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;AACpB;AACA,cAAc",sourcesContent:["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0; /* self-added */\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n/* End Reset */"],sourceRoot:""}]);const a=i},147:(n,t,e)=>{e.d(t,{A:()=>a});var r=e(354),o=e.n(r),s=e(314),i=e.n(s)()(o());i.push([n.id,"#task-options {\n  width: 100%;\n  background-color: white;\n  display: grid;\n  gap: 50px;\n  grid-template-columns: 1fr;\n  align-items: center;\n  align-content: start;\n}\n\n#task-options header {\n  border: 1px solid black;\n\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  grid-template-rows: 50px;\n  gap: 15px;\n  margin-top: 40px;\n}\n\n#task-options header input {\n  width: 100%;\n  border: none;\n  padding-left: 10px;\n}\n\n#task-options header button {\n  height: 30px;\n  width: 30px;\n  place-self: center;\n  background-color: white;\n  border: none;\n  font-size: auto;\n  margin-top: -5px;\n  font-weight: bold;\n}\n\n#task-options div {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-size: 1.1rem;\n  align-items: center;\n  gap: 10px;\n}\n\n#task-options label {\n  font-weight: bold;\n}\n\n#task-options input {\n  border: 1px solid black;\n}\n\n#task-options input:focus {\n  outline: none;\n}\n\n#task-options button {\n  font-size: 1.5rem;\n}\n\n.task-urgent {\n  border: 3px solid red;\n  background-color: rgb(0, 0, 0);\n  color: purple;\n  font-weight: bold;\n}\n\n#task-options textarea {\n  height: 250px;\n  font-size: 1.2rem;\n  resize: vertical;\n}","",{version:3,sources:["webpack://./src/style/task-options.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,SAAS;EACT,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;EACb,+BAA+B;EAC/B,wBAAwB;EACxB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB",sourcesContent:["#task-options {\n  width: 100%;\n  background-color: white;\n  display: grid;\n  gap: 50px;\n  grid-template-columns: 1fr;\n  align-items: center;\n  align-content: start;\n}\n\n#task-options header {\n  border: 1px solid black;\n\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  grid-template-rows: 50px;\n  gap: 15px;\n  margin-top: 40px;\n}\n\n#task-options header input {\n  width: 100%;\n  border: none;\n  padding-left: 10px;\n}\n\n#task-options header button {\n  height: 30px;\n  width: 30px;\n  place-self: center;\n  background-color: white;\n  border: none;\n  font-size: auto;\n  margin-top: -5px;\n  font-weight: bold;\n}\n\n#task-options div {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-size: 1.1rem;\n  align-items: center;\n  gap: 10px;\n}\n\n#task-options label {\n  font-weight: bold;\n}\n\n#task-options input {\n  border: 1px solid black;\n}\n\n#task-options input:focus {\n  outline: none;\n}\n\n#task-options button {\n  font-size: 1.5rem;\n}\n\n.task-urgent {\n  border: 3px solid red;\n  background-color: rgb(0, 0, 0);\n  color: purple;\n  font-weight: bold;\n}\n\n#task-options textarea {\n  height: 250px;\n  font-size: 1.2rem;\n  resize: vertical;\n}"],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var A=this[a][0];null!=A&&(i[A]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var s={},i=[],a=0;a<n.length;a++){var A=n[a],l=r.base?A[0]+r.base:A[0],d=s[l]||0,c="".concat(l," ").concat(d);s[l]=d+1;var u=e(c),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var g=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:c,updater:g,references:1})}i.push(c)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var a=e(s[i]);t[a].references--}for(var A=r(n,o),l=0;l<s.length;l++){var d=e(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=A}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return n[r](s,s.exports,e),s.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{function n(){const n={...localStorage},t={};return Object.keys(n).forEach((e=>{t[e]=JSON.parse(n[e])})),t}function t(n,t){return void 0===Object.keys(n).find((e=>n[e].name===t))}function r(t){return n()[t].name}function o(n,t,e){const r=n.split("-")[0],o=function(n){return JSON.parse(localStorage.getItem(n))}(r);o.tasks[n][t]=e,function(n,t){localStorage.setItem(n,JSON.stringify(t))}(r,o)}function s(n){return n.split("-")[0]}function i(){document.querySelector("#task-options").style.display="none",document.querySelector("#task-options header input").setAttribute("disabled",""),document.querySelector("#duedate").setAttribute("disabled",""),document.querySelector("#task-priority").classList.remove("task-urgent"),document.querySelector("#task-options textarea").setAttribute("disabled","")}function a(t,e){const r=document.createElement("li");return r.setAttribute("data-task-id",t),r.appendChild(function(){const t=document.createElement("button");return t.addEventListener("click",(t=>{const e=t.target.closest("li");!function(t){const e=n(),r=s(t);delete e[r].tasks[t],localStorage.setItem(r,JSON.stringify(e[r]))}(e.dataset.taskId),e.remove()})),t}()),r.appendChild(function(t){const e=document.createElement("span");return e.textContent=t,e.addEventListener("click",(t=>{!function(t){document.querySelector("#task-options").style.display="grid",document.querySelector("#task-options").setAttribute("data-task-id",t);const e=function(t){return n()[s(t)].tasks[t]}(t),r=document.querySelector("#task-options header input");r.value=e.name,r.removeAttribute("disabled");const o=document.querySelector("#duedate");o.value=e.dueDate,o.removeAttribute("disabled");const i=document.querySelector("#task-priority");i.classList.remove("task-urgent"),e.urgent&&i.classList.add("task-urgent");const a=document.querySelector("#task-options textarea");a.value=e.description,a.removeAttribute("disabled")}(t.target.closest("li").dataset.taskId)})),e}(e)),r}function A(t){(function(n){return n===document.querySelector("#list-display").dataset.listId})(t)||(function(n){document.querySelector("#header-list-name input").setAttribute("disabled",""),document.querySelector("#header-list-name input").value=r(n),document.querySelector("#header-list-name input").removeAttribute("disabled"),document.querySelector("#list-display").dataset.listId=n}(t),function(t){const e=document.querySelector("#tasks-list");e.innerHTML="";const r=function(t){return n()[t].tasks}(t);for(let n in r)e.appendChild(a(n,r[n].name))}(t),"0"===t&&document.querySelector("#header-list-name input").setAttribute("disabled",""))}function l(n,t){const e=document.createElement("li");return e.setAttribute("data-list-id",n),e.appendChild(function(n){const t=document.createElement("span");return t.textContent=n,t.addEventListener("click",(n=>{i(),A(n.target.closest("li").dataset.listId)})),t}(t)),e.appendChild(function(){const n=document.createElement("button");return n.textContent="X",n.addEventListener("click",(n=>{return function(n){localStorage.removeItem(n)}(t=n.target.closest("li").dataset.listId),document.querySelector(`#list-sidebar li[data-list-id="${t}"]`).remove(),void(t===document.querySelector("#list-display").dataset.listId&&A("0"));var t})),n}()),e}function d(t,e){return a(function(t,e){const r=n(),o=function(n,t){const e=Object.keys(n[t].tasks).map((n=>n.split("-")[1]));let r=0;for(;;){if(!e.includes(String(r)))return`${t}-${r}`;r++}}(r,t);return r[t].tasks[o]={name:e,dueDate:"",urgent:!1,description:""},localStorage.setItem(t,JSON.stringify(r[t])),o}(t,e),e)}var c=e(72),u=e.n(c),p=e(825),g=e.n(p),m=e(659),C=e.n(m),E=e(56),f=e.n(E),b=e(540),B=e.n(b),h=e(113),y=e.n(h),k=e(332),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=C().bind(null,"head"),x.domAPI=g(),x.insertStyleElement=B(),u()(k.A,x),k.A&&k.A.locals&&k.A.locals;var v=e(534),w={};w.styleTagTransform=y(),w.setAttributes=f(),w.insert=C().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=B(),u()(v.A,w),v.A&&v.A.locals&&v.A.locals;var S=e(942),q={};q.styleTagTransform=y(),q.setAttributes=f(),q.insert=C().bind(null,"head"),q.domAPI=g(),q.insertStyleElement=B(),u()(S.A,q),S.A&&S.A.locals&&S.A.locals;var I=e(816),j={};j.styleTagTransform=y(),j.setAttributes=f(),j.insert=C().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=B(),u()(I.A,j),I.A&&I.A.locals&&I.A.locals;var W=e(147),z={};z.styleTagTransform=y(),z.setAttributes=f(),z.insert=C().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=B(),u()(W.A,z),W.A&&W.A.locals&&W.A.locals,i(),localStorage.getItem("0")?(A("0"),function(){const t=n(),e=document.querySelector("#lists-list");for(let n in t)"0"!==n&&e.appendChild(l(n,t[n].name))}()):(localStorage.setItem("0",JSON.stringify({name:"My day",tasks:{}})),A("0")),document.querySelector('#list-sidebar li[data-list-id="0"]').addEventListener("click",(n=>{A("0")})),document.querySelector("#add-list-button").addEventListener("click",(()=>{i(),document.querySelector("#lists-list").appendChild(function(){let e,r;return[e,r]=function(){const e=n(),r=function(n){let e,r="";for(;;){if(e=`Untitled${r}`,t(n,e))return e;r?r++:r=1}}(e),o=function(n){let t=1;for(;;){if(void 0===n[String(t)])return String(t);t++}}(e);return localStorage.setItem(o,JSON.stringify({name:r,tasks:{}})),[o,r]}(),l(e,r)}())})),document.querySelector("#new-task-entry button").addEventListener("click",(()=>{const n=document.querySelector("#new-task-entry input");if(""!==n.value){const t=document.querySelector("#list-display").dataset.listId;document.querySelector("#tasks-list").appendChild(d(t,n.value)),i(),n.value=""}})),document.querySelector("#new-task-entry input").addEventListener("keydown",(n=>{if("Enter"===n.key&&""!==n.target.value){const t=n.target,e=document.querySelector("#list-display").dataset.listId;document.querySelector("#tasks-list").appendChild(d(e,t.value)),i(),t.value=""}})),document.querySelector("#header-list-name input").addEventListener("change",(e=>{const o=e.target.closest("section").dataset.listId;"0"!==o&&function(e,o){if(t(n(),o))!function(t,e){const r=n();r[t].name=e,localStorage.setItem(t,JSON.stringify(r[t]))}(e,o),document.querySelector(`#lists-list li[data-list-id="${e}"] span`).textContent=o;else{const n=document.querySelector("#header-list-name input");n.setAttribute("disabled",""),n.value=r(e),n.removeAttribute("disabled")}}(o,e.target.value)})),document.querySelector("#close-task-options").addEventListener("click",(()=>{i()})),document.querySelector("#task-options header input").addEventListener("change",(n=>{const t=n.target.closest("section").dataset.taskId,e=n.target.value;o(t,"name",e),document.querySelector(`#tasks-list li[data-task-id="${t}"] span`).textContent=e})),document.querySelector("#duedate").addEventListener("change",(n=>{o(n.target.closest("section").dataset.taskId,"dueDate",n.target.value)})),document.querySelector("#task-priority").addEventListener("click",(n=>{const t=n.target.closest("section").dataset.taskId;n.target.classList.toggle("task-urgent"),o(t,"urgent",n.target.classList.contains("task-urgent"))})),document.querySelector("#task-options textarea").addEventListener("change",(n=>{o(n.target.closest("section").dataset.taskId,"description",n.target.value)}))})()})();
//# sourceMappingURL=app.bundle.js.map