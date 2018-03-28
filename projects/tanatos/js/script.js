/*global $, alert, console*/
$(document).ready(function () {
    'use strict';

    // adjust header height
    var myheader = $('.header');
    myheader.width($(window).width());
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.width($(window).width());
        myheader.height($(window).height());
        $('.header .container').css('paddingTop', ($(window).height() - $('.header .container').height()) / 4);

    });

    $('.header .container').css('paddingTop', ($(window).height() - $('.header .container').height()) / 4);



    $(".fa-navicon").click(function () {
        $(".nav-overlay").css("display", "block");
    });
    $(".fa-close").click(function () {
        $(".nav-overlay").css("display", "none");
    });
    $("nav .navbar li a").click(function () {
        $(".nav-overlay").css("display", "none");
    });
    $(".1, .team-1").mouseenter(function () {
        $(".team-1 img").css("border-bottom", "3px solid #F7600E");
        $(".team-1 img").css("padding-bottom", "0");
        $(".team-1 img").css("filter", "none");
        $(".team-1 img").css("-webkit-filter", "grayscale(0)");
        $(".team-1 img").css("-moz-filter", "grayscale(0)");
        $(".team-1 img").css("-o-filter", "grayscale(0)");
        $(".team-1 img").css("filter", "grayscale(0)");
        $(".team-1 .info h3").css("color", "#3b434c");
        $(".team-1 .info p").css("color", "#3b434c");
        $(".team-1 .info i:nth-child(1)").css("background", "#205b9f");
        $(".team-1 .info i:nth-child(2)").css("background", "#00ace3");
        $(".team-1 .info i:nth-child(3)").css("background", "#ff3921");
    });
    $(".1, .team-1").mouseleave(function () {
        $(".team-1 img").css("border-bottom", "0px");
        $(".team-1 img").css("padding-bottom", "3px");
        $(".team-1 img").css("filter", "gray");
        $(".team-1 img").css("-webkit-filter", "grayscale(1)");
        $(".team-1 img").css("-moz-filter", "grayscale(1)");
        $(".team-1 img").css("-o-filter", "grayscale(1)");
        $(".team-1 img").css("filter", "grayscale(1)");
        $(".team-1 .info h3").css("color", "#9DA1A5");
        $(".team-1 .info p").css("color", "#9DA1A5");
        $(".team-1 .info i:nth-child(1)").css("background", "#9DA1A5");
        $(".team-1 .info i:nth-child(2)").css("background", "#9DA1A5");
        $(".team-1 .info i:nth-child(3)").css("background", "#9DA1A5");
    });
    $(".2, .team-2").mouseenter(function () {
        $(".team-2 img").css("border-bottom", "3px solid #F7600E");
        $(".team-2 img").css("padding-bottom", "0");
        $(".team-2 img").css("filter", "none");
        $(".team-2 img").css("-webkit-filter", "grayscale(0)");
        $(".team-2 img").css("-moz-filter", "grayscale(0)");
        $(".team-2 img").css("-o-filter", "grayscale(0)");
        $(".team-2 img").css("filter", "grayscale(0)");
        $(".team-2 .info h3").css("color", "#3b434c");
        $(".team-2 .info p").css("color", "#3b434c");
        $(".team-2 .info i:nth-child(1)").css("background", "#205b9f");
        $(".team-2 .info i:nth-child(2)").css("background", "#00ace3");
        $(".team-2 .info i:nth-child(3)").css("background", "#ff3921");
    });
    $(".2, .team-2").mouseleave(function () {
        $(".team-2 img").css("border-bottom", "0px");
        $(".team-2 img").css("padding-bottom", "3px");
        $(".team-2 img").css("filter", "gray");
        $(".team-2 img").css("-webkit-filter", "grayscale(1)");
        $(".team-2 img").css("-moz-filter", "grayscale(1)");
        $(".team-2 img").css("-o-filter", "grayscale(1)");
        $(".team-2 img").css("filter", "grayscale(1)");
        $(".team-2 .info h3").css("color", "#9DA1A5");
        $(".team-2 .info p").css("color", "#9DA1A5");
        $(".team-2 .info i:nth-child(1)").css("background", "#9DA1A5");
        $(".team-2 .info i:nth-child(2)").css("background", "#9DA1A5");
        $(".team-2 .info i:nth-child(3)").css("background", "#9DA1A5");
    });
    $(".3, .team-3").mouseenter(function () {
        $(".team-3 img").css("border-bottom", "3px solid #F7600E");
        $(".team-3 img").css("padding-bottom", "0");
        $(".team-3 img").css("filter", "none");
        $(".team-3 img").css("-webkit-filter", "grayscale(0)");
        $(".team-3 img").css("-moz-filter", "grayscale(0)");
        $(".team-3 img").css("-o-filter", "grayscale(0)");
        $(".team-3 img").css("filter", "grayscale(0)");
        $(".team-3 .info h3").css("color", "#3b434c");
        $(".team-3 .info p").css("color", "#3b434c");
        $(".team-3 .info i:nth-child(1)").css("background", "#205b9f");
        $(".team-3 .info i:nth-child(2)").css("background", "#00ace3");
        $(".team-3 .info i:nth-child(3)").css("background", "#ff3921");
    });
    $(".3, .team-3").mouseleave(function () {
        $(".team-3 img").css("border-bottom", "0px");
        $(".team-3 img").css("padding-bottom", "3px");
        $(".team-3 img").css("filter", "gray");
        $(".team-3 img").css("-webkit-filter", "grayscale(1)");
        $(".team-3 img").css("-moz-filter", "grayscale(1)");
        $(".team-3 img").css("-o-filter", "grayscale(1)");
        $(".team-3 img").css("filter", "grayscale(1)");
        $(".team-3 .info h3").css("color", "#9DA1A5");
        $(".team-3 .info p").css("color", "#9DA1A5");
        $(".team-3 .info i:nth-child(1)").css("background", "#9DA1A5");
        $(".team-3 .info i:nth-child(2)").css("background", "#9DA1A5");
        $(".team-3 .info i:nth-child(3)").css("background", "#9DA1A5");
    });
    $(".4, .team-4").mouseenter(function () {
        $(".team-4 img").css("border-bottom", "3px solid #F7600E");
        $(".team-4 img").css("padding-bottom", "0");
        $(".team-4 img").css("filter", "none");
        $(".team-4 img").css("-webkit-filter", "grayscale(0)");
        $(".team-4 img").css("-moz-filter", "grayscale(0)");
        $(".team-4 img").css("-o-filter", "grayscale(0)");
        $(".team-4 img").css("filter", "grayscale(0)");
        $(".team-4 .info h3").css("color", "#3b434c");
        $(".team-4 .info p").css("color", "#3b434c");
        $(".team-4 .info i:nth-child(1)").css("background", "#205b9f");
        $(".team-4 .info i:nth-child(2)").css("background", "#00ace3");
        $(".team-4 .info i:nth-child(3)").css("background", "#ff3921");
    });
    $(".4, .team-4").mouseleave(function () {
        $(".team-4 img").css("border-bottom", "0px");
        $(".team-4 img").css("padding-bottom", "3px");
        $(".team-4 img").css("filter", "gray");
        $(".team-4 img").css("-webkit-filter", "grayscale(1)");
        $(".team-4 img").css("-moz-filter", "grayscale(1)");
        $(".team-4 img").css("-o-filter", "grayscale(1)");
        $(".team-4 img").css("filter", "grayscale(1)");
        $(".team-4 .info h3").css("color", "#9DA1A5");
        $(".team-4 .info p").css("color", "#9DA1A5");
        $(".team-4 .info i:nth-child(1)").css("background", "#9DA1A5");
        $(".team-4 .info i:nth-child(2)").css("background", "#9DA1A5");
        $(".team-4 .info i:nth-child(3)").css("background", "#9DA1A5");
    });
    /* Go up */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll").css("right", "20px");
        } else {
            $(".scroll").css("right", "-60px");
        }
        if ($(this).scrollTop() > 3040) {
            $(".scroll").css("background", "#f7600e");
            $(".scroll").css("opacity", "1");
        } else {
            $(".scroll").css("background", "transparent");
            $(".scroll").css("opacity", "0.5");
        }
    });
    // nav animate
    $('.hire, .our-work, .arrow, .navbar a, .scroll').click(function () {
        if ($(this).data() !== '') {
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('value')).offset().top
            }, 1000);
        }
    });


    // our auto slider code

    (function autoSlider() {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();
                });
            }
        });
    }());
    
    // Hide Placeholder On Focus And Show It In Blur
    $('[Placeholder]').focus(function () {

        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', $(this).attr('data-text'));
    });
});