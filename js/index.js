$(document).ready(function(){setInterval(function(){$(".line-btn").toggleClass("active")},15e3),$(document).scroll(function(){var e=$(window).scrollTop(),t=$(window).height(),i=$("#review-1").offset().top,o=$("#review-2").offset().top,s=$("#review-3").offset().top,c=$("#review-4").offset().top,n=$("#review-5").offset().top,f=$("#reviews-block__btn").offset().top;i<=e+4.5*t/5&&e<=f?setTimeout(function(){$("#review-1").css("opacity","1")},600):setTimeout(function(){$("#review-1").css({opacity:"0"})},600),o<=e+4.5*t/5&&e<=f?setTimeout(function(){$("#review-2").css({opacity:"1"})},600):setTimeout(function(){$("#review-2").css({opacity:"0"})},600),s<=e+4.5*t/5&&e<=f?setTimeout(function(){$("#review-3").css({opacity:"1"})},600):setTimeout(function(){$("#review-3").css({opacity:"0"})},600),c<=e+4.5*t/5&&e<=f?setTimeout(function(){$("#review-4").css({opacity:"1"})},600):setTimeout(function(){$("#review-4").css({opacity:"0"})},600),n<=e+4.5*t/5&&e<=f?setTimeout(function(){$("#review-5").css({opacity:"1"})},600):setTimeout(function(){$("#review-5").css({opacity:"0"})},600)})});