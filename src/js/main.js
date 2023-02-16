$(".mobile-btn").on("click", function () {
    $(".mobile-btn").toggleClass("show-mobile-btn");
    $(".header__list").toggleClass("show-header__menu");
    $(".header__link").toggleClass("show-header__link");
});

$(".header__list").on("click", function () {
    $(".mobile-btn").removeClass("show-mobile-btn");
    $(".header__list").removeClass("show-header__menu");
    $(".header__link").removeClass("show-header__link");
});

// $('#demoDefaultSelection').ddslick({
//
//     onSelected: function(selectedData){
//         //callback function: do something with selectedData;
//     }
// });


// var swiper = new Swiper(".mySwiper", {
//     autoplay: {
//         delay: 2000,
//     },
//     loop: true,
//     grabCursor: true,
//     effect: "creative",
//     creativeEffect: {
//         prev: {
//             shadow: true,
//             translate: [0, 0, -400],
//         },
//         next: {
//             translate: ["100%", 0, 0],
//         },
//     },
// });


$('ul.acc-list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.acc-tow').removeClass('active').eq($(this).index()).addClass('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay: 2000
    },
    speed: 1500,
    breakpoints: {
        1200: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        676: {
          slidesPerView: 2
        },
        641: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        425: {
            slidesPerView: 1
        },
        375: {
            slidesPerView: 1
        },
        320: {
            slidesPerView: 1
        }
    }
});

