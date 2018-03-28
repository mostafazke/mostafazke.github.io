/*global $, alert, console*/
$(document).ready(function () {
    'use strict';

    // Hide Placeholder On Focus And Show It In Blur Blugin
    $('[Placeholder]').focus(function () {

        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', $(this).attr('data-text'));
    });
    // Smooth Scroll
    $('.nav_menu a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);

    });
});