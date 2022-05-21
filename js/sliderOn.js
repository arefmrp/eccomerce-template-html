


//swiper carousel
var swiper = new Swiper(".swiper", {

    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        460: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    autoplay:true,
});