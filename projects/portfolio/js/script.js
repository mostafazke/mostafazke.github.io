/*global $, alert, console*/
$(document).ready(function () {
    'use strict';
    // adjust header height
    var myheader = $('header');

    myheader.width($(window).width());
    myheader.height($(window).height());
    $(window).resize(function () {
        myheader.width($(window).width());
        myheader.height($(window).height());
    });
    $(".nav").click(function () {
        $(".nav").css("display", "none");
        $(".lang").css("display", "block");
        $("header h1").css("margin-top", "18.2%");
    });
    $(".fa-close").click(function () {
        $(".lang").css("display", "none");
        $(".nav").css("display", "block");
        $("header h1").css("margin-top", "20%");
    });

    function en() {
        $(".nav").css("float", "right");
        $(".lang").css("float", "right");
        $(".nav").css("margin-right", "50px");
        $(".lang").css("margin-right", "40px");
        $(".fa-close").css("float", "right");
        $("ul li").css("float", "right");
        $("ul li").css("margin-right", "-30px");
        $("ul li:nth-child(3)").css("margin-right", "20px");
        $(".nav").css("display", "block");
        $(".lang").css("display", "none");
        $("header h1").css("margin-top", "20%");

        $("div.testimonial:nth-child(2)").css("margin-left", "10%");
        $(".testimonials .testimonial").css("float", "right");
        $(".testimonials .info div").css("margin-left", "40px");
        $(".testimonials .info div").css("text-align", "left");
        $(".testimonials .info div").css("float", "left");
        $(".testimonials .info").css("float", "left");
        $(".testimonials .info img").css("float", "left");

        $("header h1").text("Hello, I’m Mostafa");
        $("header p").text("And I Design & Develop Beautiful Sites");
        $(".about h2").text("About me");
        $(".about p").text("I'm not really a big fan of lorem ipsum, so I'm gonna use this text A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present     ");
        $(".projects h2").text("Portfolio");
        $(".clients h2").text("Firms that trusted us");
        $(".testimonials h2").text("Happy Client");
        $(".testimonial:nth-child(2) p").text("consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis");
        $("div.testimonial:nth-child(2) > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)").text("Jon Doe");
        $("div.testimonial:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)").text("big firm guy");
        $("div.testimonial:nth-child(3) > p:nth-child(1)").text("consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturientmontes");
        $("div.testimonial:nth-child(3) > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)").text("Pascal Wagner");
        $("div.testimonial:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)").text("nice guy");
        $("footer h2").text("Contact");
    }

    function ar() {
        $(".nav").css("float", "left");
        $(".lang").css("float", "left");
        $(".fa-close").css("float", "left");
        $("ul li").css("float", "left");
        $("ul li").css("margin-right", "20px");
        $(".nav").css("display", "block");
        $(".lang").css("display", "none");
        $("header h1").css("margin-top", "20%");

        $("div.testimonial:nth-child(2)").css("margin-left", "5%");
        $(".testimonials .testimonial").css("float", "left");
        $(".testimonials .info div").css("margin-left", "0");
        $(".testimonials .info div").css("text-align", "right");
        $(".testimonials .info div").css("float", "right");
        $(".testimonials .info").css("float", "right");
        $(".testimonials .info img").css("float", "right");

        $("header h1").text("مرحبا، أنا مصطفي");
        $("header p").text("وأنا أصمم وأطور مواقع جميلة");
        $(".about h2").text("من أنا");
        $(".about p").text("هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع، ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق، هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.");
        $(".projects h2").text("بعض أعمالي");
        $(".clients h2").text("زبائن وثقوا في");
        $(".testimonials h2").text("شهادات العملاء");
        $(".testimonial:nth-child(2) p").text("هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى");
        $("div.testimonial:nth-child(2) > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)").text("جميل وسيم");
        $("div.testimonial:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)").text("زبون يدفع بشكل جيد");
        $("div.testimonial:nth-child(3) > p:nth-child(1)").text("هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق   ");
        $("div.testimonial:nth-child(3) > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)").text("فلان هلام");
        $("div.testimonial:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)").text("زبون محترم");
        $("footer h2").text("تواصل معي");
    }
    $(".ar").click(function () {
        ar();
    });
    $(".en").click(function () {
        en();
    });
    if (navigator.language === "ar") {
        ar();
    } else {
        en();
    }
});