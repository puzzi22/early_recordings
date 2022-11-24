!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,(function(){"use strict";var t,e,o,n,s=function(t){var e=t._util;e.elements=w(t.options),e.count=e.elements.length,e.destroyed&&(e.destroyed=!1,t.options.container&&E(t.options.container,(function(t){b(t,"scroll",e.validateT)})),b(window,"resize",e.saveViewportOffsetT),b(window,"resize",e.validateT),b(window,"scroll",e.validateT)),i(t)},i=function(t){for(var e=t._util,o=0;o<e.count;o++){var n=e.elements[o];(r(n,t.options)||h(n,t.options.successClass))&&(t.load(n),e.elements.splice(o,1),e.count--,o--)}0===e.count&&t.destroy()},r=function(t,o){var s=t.getBoundingClientRect();if(o.container&&n){var i=t.closest(o.containerClass);if(i){var r=i.getBoundingClientRect();if(c(r,e)){var a=r.top-o.offset,l=r.right+o.offset,f=r.bottom+o.offset,u=r.left-o.offset,p={top:a>e.top?a:e.top,right:l<e.right?l:e.right,bottom:f<e.bottom?f:e.bottom,left:u>e.left?u:e.left};return c(s,p)}return!1}}return c(s,e)},c=function(t,e){return t.right>=e.left&&t.bottom>=e.top&&t.left<=e.right&&t.top<=e.bottom},a=function(e,n,s){if(!h(e,s.successClass)&&(n||s.loadInvisible||e.offsetWidth>0&&e.offsetHeight>0)){var i=d(e,t)||d(e,s.src);if(i){var r=i.split(s.separator),c=r[o&&r.length>1?1:0],a=d(e,s.srcset),p=m(e,"img"),v=e.parentNode,w=v&&m(v,"picture");if(p||void 0===e.src){var y=new Image,T=function(){s.error&&s.error(e,"invalid"),g(e,s.errorClass),C(y,"error",T),C(y,"load",D)},D=function(){p?w||u(e,c,a):e.style.backgroundImage='url("'+c+'")',l(e,s),C(y,"load",D),C(y,"error",T)};w&&(y=e,E(v.getElementsByTagName("source"),(function(t){f(t,A,s.srcset)}))),b(y,"error",T),b(y,"load",D),u(y,c,a)}else e.src=c,l(e,s)}else m(e,"video")?(E(e.getElementsByTagName("source"),(function(t){f(t,k,s.src)})),e.load(),l(e,s)):(s.error&&s.error(e,"missing"),g(e,s.errorClass))}},l=function(t,e){g(t,e.successClass),e.success&&e.success(t),v(t,e.src),v(t,e.srcset),E(e.breakpoints,(function(e){v(t,e.src)}))},f=function(t,e,o){var n=d(t,o);n&&(p(t,e,n),v(t,o))},u=function(t,e,o){o&&p(t,A,o),t.src=e},p=function(t,e,o){t.setAttribute(e,o)},d=function(t,e){return t.getAttribute(e)},v=function(t,e){t.removeAttribute(e)},m=function(t,e){return t.nodeName.toLowerCase()===e},h=function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")},g=function(t,e){h(t,e)||(t.className+=" "+e)},w=function(t){for(var e=[],o=t.root.querySelectorAll(t.selector),n=o.length;n--;e.unshift(o[n]));return e},y=function(t){e.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,e.right=(window.innerWidth||document.documentElement.clientWidth)+t},b=function(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,{capture:!1,passive:!0})},C=function(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,{capture:!1,passive:!0})},E=function(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&!1!==e(t[n],n);n++);},T=function(t,e,o){var n=0;return function(){var s=+new Date;s-n<e||(n=s,t.apply(o,arguments))}},k="src",A="srcset";return function(r){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,s){for(s=document.all,e=[],o=(t=t.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(c.addRule(t[o],"k:v"),n=s.length;n--;)s[n].currentStyle.k&&e.push(s[n]);c.removeRule(0)}return e}}var l=this,f=l._util={};f.elements=[],f.destroyed=!0,l.options=r||{},l.options.error=l.options.error||!1,l.options.offset=l.options.offset||100,l.options.root=l.options.root||document,l.options.success=l.options.success||!1,l.options.selector=l.options.selector||".b-lazy",l.options.separator=l.options.separator||"|",l.options.containerClass=l.options.container,l.options.container=!!l.options.containerClass&&document.querySelectorAll(l.options.containerClass),l.options.errorClass=l.options.errorClass||"b-error",l.options.breakpoints=l.options.breakpoints||!1,l.options.loadInvisible=l.options.loadInvisible||!1,l.options.successClass=l.options.successClass||"b-loaded",l.options.validateDelay=l.options.validateDelay||25,l.options.saveViewportOffsetDelay=l.options.saveViewportOffsetDelay||50,l.options.srcset=l.options.srcset||"data-srcset",l.options.src=t=l.options.src||"data-src",n=Element.prototype.closest,o=window.devicePixelRatio>1,(e={}).top=0-l.options.offset,e.left=0-l.options.offset,l.revalidate=function(){s(l)},l.load=function(t,e){var o=this.options;t&&void 0===t.length?a(t,e,o):E(t,(function(t){a(t,e,o)}))},l.destroy=function(){var t=l._util;l.options.container&&E(l.options.container,(function(e){C(e,"scroll",t.validateT)})),C(window,"scroll",t.validateT),C(window,"resize",t.validateT),C(window,"resize",t.saveViewportOffsetT),t.count=0,t.elements.length=0,t.destroyed=!0},f.validateT=T((function(){i(l)}),l.options.validateDelay,l),f.saveViewportOffsetT=T((function(){y(l.options.offset)}),l.options.saveViewportOffsetDelay,l),y(l.options.offset),E(l.options.breakpoints,(function(e){if(e.width>=window.screen.width)return t=e.src,!1})),setTimeout((function(){s(l)}))}}));
//# sourceMappingURL=description.80d64683.js.map
