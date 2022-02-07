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

document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header__list').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [46.957771, 142.729587],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentBody: [
                '<address>',
                '<strong>Офис Яндекса в Москве</strong>',
                '<br/>',
                'Адрес: 119021, Москва, ул. Льва Толстого, 16',
                '<br/>',
                'Подробнее: <a href="https://company.yandex.ru/">https://company.yandex.ru</a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon'
        });
    
        myMap.geoObjects.add(myPlacemark);
    }

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
var distance2 = document.getElementById('444');
var distance3 = document.getElementById('555');
var distance4 = document.getElementById('666');
var distance5 = document.querySelector('.swiper-pagination-fraction');
distance.style.marginLeft = containerDistance + 'px';
distance2.style.marginLeft = containerDistance + 'px';
distance3.style.marginLeft = containerDistance + 'px';
distance4.style.marginLeft = containerDistance + 'px';
distance5.style.left = containerDistance + 'px';


document.querySelector('.header__search').onclick = function () {
    document.querySelector('.header__search').classList.toggle('AZAZA');
}



