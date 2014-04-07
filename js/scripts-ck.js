/*global jQuery *//*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize.fittext orientationchange.fittext",n)})}})(jQuery);$(document).ready(function(){$(window).scroll(function(){var e=$("body").scrollTop(),t=$(".headlines").height();$(".headlines").css({opacity:1-e/t*.5});$(".pencil-img").css({opacity:1-e/t*.18})});$(".headlines h1").fitText(1,{minFontSize:"24px",maxFontSize:"96px"});$(".headlines h2").fitText(2.5,{minFontSize:"8px",maxFontSize:"28px"})});