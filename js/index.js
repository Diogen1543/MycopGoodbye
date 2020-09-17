const navButton = document.querySelector('.header__nav-mini');
const nav = document.querySelector('.header__nav-links');
const workItem = document.querySelector('.work__item');

navButton.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.toggle('header__nav-links_mobile');
    navButton.classList.toggle('header__nav-mini_active');
});

/* Slider */
$(function() {

   $("[slider]").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
