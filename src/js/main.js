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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay: 2000
    },
    speed: 1500
});