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