const navButton = document.querySelector('.header__nav-mini');
const nav = document.querySelector('.header__nav-links');
const workItem = document.querySelector('.work__item');
const workHover = document.querySelector('.work__hover');


navButton.addEventListener('click', ()=>{
    event.preventDefault();
    nav.classList.toggle('header__nav-links_mobile');
    navButton.classList.toggle('header__nav-mini_active');
})


function hoverWorkItem(item){
     item.classList.toggle('work__hover_active')
}
workItem.addEventListener('mouseover', hoverWorkItem(workHover));


/* Slider */
$(function() {

   $("[slider]").slick({
       // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
