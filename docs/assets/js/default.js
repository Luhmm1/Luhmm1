(()=>{"use strict";var e={138:()=>{var e=document.getElementById("open-sidebar"),t=document.getElementById("close-sidebar"),r=document.getElementById("sidebar");document.body.addEventListener("click",(function(){r.classList.remove("active")})),e.addEventListener("click",(function(e){r.classList.add("active"),e.stopPropagation()})),t.addEventListener("click",(function(e){r.classList.remove("active"),e.stopPropagation()})),r.addEventListener("click",(function(e){"a"!==e.target.tagName.toLowerCase()&&e.stopPropagation()}));var n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&document.querySelectorAll("#sidebar nav a").forEach((function(t){t.getAttribute("href")==="#"+e.target.id?t.classList.add("selected"):t.classList.remove("selected")}))}))}),{root:null,rootMargin:"0px",threshold:.5});document.querySelectorAll("main section").forEach((function(e){return n.observe(e)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p;r(138)})()})();