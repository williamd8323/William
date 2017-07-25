/*! Backstretch - v2.0.5 - 2015-09-18\n* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2015 Scott Robbin; Licensed MIT */!function(a,b,c){"use strict";a.fn.backstretch=function(c,d){return 0===a(b).scrollTop()&&b.scrollTo(0,0),this.each(function(){var b=a(this),e=b.data("backstretch");if(e){if("string"==typeof c&&"function"==typeof e[c])return void e[c](d);d=a.extend(e.options,d),e.hasOwnProperty("destroy")&&e.destroy(!0)}if(!c||c&&0===c.length){var f=b.css("background-image");f&&"none"!==f?c=[b.css("backgroundImage").replace(/url\(|\)|"|'/g,"")]:a.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.")}e=new g(this,c,d||{}),b.data("backstretch",e)})},a.backstretch=function(b,c){return a("body").backstretch(b,c).data("backstretch")},a.expr[":"].backstretch=function(b){return a(b).data("backstretch")!==c},a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0,fadeFirst:!0,alignX:"auto",alignY:"auto",paused:!1,start:0,preload:2,preloadSize:1};var d={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},e=function(){var b=function(a){for(var b=1;b<a.length;b++){for(var c=a[b],d=b;a[d-1]&&parseInt(a[d-1].width,10)>parseInt(c.width,10);)a[d]=a[d-1],--d;a[d]=c}return a},c=function(a,b){for(var c=0;c<b.length&&b[c].width<a;)c++;return b[c-1].url};return function(d,e){for(var f=d.width(),g=d.height(),h=[],i=function(a,b){return"width"===b?f:"height"===b?g:a},j=0;j<e.length;j++)if(a.isArray(e[0])){e[j]=b(e[j]);var k=c(f,e[j]);h.push(k)}else{var l=e[j].replace(/{{(width|height)}}/g,i);h.push(l)}return h}}(),f=function(b,c,d,e,f){var g=[],h=function(a){for(var b=0;b<g.length;b++)if(g[b].src===a.src)return g[b];return g.push(a),a},i=function(a,b,c){"function"==typeof b&&b.call(a,c)};return function j(b,c,d,e,f){if("undefined"!=typeof b){"string"==typeof b&&(b=[b]),arguments.length<5&&"function"==typeof arguments[arguments.length-1]&&(f=arguments[arguments.length-1]),c="function"!=typeof c&&c?c:0,d="function"==typeof d||!d||0>d?b.length:Math.min(d,b.length),e="function"!=typeof e&&e?e:1,c>=b.length&&(c=0,d=0),0>e&&(e=d),e=Math.min(e,d);var g=b.slice(c+e,d-e);if(b=b.slice(c,e),d=b.length,!d)return void i(b,f,!0);for(var k,l=0,m=function(){l++,l===d&&(i(b,f,!g),j(g,0,0,e,f))},n=0;n<b.length;n++)k=new Image,k.src=b[n],k=h(k),k.complete?m():a(k).on("load error",m)}}}(),g=function(c,g,i){this.options=a.extend({},a.fn.backstretch.defaults,i||{}),this.firstShow=!0,this.options.centeredX="auto"!==this.options.alignX?"center"===this.options.alignX:this.options.centeredX,this.options.centeredY="auto"!==this.options.alignY?"center"===this.options.alignY:this.options.centeredY,this.images=a.isArray(g)?g:[g],this.options.paused&&(this.paused=!0),this.options.start>=this.images.length&&(this.options.start=this.images.length-1),this.options.start<0&&(this.options.start=0),this.isBody=c===document.body,this.$container=a(c),this.$root=this.isBody?a(h?b:document):this.$container,this.originalImages=this.images,this.images=e(this.$root,this.originalImages),f(this.images,this.options.start||0,this.options.preload||1);var j=this.$container.children(".backstretch").first();if(this.$wrap=j.length?j:a('<div class="backstretch"></div>').css(d.wrap).appendTo(this.$container),!this.isBody){var k=this.$container.css("position"),l=this.$container.css("zIndex");this.$container.css({position:"static"===k?"relative":k,zIndex:"auto"===l?0:l,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&h?"fixed":"absolute"}),this.index=this.options.start,this.show(this.index),a(b).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===b.pageYOffset&&(b.scrollTo(0,1),this.resize())},this))};g.prototype={resize:function(){try{var c=this.$root.width(),d=this.$root.height(),g=c/(this._lastResizeContainerWidth||0),h=d/(this._lastResizeContainerHeight||0);if((.9>g||g>1.1||isNaN(g)||.9>h||h>1.1||isNaN(h))&&(this._lastResizeContainerWidth=c,this._lastResizeContainerHeight=d,this.images=e(this.$root,this.originalImages),this.options.preload&&f(this.images,(this.index+1)%this.images.length,this.options.preload),1===this.images.length&&this._currentImageSrc!==this.images[0])){var i=this;clearTimeout(i._selectAnotherResolutionTimeout),i._selectAnotherResolutionTimeout=setTimeout(function(){i.show(0)},2500)}var j,k={left:0,top:0,right:"auto",bottom:"auto"},l=this.isBody?this.$root.width():this.$root.innerWidth(),m=l,n=this.isBody?b.innerHeight?b.innerHeight:this.$root.height():this.$root.innerHeight(),o=m/this.$img.data("ratio"),p=a.Event("backstretch.resize",{relatedTarget:this.$container[0]});o>=n?(j=(o-n)/2,this.options.centeredY?k.top="-"+j+"px":"bottom"===this.options.alignY&&(k.top="auto",k.bottom=0)):(o=n,m=o*this.$img.data("ratio"),j=(m-l)/2,this.options.centeredX?k.left="-"+j+"px":"right"===this.options.alignX&&(k.left="auto",k.right=0)),this.$wrap.css({width:l,height:n}).find("img:not(.deleteable)").css({width:m,height:o}).css(k),this.$container.trigger(p,this)}catch(q){}return this},show:function(b){if(!(Math.abs(b)>this.images.length-1)){var c=this,e=c.$wrap.find("img").addClass("deleteable"),f={relatedTarget:c.$container[0]};return c.$container.trigger(a.Event("backstretch.before",f),[c,b]),this.index=b,clearTimeout(c._cycleTimeout),c.$img=a("<img />").css(d.img).bind("load",function(d){var g=this.width||a(d.target).width(),h=this.height||a(d.target).height();a(this).data("ratio",g/h);var i=function(){e.remove(),!c.paused&&c.images.length>1&&c.cycle(),a(["after","show"]).each(function(){c.$container.trigger(a.Event("backstretch."+this,f),[c,b])})};c.firstShow&&!c.options.fadeFirst?(a(this).show(),i()):a(this).fadeIn(c.options.speed||c.options.fade,i),c.firstShow=!1,c.resize()}).appendTo(c.$wrap),c.$img.attr("src",c.images[b]),c._currentImageSrc=c.images[b],c}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.cycle(),this},cycle:function(){return this.images.length>1&&(clearTimeout(this._cycleTimeout),this._cycleTimeout=setTimeout(a.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(c){a(b).off("resize.backstretch orientationchange.backstretch"),clearTimeout(this._cycleTimeout),c||this.$wrap.remove(),this.$container.removeData("backstretch")}};var h=function(){var a=navigator.userAgent,c=navigator.platform,d=a.match(/AppleWebKit\/([0-9]+)/),e=!!d&&d[1],f=a.match(/Fennec\/([0-9]+)/),g=!!f&&f[1],h=a.match(/Opera Mobi\/([0-9]+)/),i=!!h&&h[1],j=a.match(/MSIE ([0-9]+)/),k=!!j&&j[1];return!((c.indexOf("iPhone")>-1||c.indexOf("iPad")>-1||c.indexOf("iPod")>-1)&&e&&534>e||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||h&&7458>i||a.indexOf("Android")>-1&&e&&533>e||g&&6>g||"palmGetResource"in b&&e&&534>e||a.indexOf("MeeGo")>-1&&a.indexOf("NokiaBrowser/8.5.0")>-1||k&&6>=k)}()}(jQuery,window);