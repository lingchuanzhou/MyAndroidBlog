!function(){function t(t){return"[object Function]"===Object.prototype.toString.call(t)}function e(e,o,n){if(a[e])throw new Error("Module "+e+" has been defined already.");t(o)&&(n=o),a[e]={factory:n,inited:!1,exports:null}}function o(e){var o,r,c,i;if(o=a[e],r={},c={exports:{}},!t(o.factory))throw new Error("Module "+e+" has no factory.");if(i=o.factory.call(void 0,n,r,c),void 0!==i)o.exports=i;else if(c.hasOwnProperty("exports")&&"object"==typeof c.exports&&c.exports instanceof Object==!0){var d,s=!1;for(d in c.exports)c.exports.hasOwnProperty(d)&&(s=!0);s===!1?o.exports=r:o.exports=c.exports}else o.exports=c.exports;o.inited=!0}function n(t){var e;if(e=a[t],!e)throw new Error("Module "+t+" is not defined.");return e.inited===!1&&o(t),e.exports}var a={};e("D:/dev/nvmw/v0.10.32/node_modules/mdevp/cache/www/cy-av/cy-av.js",function(t,e,o){window.changyan.api.ready(function(t){var e=t.util.jquery,o=(t.util._,t.util.velocityjs,{loadJs:function(t,e){var o=document.getElementsByTagName("head")[0]||document.head||document.documentElement,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.setAttribute("src",t),"function"==typeof e&&(window.attachEvent?n.onreadystatechange=function(){var t=n.readyState;"loaded"!==t&&"complete"!==t||(n.onreadystatechange=null,e())}:n.onload=e),o.appendChild(n)}}),n=function(){"https:"!==window.document.location.protocol&&(window.changyanjQuery=e,o.loadJs("http://changyan.sohu.com/activity/advert_static/main.js",function(){o.loadJs("http://changyan.sohu.com/activity/advert_static/render-pc.js",function(){window.changyan.api.ready(function(t){window.changyanDSP({appId:t.getAppid(),categoryId:t.getFeConfig("category_id"),type:"pc"})})})}))};n()})}),o("D:/dev/nvmw/v0.10.32/node_modules/mdevp/cache/www/cy-av/cy-av.js")}();