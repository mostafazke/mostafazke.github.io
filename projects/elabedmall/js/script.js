$(function () {

    // Hide Placeholder On Focus And Show It In Blur
    $('[Placeholder]').focus(function () {

        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', $(this).attr('data-text'));
    });

    (function mSlider() {
        var move = 0;
        $('a.prev').on('click', function () {
            move = move <= 0? 0 : move - 1;
            $('.slider .slider-items').css('transform', 'translateX(' + move * $('.slider .item').outerWidth() + 'px)');
        });
        $('a.next').on('click', function () {
            var lastSlide = $('.slider .item').length - 3;
            move = move ==  lastSlide? lastSlide : move + 1;
            $('.slider .slider-items').css('transform', 'translateX(' + move * $('.slider .item').outerWidth() + 'px)');
        });
    }())

    $(document).ready(function () {
        $('.testi-slider-bullets li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
           $('.container-slider').css('transform', 'translateX('+ $(this).index()* $('.testim').outerWidth() +'px)');
        });
    });
});