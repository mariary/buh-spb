$(document).ready(function(){
    $('.slider1').slick({
        arrows:true,
        dots:true,
        speed:800,
        easing: 'ease',
        infinite: true
    });
    $('.slider2').slick({
        arrows:true,
        dots:true,
        speed:800,
        slidesToShow: 4,
        slidesToScroll: 4,
        easing: 'ease',
        infinite: true
    });
    $('.slider3').slick({
        arrows:true,
        dots:true,
        speed:800,
        easing: 'ease',
        infinite: true
    });
});

let buttonOpen = document.querySelector('.header--menu--button--open');
let buttonClose = document.querySelector('.header--menu--button--close');
let menu = document.querySelector('.header--menu--content');
let none = 'none';
let unset = 'unset';

let OpenMenu = () => {
    buttonOpen.style.display = none;
    buttonClose.style.display = unset;
    menu.style.display = unset;
};
let CloseMenu = () => {
    buttonOpen.style.display = unset;
    buttonClose.style.display = none;
    menu.style.display = none;
};

buttonOpen.addEventListener("click", OpenMenu, false);
buttonClose.addEventListener("click", CloseMenu, false);