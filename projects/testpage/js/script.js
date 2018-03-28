/*global $, alert, console*/
$(function () {
    'use strict';
    $(document).ready(function () {

        $(".preloader").fadeOut();
        $(".site").fadeIn();
      //  $(".carousel").css("margin-top", 70);
    });
    // Go up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll").css("right", "20px");
        } else {
            $(".scroll").css("right", "-60px");
        }
    });
    // nav animate
    $('.hire, .our-work, .arrow, .navbar li a, .scroll').click(function () {
        if ($(this).data() !== '') {
            $(this).parent().addClass('active').siblings().removeClass('active');
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('value')).offset().top
            }, 1000);
        }
    });
    // Nice Scroll Blugin
    $('html').niceScroll({
        cursorcolor: "#BA3A39",
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: 0
    });
     // Search Form Show
    $('a.search').on("click", function () {
        $('form[role=search]').fadeToggle();
    });
    // Hide Placeholder On Focus And Show It In Blur
    $('[Placeholder]').focus(function () {

        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', $(this).attr('data-text'));
    });
    
});