!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=453)}({100:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n(9),i=n.n(r),o=n(29);function u(t,e){var n=(e-t.reduce((function(t,e){return t+e}),0))/t.length;return t.map((function(t){return t+n}))}function c(t,e){return function(t,e,n){var r=i()(e,2),c=r[0],a=r[1],d=1/c*(n-o.b*(t.childElementCount-1)-a);return function(t,e){var n=e.rawHeight,r=e.rowWidth,i=s(t),c=i.map((function(t){return(n-o.b*(t.childElementCount-1))*l(t)[0]})),a=u(c,r);return i.forEach((function(t,e){var r=c[e],i=a[e];!function(t,e){var n=e.colHeight,r=e.width,i=e.rawWidth,o=u(f(t).map((function(t){return i/h(t)})),n);Array.from(t.children).forEach((function(t,e){var n=o[e];t.setAttribute("style","height:".concat(n,"px;width:").concat(r,"px;"))}))}(t,{colHeight:n-o.b*(t.childElementCount-1),width:i,rawWidth:r})})),a.map((function(t){return t/r*100}))}(t,{rawHeight:d,rowWidth:n-o.b*(t.childElementCount-1)})}(t,function(t){return s(t).map(l).reduce((function(t,e){var n=i()(t,2),r=n[0],o=n[1],u=i()(e,2);return[r+u[0],o+u[1]]}),[0,0])}(t),e)}function a(t){return Array.from(t.querySelectorAll(".tiled-gallery__row"))}function s(t){return Array.from(t.querySelectorAll(".tiled-gallery__col"))}function f(t){return Array.from(t.querySelectorAll(".tiled-gallery__item > img, .tiled-gallery__item > a > img"))}function l(t){var e=f(t),n=e.length,r=1/e.map(h).reduce((function(t,e){return t+1/e}),0);return[r,r*n||1]}function h(t){var e=parseInt(t.dataset.width,10),n=parseInt(t.dataset.height,10);return e&&!Number.isNaN(e)&&n&&!Number.isNaN(n)?e/n:1}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return h}));var r=["image"],i=4,o=20,u=20,c=2e3,a="circle",s="columns",f="rectangular",l="square",h=[{isDefault:!0,name:f},{name:a},{name:l},{name:s}]},453:function(t,e,n){n(54),t.exports=n(454)},454:function(t,e,n){"use strict";n.r(e);var r=n(55),i=n.n(r),o=(n(455),n(63)),u=n(100);function c(t){c.pendingRaf&&cancelAnimationFrame(c.pendingRaf),c.pendingRaf=requestAnimationFrame((function(){c.pendingRaf=null;var e=!0,n=!1,r=void 0;try{for(var i,o=function(){var t=i.value,e=t.contentRect.width;Array.from(t.target.querySelectorAll(".tiled-gallery__row")).forEach((function(t){return Object(u.b)(t,e)}))},a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0)o()}catch(s){n=!0,r=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}))}"undefined"!=typeof window&&i()((function(){var t=Array.from(document.querySelectorAll(".wp-block-jetpack-tiled-gallery.is-style-rectangular > .tiled-gallery__gallery,.wp-block-jetpack-tiled-gallery.is-style-columns > .tiled-gallery__gallery"));if(0!==t.length){var e=new o.a(c);t.forEach((function(t){"true"!==t.getAttribute("data-jetpack-block-initialized")&&(e.observe(t),t.setAttribute("data-jetpack-block-initialized","true"))}))}}))},455:function(t,e,n){},49:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},54:function(t,e,n){"use strict";n.r(e);n(49)},55:function(t,e){!function(){t.exports=this.wp.domReady}()},63:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,s=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function c(){u(o)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},h=y(0,0,0,0);function d(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,u=i.top+i.bottom,c=d(r.width),a=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=p(r,"left","right")+o),Math.round(a+u)!==n&&(a-=p(r,"top","bottom")+u)),!function(t){return t===l(t).document.documentElement}(t)){var s=Math.round(c+o)-e,f=Math.round(a+u)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(f)&&(a-=f)}return y(i.left,i.top,c,a)}var _="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return i?_(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):v(t):h}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,i,o,u,c,a,s=(r=(n=e).x,i=n.y,o=n.width,u=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),f(a,{x:r,y:i,width:o,height:u,top:i,right:r+o,bottom:u+i,left:r}),a);f(this,{target:t,contentRect:s})},w=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=s.getInstance(),r=new w(e,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));var A=void 0!==o.ResizeObserver?o.ResizeObserver:E;e.a=A},75:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},76:function(t,e,n){var r=n(75);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},88:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},89:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}},9:function(t,e,n){var r=n(88),i=n(89),o=n(76),u=n(90);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||u()}},90:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));