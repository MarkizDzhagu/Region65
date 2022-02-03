import '../css/styles.css'
import '../css/header.css'
import '../css/main.css'
import '../css/footer.css'
import '../css/popup.css'
import '../css/shop.css'
import '../css/company.css'
import '../css/price.css'
import '../css/payment.css'
import '../css/delivery.css'

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
var containerDistance = container.offsetLeft;

var distance = document.getElementById('333');

distance.style.paddingLeft = containerDistance + 'px';


document.querySelector('.header__search').onclick = function () {
    document.querySelector('.header__search').classList.toggle('AZAZA');
}

document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header__list').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}