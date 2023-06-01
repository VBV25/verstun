$(document).ready(function () {
  /*---подсветка-кнопки-напоминалка---*/
  setInterval(function () {
    $('.line-btn').toggleClass('active');
  }, 15000);

  /*-----------------------------------*/

  /*---появление-элементов-в-зоне-видимости-при скроле---*/
  $(document).scroll(function () {
    var wt = $(window).scrollTop();
    var wh = $(window).height();

    //
    var et4_1 = $('#review-1').offset().top;

    var et4_2 = $('#review-2').offset().top;

    var et4_3 = $('#review-3').offset().top;

    var et4_4 = $('#review-4').offset().top;

    var et4_5 = $('#review-5').offset().top;

    var btn_4 = $('#reviews-block__btn').offset().top;
    //

    //отображение-скрытие

    //---------------1---------
    if (wt + (4.5 * wh) / 5 >= et4_1 && wt <= btn_4) {
      setTimeout(function () {
        $('#review-1').css('opacity', '1');
      }, 600);
    } else {
      setTimeout(function () {
        $('#review-1').css({ opacity: '0' });
      }, 600);
    }

    //---------------2---------
    if (wt + (4.5 * wh) / 5 >= et4_2 && wt <= btn_4) {
      setTimeout(function () {
        $('#review-2').css({ opacity: '1' });
      }, 600);
    } else {
      setTimeout(function () {
        $('#review-2').css({ opacity: '0' });
      }, 600);
    }

    //---------------3---------
    if (wt + (4.5 * wh) / 5 >= et4_3 && wt <= btn_4) {
      setTimeout(function () {
        $('#review-3').css({ opacity: '1' });
      }, 600);
    } else {
      setTimeout(function () {
        $('#review-3').css({ opacity: '0' });
      }, 600);
    }

    //---------------4---------
    if (wt + (4.5 * wh) / 5 >= et4_4 && wt <= btn_4) {
      setTimeout(function () {
        $('#review-4').css({ opacity: '1' });
      }, 600);
    } else {
      setTimeout(function () {
        $('#review-4').css({ opacity: '0' });
      }, 600);
    }

    //---------------5---------
    if (wt + (4.5 * wh) / 5 >= et4_5 && wt <= btn_4) {
      setTimeout(function () {
        $('#review-5').css({ opacity: '1' });
      }, 600);
    } else {
      setTimeout(function () {
        $('#review-5').css({ opacity: '0' });
      }, 600);
    }
  });
});
