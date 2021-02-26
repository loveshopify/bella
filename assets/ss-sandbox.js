/*
* Symbolset
* www.symbolset.com
* Copyright © 2014 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-sandbox.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'navigate right':'\u25BB','shopping cart':'\uE500','navigateright':'\u25BB','navigate left':'\u25C5','shoppingcart':'\uE500','navigateleft':'\u25C5','google plus':'\uF613','googleplus':'\uF613','telephone':'\uD83D\uDCDE','instagram':'\uF641','pinterest':'\uF650','envelope':'\u2709','subtract':'\u002D','previous':'\u25C5','facebook':'\uF610','linkedin':'\uF612','google +':'\uF613','comment':'\uD83D\uDCAC','twitter':'\uF611','google+':'\uF613','youtube':'\uF630','avatar':'\uD83D\uDC64','hyphen':'\u002D','remove':'\u002D','delete':'\u2421','tumblr':'\uF620','flickr':'\uF640','phone':'\uD83D\uDCDE','email':'\u2709','minus':'\u002D','close':'\u2421','vimeo':'\uF631','call':'\uD83D\uDCDE','mail':'\u2709','chat':'\uD83D\uDCAC','talk':'\uD83D\uDCAC','user':'\uD83D\uDC64','cart':'\uE500','plus':'\u002B','next':'\u25BB','rss':'\uE310','add':'\u002B'};


  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};
