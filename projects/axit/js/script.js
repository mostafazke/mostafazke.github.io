$(function () {
    'use strict';
    var navbar = $('.navbar'),
        input = $('.input'),
        tabsLinks = $('.tabs-section ul li');
    $(window).on('scroll', function () {
        $(this).scrollTop() >= navbar.height() ? navbar.addClass('nav-scroll') : navbar.removeClass('nav-scroll');
    });
    input.on('focus', function () {

        $('label[for=' + $(this).attr("id") + ']').addClass('focus');

    });
    input.on('blur', function () {
        if (!$(this).val()) {
            $('label[for=' + $(this).attr("id") + ']').removeClass('focus');
        }
    });
    tabsLinks.on('click', function () {
        $(this).addClass('is-active').siblings().removeClass('is-active');
        $('.' + $(this).data('class')).show(500).siblings().hide(500);
    });

});