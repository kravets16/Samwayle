/* menu */
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('nav__list-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('nav__list-active');
        })
    })
})

const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'slide',
    speed: 100,
    /* cssMode: true, */
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

const swiper2 = new Swiper('.menu__swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'slide',
    speed: 400,
    spaceBetween: 30,
    breakpoints: {
        576: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    },
    /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, */
});