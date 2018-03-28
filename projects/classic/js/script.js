/*global $, alert, console*/

$(function () {
    'use strict';

    // adjust header height
    var myheader = $('.header'),
        myslider = $('.bxslider');

    myheader.width($(window).width());
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.width($(window).width());
        myheader.height($(window).height());
        myslider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });

    });
    myslider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });
    // links add active class
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    // smooth scroll to div

    $('.links li a').click(function () {

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    //slider to center
    myslider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });

    // slider run
    myslider.bxSlider({
        pager: false
    });

    // our auto slider code

    (function autoSlider() {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    //  mixItUp start
    $('#container').mixItUp();

    $('.rang').click(function () {
        if ($(this).hasClass('fa-heart-o')) {
            $(this).removeClass('fa-heart-o');
            $(this).addClass('fa-heart');
            $(this).text(Number($(this).text()) + 1);
        } else {
            $(this).removeClass('fa-heart');
            $(this).addClass('fa-heart-o');
            $(this).text(Number($(this).text()) - 1);
        }
    });
});