!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function t(t,n,a){if(i[t])throw new Error("Module "+t+" has been defined already.");e(n)&&(a=n),i[t]={factory:a,inited:!1,exports:null}}function n(t){var n,c,o,s;if(n=i[t],c={},o={exports:{}},!e(n.factory))throw new Error("Module "+t+" has no factory.");if(s=n.factory.call(void 0,a,c,o),void 0!==s)n.exports=s;else if(o.hasOwnProperty("exports")&&"object"==typeof o.exports&&o.exports instanceof Object==!0){var r,p=!1;for(r in o.exports)o.exports.hasOwnProperty(r)&&(p=!0);p===!1?n.exports=c:n.exports=o.exports}else n.exports=o.exports;n.inited=!0}function a(e){var t;if(t=i[e],!t)throw new Error("Module "+e+" is not defined.");return t.inited===!1&&n(e),t.exports}var i={};t("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.js",function(e,t,n){window.changyan.api.ready(function(t){var n=t.util.jquery,a=t.util._,i=t.util.velocityjs,c=e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.html.js");e("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.css"),t.event.register("cy-user-page","render"),t.event.register("cy-user-page","render-view"),t.event.register("cy-user-page","close");var o=function(e){var t=i.render(c,{}),a=n(t),o=n('<div node-type="cy-mask" class="cy-mask"></div>'),s=n(window),r=s.width(),p=s.height();n("body").append(o),n("body").append(a),e();var u=n('div[node-type="cy-user-page"]').width();o.css("height",p+"px"),a.css("height",p+"px"),n("body").css("overflow","hidden"),"7.0"===n.browser.version&&n("html").css("overflow","hidden"),a.css("right",-u+"px"),a.animate({right:0},200),s.resize(function(){r=s.width(),p=s.height(),o.css("height",p+"px"),a.css("height",p+"px")})},s=function(){t.getUserInfo(function(e){if(10207!==e.error_code){var i=10,c=t.getFeConfig("appid"),s=e.platform_id,r=e.user_id;n.ajax({url:t.getConfig("api")+"api/2/user/profile?client_id="+c+"&user_id="+r+"&platform_id="+s+"&page_size="+i+"&callback=?",dataType:"jsonp",scriptCharset:"utf-8",success:function(e){a.each(e.comments,function(e){e.content=p(e.content)}),o(function(){t.event.trigger("changyan:cy-user-page:render",n('ul[node-type="cy-tab-list"]'),n('div[node-type="cy-user-page-main"]'),e)})}})}})},r=function(e,i){var c=t.getFeConfig("appid"),s=10;t.getUserInfo(function(r){n.ajax({url:t.getConfig("api")+"api/2/user/profile?client_id="+c+"&user_id="+e+"&platform_id="+i+"&page_size="+s+"&callback=?",dataType:"jsonp",scriptCharset:"utf-8",success:function(c){a.each(c.comments,function(e){e.content=p(e.content)}),o(r.user_id===e?function(){t.event.trigger("changyan:cy-user-page:render",n('ul[node-type="cy-tab-list"]'),n('div[node-type="cy-user-page-main"]'),c)}:function(){t.event.trigger("changyan:cy-user-page:render-view",e,i,n('div[node-type="cy-user-page-main"]'),c),n('div[node-type="cy-tab-container"]').remove(),n('div[node-type="cy-user-page"]').css("width","667px")})}})})},p=function(e){return e.replace(/<|%3C/gi,"&lt;").replace(/>|%3E/gi,"&gt;").replace(/"|%22/g,"&quot;").replace(/&lt;br&gt;/g,"<br>").replace(/&amp;/g,"&").replace(/&quot;/g,"")};!function(){var e=n("body").css("overflow"),a=n("html").css("overflow"),i=function(){var i=n('div[node-type="cy-user-page"]'),c=n('div[node-type="cy-mask"]');i.animate({right:-i.width()},200,function(){i.remove()}),c.remove(),n("body").css("overflow",e),"7.0"===n.browser.version&&(n("html").css("overflowX","hidden"),n("html").css("overflow",a)),t.event.trigger("changyan:cy-user-page:close")};n(document).delegate('div[node-type="cy-mask"],div[node-type="cy-user-page-close-btn"]',"click",function(){i()})}(),t.getUserInfo(function(e){t.event.listen("changyan:cmt-header:click-mycyan",function(e){s()}),t.event.listen("changyan:cmt-header:click-avatar",function(e){s()}),t.event.listen("changyan:cmt-float-bar:nickname-self-click",function(){s()}),t.event.listen("changyan:cmt-list:photo-click",function(e,t){0>=e||0===t||r(e,t)}),t.event.listen("changyan:cmt-list:nickname-click",function(e,t){0>=e||0===t||r(e,t)})})})}),t("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.html.js",function(e,t,n){"use strict";var a;return a=[],a.push('<div node-type="cy-user-page" class="module-cy-user-page">'),a.push('    <div node-type="cy-user-page-main" class="cy-user-page-main">'),a.push("    </div>"),a.push('    <div node-type="cy-tab-container" class="cy-user-page-tab">'),a.push('        <ul node-type="cy-tab-list" class="cy-tab-list">'),a.push("        </ul>"),a.push('        <div class="power-by-cy"></div>'),a.push("    </div>"),a.push('    <div node-type="cy-user-page-close-btn" class="cy-user-page-close-btn"></div>'),a.push("</div>"),a.join("\n")}),t("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.css",function(e,t,n){var a='.module-cy-user-page{width:710px;position:fixed;z-index:2147483647;top:0;zoom:1;font-family:"Microsoft YaHei"}.module-cy-user-page:after{content:".";display:block;visibility:hidden;height:0;clear:both}.cy-mask{width:100%;background:#000;opacity:.6;filter:alpha(opacity=60);position:fixed;z-index:2147483647;top:0;left:0}.module-cy-user-page .cy-user-page-close-btn{cursor:pointer;background:url(//changyan.sohu.com/mdevp/extensions/cy-user-page/011/image/close-btn.png);width:20px;height:20px;float:left;margin-top:15px}.module-cy-user-page .cy-user-page-tab{width:43px;background:#111;height:100%;float:right;position:relative}.module-cy-user-page .cy-tab-list{margin-top:7px;overflow:hidden}.module-cy-user-page .cy-tab-list li{width:100%;cursor:pointer;margin-top:23px}.module-cy-user-page .cy-tab-list li .cy-tab-icon{width:22px;height:22px;margin:0 auto;display:block}.module-cy-user-page .cy-tab-list li .cy-my-ico{background:url(//changyan.sohu.com/mdevp/extensions/cy-user-page/011/image/tab-list-icon1.png)}.module-cy-user-page .cy-tab-list li i{width:100%;display:block;margin-top:2px;font-size:12px;color:#666;text-align:center;font-style:normal}.module-cy-user-page .cy-tab-list li.active .cy-my-ico{background:url(//changyan.sohu.com/mdevp/extensions/cy-user-page/011/image/tab-list-icon-active1.png)}.module-cy-user-page .cy-tab-list li.active i{color:#38a3fd}.module-cy-user-page .cy-tab-list li.info-li:hover .cy-my-ico{background:url(//changyan.sohu.com/mdevp/extensions/cy-user-page/011/image/tab-list-icon-active1.png)}.module-cy-user-page .cy-tab-list li.info-li:hover i{color:#38a3fd}.module-cy-user-page .cy-user-page-tab .power-by-cy{width:26px;height:12px;background:url(//changyan.sohu.com/mdevp/extensions/cy-user-page/011/image/logo.png);position:absolute;bottom:12px;left:8px}.module-cy-user-page .cy-user-page-main{float:right;background:#FFF;width:630px;height:100%;position:relative}',i=window.document,c=i.createElement("style");c.setAttribute("type","text/css"),i.all?c.styleSheet.cssText=a:c.innerHTML=a,i.getElementsByTagName("head").item(0).appendChild(c)}),n("C:/Users/yuchenzhang/AppData/Roaming/npm/node_modules/mdevp/cache/www/cy-user-page/cy-user-page.js")}();