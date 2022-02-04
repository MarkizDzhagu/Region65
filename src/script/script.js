new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    loop: "true",
});

var container = document.getElementById('container-distance');
var containerRect = container.getBoundingClientRect();
var containerDistance = container.distance.left;

var distance = document.getElementById('333');

distance.style.paddingLeft = containerDistance + 'px';

//var clicker = document.getElementById('999');
//clicker.onclick = console.log('click');

document.querySelector('.header__search').onclick = function () {
    document.querySelector('.header__search').classList.toggle('AZAZA');
}

document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header__list').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}