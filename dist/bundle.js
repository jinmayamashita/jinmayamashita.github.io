!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(o).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var i=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}}(),c=null,l=0,u=[],f=e(5);function p(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(b(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function v(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return e.nc}();i&&(n.attrs.nonce=i)}return y(t,n.attrs),h(n,t),t}function y(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,i,r,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=l++;e=c||(c=v(t)),i=x.bind(null,e,a,!1),r=x.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",y(t,n.attrs),h(n,t),t}(t),i=function(n,t,e){var i=e.css,r=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=f(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(t),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var i=[],r=0;r<e.length;r++){var a=e[r];(s=o[a.id]).refs--,i.push(s)}n&&p(d(n,t),t);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var g,w=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function x(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},function(n,t,e){"use strict";e.r(t);e(3),e(6);const i=[{id:0,name:"Alan Tew",country:"🇬🇧",wiki:"https://en.wikipedia.org/wiki/Alan_Tew"},{id:1,name:"David Lindup",country:"🇬🇧",wiki:"https://en.wikipedia.org/wiki/David_Lindup"},{id:2,name:"Laurindo Almeida",country:"🇧🇷",wiki:"https://en.wikipedia.org/wiki/Laurindo_Almeida"},{id:3,name:"Keith Mansfield",country:"🇬🇧",wiki:"https://en.wikipedia.org/wiki/Keith_Mansfield"},{id:4,name:"Armando Trovajoli",country:"🇮🇹",wiki:"https://en.wikipedia.org/wiki/Armando_Trovajoli"},{id:5,name:"Piero Piccioni",country:"🇮🇹",wiki:"https://en.wikipedia.org/wiki/Piero_Piccioni"},{id:6,name:"Piero Umiliani",country:"🇮🇹",wiki:"https://en.wikipedia.org/wiki/Piero_Umiliani"},{id:7,name:"Stelvio Cipriani",country:"🇮🇹",wiki:"https://en.wikipedia.org/wiki/Stelvio_Cipriani"},{id:8,name:"Ueno Koji",country:"🇯🇵",wiki:"https://ja.wikipedia.org/wiki/%E4%B8%8A%E9%87%8E%E8%80%95%E8%B7%AF"}],r=(n,t)=>`<div class="musician-item fill" style="animation-delay: ${t}s; animation-duration: ${t}s;"><a href="${n.wiki}"><p>${n.country}</p><p>${n.name}</p></a></div>`;document.body.appendChild((()=>{const n=document.createElement("div");return n.innerHTML='\n  \n  <div class="svg-wrap">\n    <a href="https://itunes.apple.com/jp/app/%E8%A4%92%E3%82%81%E3%83%9C%E3%82%BF%E3%83%B3/id1344906649?mt=8">\n      <svg version="1.1" id="_x31_0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n        viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve">\n        <style type="text/css">\n          .st0 {\n            fill: #392f43;\n          }\n          .st1 {\n            fill: #392f43;\n          }\n        </style>\n        <g>\n          <path class="st0" d="M162.064,226.278c0,14.871,8.328,26.586,19.05,26.586c10.649,0,19.016-11.714,19.016-26.586\n        c0-14.867-8.367-26.543-19.016-26.543C170.392,199.734,162.064,211.41,162.064,226.278z M176.97,213.274\n        c2.32,0,4.144,2.203,4.144,5.058c0,2.851-1.824,5.094-4.144,5.094c-2.321,0-4.145-2.242-4.145-5.094\n        C172.826,215.477,174.65,213.274,176.97,213.274z"></path>\n          <path class="st0" d="M330.842,252.863c10.683,0,19.09-11.714,19.09-26.586c0-14.867-8.406-26.543-19.09-26.543\n        c-10.653,0-19.016,11.676-19.016,26.543C311.826,241.149,320.189,252.863,330.842,252.863z M326.658,213.274\n        c2.317,0,4.145,2.203,4.145,5.058c0,2.851-1.828,5.094-4.145,5.094c-2.32,0-4.148-2.242-4.148-5.094\n        C322.51,215.477,324.338,213.274,326.658,213.274z"></path>\n          <path class="st1" d="M103.267,314.355c6.695,19.473,15.48,37.383,26.203,53.508c-0.723,5.477-1.066,10.992-1.066,16.582\n        c0,70.316,57.238,127.554,127.594,127.554s127.59-57.238,127.59-127.554c0-5.59-0.378-11.106-1.066-16.582\n        c10.688-16.125,19.473-34.035,26.164-53.508c18.332-53.09,15.176-120.137,6.922-159.766c20.89-31.242,48.453-83.086,22.93-125.16\n        c-0.172-0.285-0.348-0.566-0.524-0.847c-2.679-4.282-5.726-8.493-9.59-12.532C421.314,8.707,408.498,0,387.122,0h-0.035\n        c-26.621,0-57.046,12.969-84.582,35.442c-12.394-2.622-28.446-4.902-46.508-4.902c-18.102,0-34.114,2.281-46.551,4.902\n        C181.915,12.969,151.49,0,124.869,0c-21.41,0-34.226,8.707-41.262,15.973c-3.875,4.058-6.93,8.285-9.618,12.582\n        c-0.16,0.258-0.32,0.512-0.477,0.77c-25.605,42.141,1.973,94.008,22.832,125.266C88.095,194.218,84.935,261.266,103.267,314.355z\n        M113.802,44.988c1.863-1.976,5.742-3.156,11.066-3.156c12.679,0,33.738,6.649,56.355,24.621c0.699,0.555,1.394,1.122,2.094,1.696\n        c2.43,2,4.879,4.152,7.332,6.422c1.649,1.527,3.297,3.102,4.946,4.758c0.879,0.875,1.754,1.715,2.633,2.629\n        c0,0,7.379-2.836,19.363-5.41c2.664-0.535,5.481-1.059,8.57-1.52l-21.656,24.16l-5.481,6.051l0.035,0.019l-0.11,0.122\n        l25.801,13.484l2.07,1.094l-16.934,26.774l-10.957,17.133l0.129-0.015l-0.11,0.175l29.473-3.801l19.649,29.914l7.793,11.98\n        l0.035-0.058l0.098,0.145l27.57-41.981l17.898,2.309l11.442,1.578l-0.07-0.114l0.203,0.027l-25.95-40.976l-1.953-3.106\n        l22.343-11.66l5.442-2.794l-0.027-0.031l0.145-0.078L297.65,88.215l-11.793-13.336c16.996,2.851,27.906,7.078,27.906,7.078\n        c28.637-29.82,57.504-40.125,73.324-40.125c5.324,0,9.203,1.18,11.106,3.156c16.578,17.344,11.633,46.586-28.07,101.73\n        c9.207,21.641,18.066,98.879-0.949,154.024c-7.985,23.16-19.016,42.289-31.489,57.539c2.664,8.254,4.07,17.035,4.07,26.164\n        c0,47.347-38.41,85.722-85.758,85.722c-47.348,0-85.758-38.375-85.758-85.722c0-9.129,1.406-17.91,4.07-26.164\n        c-12.477-15.25-23.504-34.379-31.493-57.539c-19.015-55.145-10.152-132.383-0.949-154.024\n        C102.166,91.574,97.22,62.332,113.802,44.988z"></path>\n          <path class="st1" d="M194.806,347.554c1.637,3.84,6.121,5.668,9.965,4.035c16.238-6.847,33.465-10.347,51.226-10.347\n        c17.722,0,34.949,3.5,51.187,10.347c0.95,0.414,1.938,0.606,2.93,0.606c2.965,0,5.778-1.75,7.035-4.641\n        c1.633-3.878-0.191-8.367-4.07-10c-18.066-7.644-37.308-11.523-57.082-11.523c-19.817,0-39.019,3.879-57.121,11.523\n        C194.998,339.187,193.17,343.676,194.806,347.554z"></path>\n          <path class="st1" d="M217.927,395.969c-4.07-4.07-10.683-4.07-14.754,0h-0.039c-4.07,4.106-4.07,10.722,0,14.793l12.664,12.625\n        c2.015,2.055,4.714,3.082,7.379,3.082c2.699,0,5.359-1.027,7.414-3.082c4.07-4.066,4.07-10.687,0-14.754L217.927,395.969z"></path>\n          <path class="st1" d="M301.404,392.926c-2.66,0-5.325,1.027-7.379,3.043l-12.664,12.664c-4.066,4.066-4.066,10.687,0,14.754\n        c2.054,2.055,4.754,3.082,7.418,3.082c2.661,0,5.325-1.027,7.379-3.082l12.664-12.625c4.066-4.07,4.066-10.687,0-14.793\n        C306.767,393.953,304.068,392.926,301.404,392.926z"></path>\n          <path class="st1" d="M178.834,96.922c0.621-0.414,1.187-0.874,1.824-1.277c-0.004-0.008-0.012-0.012-0.015-0.02\n        c0.042-0.027,0.086-0.062,0.129-0.094c-16.618-16.961-32.211-25.558-43.278-29.359c-4.942-1.75-9.926,2.586-8.82,7.718\n        c2.015,9.321,8.402,24.153,24.374,47.77C159.767,112.258,168.529,103.953,178.834,96.922z"></path>\n          <path class="st1" d="M359.021,121.66c15.973-23.617,22.246-38.488,24.262-47.73c1.102-5.133-3.878-9.469-8.824-7.718\n        c-10.473,3.633-24.949,11.621-40.523,26.773c-0.856,0.821-1.688,1.547-2.551,2.414c0.008,0.004,0.02,0.012,0.027,0.019\n        c-0.038,0.039-0.078,0.074-0.117,0.114C342.513,102.832,351.869,111.656,359.021,121.66z"></path>\n        </g>\n      </svg>\n    </a>\n   </div>\n   <div id="fvm" class="favorite-music-wrap">\n   </div>',n.classList.add("jinmayamashita"),n})());let o=!0;const a=()=>{const n=document.getElementById("fvm");if(o=!o){n.innerHTML=((n=20,t=20)=>{const e=Array(100/n*(100/t)).fill('<div class="musician-item"><a/></div>');let o=0;return e.map((n,t)=>t%6==0?(e.splice(t,1,r(i[o],(o+1)/3)),o++):t%4==0?(e.splice(t,1,r(i[o],(o+1)/3)),o++):void 0),e.join("")})();let t=document.querySelectorAll(".fill");return Array.from(t).map(n=>n.classList.add("fill-show"))}return n.innerHTML=""};a(),setInterval(a,1e4)},function(n,t,e){var i=e(4);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,i=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var i=e(7);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,'* {\n\tbox-sizing: border-box;\n}\n\n.jinmayamashita {\n\theight: 100vh;\n\twidth: 100vw;\n\tposition: relative;\n}\n\n.svg-wrap,\n.favorite-music-wrap {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n}\n\n.svg-wrap {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tz-index: 10;\n}\n\n.favorite-music-wrap {\n\tbackground: transparent;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\tflex-wrap: wrap;\n}\n\n.musician-item {\n\twidth: 20vw;\n\theight: 20vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.musician-item a {\n\tposition: relative;\n\ttext-decoration: none;\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: inherit;\n}\n\n.musician-item p {\n\ttext-align: center;\n}\n\n.fill a>p:first-of-type {\n\tfont-size: 80px;\n}\n\n.fill a>p:last-of-type {\n\tbackground: rgba(223, 225, 229, 0.3);\n  padding: 0.3em 0.2em;\n  border-radius: 3px;\n\tposition: absolute;\n\ttop: -40%;\n\tleft: -40%;\n\tcolor: #333;\n\tfont-size: 20px;\n\tfont-weight: 100;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;\n}\n.fill a>p:last-of-type::first-letter {\n  font-size: 130%;\n}\n\n.fill {\n  display: none;\n\topacity: 0;\n\tz-index: 11;\n}\n.fill-show {\n  display: flex;\n  animation-name: show;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n@keyframes show{\n  from{\n      opacity: 0;\n  }\n  to{\n      opacity: 1;\n  }\n}\n\n.fill a {\n\tbox-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n\tborder: 1px solid rgba(223, 225, 229, 0);\n\tbackground: #0e2f44;\n}\n\na:hover .st0 {\n\tfill: red;\n}',""])}]);