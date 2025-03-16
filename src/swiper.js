// home swiper
var swiper = new Swiper(".home-packages-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    rtl: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3.5
        },
        0: {
            slidesPerView: 1.5
        }

    }
});


// pages swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3, // الوضع الافتراضي للكمبيوتر
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 3, // 3 صور على الكمبيوتر
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 2, // 2 صورة على التابلت
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1, // 1 صورة على الموبايل
            spaceBetween: 10,
        }
    }
});

