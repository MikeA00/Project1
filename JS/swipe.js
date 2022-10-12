const swiper1 = new Swiper('.swiper1', {
    
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 1000,
    },
    pagination: {
        el: '.swiper-pagination',
        },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper('.swiper3', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 3000,
    },
    
    breakpoints:{
        0:{
            slidesPerView:1
        },700:{
            slidesPerView:2
        },991:{
            slidesPerView:3
        }
    },
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
        
const swiper2 = new Swiper('.swiper2', {
// Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 3000,
    },
    
    breakpoints:{
        0:{
            slidesPerView:1
        },700:{
            slidesPerView:2
        },967:{
            slidesPerView:3
        }
    },pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
