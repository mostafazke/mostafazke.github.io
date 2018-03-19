$('.top-nav .menu a, .read-more-btn-holder a').on('click', function (e) {
    e.preventDefault();    
    console.log($(this).attr('href'));
    $(this).parent().addClass('active').siblings().removeClass('active');
    if ($(this).attr('href') !== '#') {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.top-nav').height() + 2
        }, 1000);
    }
});

$('.mobile-nav-icon, .top-nav .menu a').on('click', function(e) {
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-open');
});

$(window).on('scroll', function () {
    if ($(window).width() >= 560) {
        if ($(this).scrollTop() > $('#about').offset().top - $('.top-nav').height()) {
            $(".top-nav").addClass('scrolled');
        } else {
            $(".top-nav").removeClass('scrolled');
        }
    }
    if ($(this).scrollTop() >= $('#home').offset().top - $('.top-nav').height()) {
        $('.top-nav .menu li:nth-child(1)').addClass('active').siblings().removeClass('active');
    }
    if ($(this).scrollTop() >= $('#about').offset().top - $('.top-nav').height()) {
        $('.top-nav .menu li:nth-child(2)').addClass('active').siblings().removeClass('active');
    }
    if ($(this).scrollTop() >= $('#portfolio').offset().top - $('.top-nav').height()) {
        $('.top-nav .menu li:nth-child(3)').addClass('active').siblings().removeClass('active');
    }
    if ($(this).scrollTop() >= $('#contact').offset().top - $('.top-nav').height()) {
        $('.top-nav .menu li:nth-child(4)').addClass('active').siblings().removeClass('active');
    }
});