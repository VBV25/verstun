var windowWidth = document.documentElement.clientWidth;
if (windowWidth <= 768) {
    var inf = document.getElementById('inf');
    inf.innerHTML = 'Условия <br> использования';
}

$(document).ready(function() {
    /*маска ввода номера телефона*/

    $('input[name="phone"').mask('+7(999)999-99-99');

    /*----отступ в первой секции относительно высоты хедера----*/
    function paddingTopBot() {
        var headerHeight = $('header').outerHeight(true);
        var firstBlockHtml = $('.service-block__container');
        firstBlockHtml
            .css('padding-top', headerHeight)
            .css('padding-bottom', headerHeight / 1.5);
    }
    paddingTopBot();
    /*---подсветка-кнопки-напоминалка---*/
    setInterval(function() {
        $('.line-btn').toggleClass('active');
    }, 15000);
    /*-------------------------------*/

    /*---popup-policy---*/
    $('.btn-popup-policy').click(function() {
        $('body').addClass('hidden');
        $('.policy-popup').addClass('active-popup');
        var btnPopupName = $(this).text();
        /*--ПОЛИТИКА-КОНФИДЕНЦИАЛЬНОСТИ--*/
        console.log(btnPopupName);

        if (
            btnPopupName == 'Политика конфиденциальности' ||
            btnPopupName == 'Политикoй конфиденциальности'
        ) {
            $('.policy-popup__title').text(btnPopupName);
            $('.policy-popup__text').text(btnPopupName);
        } else if (
            btnPopupName == 'Условия использования' ||
            btnPopupName == 'Условиями использования'
        ) {
            /*--------*/

            /*--Условия использования--*/
            $('.policy-popup__title').text(btnPopupName);
            $('.policy-popup__text').text(btnPopupName);
        }
    });
    /*----*/

    /*---ЗАКРЫТИЕ-popup--*/
    $('#policyPopupBtnClose').click(function() {
        $('body').removeClass('hidden');
        $('.policy-popup').removeClass('active-popup');
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('body').removeClass('hidden');
            $('.policy-popup').removeClass('active-popup');
        }
    });
    /*-------------------------------*/

    /*--появление-элементов-в-зоне-видимости-при скроле--*/
    $(document).scroll(function() {
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
            setTimeout(function() {
                $('#review-1').css('opacity', '1');
            }, 600);
        } else {
            setTimeout(function() {
                $('#review-1').css({ opacity: '0' });
            }, 600);
        }

        //---------------2---------
        if (wt + (4.5 * wh) / 5 >= et4_2 && wt <= btn_4) {
            setTimeout(function() {
                $('#review-2').css({ opacity: '1' });
            }, 600);
        } else {
            setTimeout(function() {
                $('#review-2').css({ opacity: '0' });
            }, 600);
        }

        //---------------3---------
        if (wt + (4.5 * wh) / 5 >= et4_3 && wt <= btn_4) {
            setTimeout(function() {
                $('#review-3').css({ opacity: '1' });
            }, 600);
        } else {
            setTimeout(function() {
                $('#review-3').css({ opacity: '0' });
            }, 600);
        }

        //---------------4---------
        if (wt + (4.5 * wh) / 5 >= et4_4 && wt <= btn_4) {
            setTimeout(function() {
                $('#review-4').css({ opacity: '1' });
            }, 600);
        } else {
            setTimeout(function() {
                $('#review-4').css({ opacity: '0' });
            }, 600);
        }

        //---------------5---------
        if (wt + (4.5 * wh) / 5 >= et4_5 && wt <= btn_4) {
            setTimeout(function() {
                $('#review-5').css({ opacity: '1' });
            }, 600);
        } else {
            setTimeout(function() {
                $('#review-5').css({ opacity: '0' });
            }, 600);
        }
    });

    /*---скрол-к-форме-отправки---*/

    var formBlockTop = $('.form-block').offset().top + 50;
    var btnClickToForm = $('.btn-click-to-form');
    btnClickToForm.click(function() {
        $('body,html').animate({ scrollTop: formBlockTop }, 1000);
        return false;
    });

    /*----бегущая строка----*/

    var marquee = $('#marquee');
    marquee.wrapInner('<span>');
    marquee.find('span').css({ width: 'max-content', display: 'inline-flex' });
    var widthString = marquee.find('span').width();
    marquee.append(marquee.find('span').clone());
    marquee.wrapInner('<div>');
    var widthString2 = widthString * 2;
    marquee.find('div').css('width', widthString2);
    var reset = function() {
        $(this).css('margin-left', '0%');
        $(this).animate({ 'margin-left': -1 * widthString },
            16000,
            'linear',
            reset
        );
    };
    reset.call(marquee.find('div'));
    //

    //
    $(window).resize(function() {
        paddingTopBot();
    });
});