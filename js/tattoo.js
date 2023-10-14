// Кнопки
const btn = document.querySelectorAll(".button_price")
// Блок в котором отображаем прайс выбранной услуги
const show_price = document.getElementById("show_price")
// Слайдер
const slider = document.querySelector(".swiper-wrapper")

let counter = 0

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", event => {
        counter = i
        show_content()
    })
}

function show_content() {
    if (counter === 0) {
        show_price.innerHTML = `<div class="container_makeup">
        <p id="price" class="p_makeup">Брови:</p>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Пудровое напыление</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Теневая растушёвка</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Микроблейдинг</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Смешанная техника (напыление + микроблейдинг)</p>
            <p class="p_makeup_price1">8000 ₽</p>
        </div>
        <p id="price" class="p_makeup">Губы:</p>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Акварельная техника (naturel)</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Контурная техника с растушёвкой</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
        <p id="price" class="p_makeup">Глаза:</p>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Межресничное пространство</p>
            <p class="p_makeup_price1">6000 ₽</p>
        </div>
        <div class="container_makeup_price">
            <p class="p_makeup_price">Межресничное пространство со стрелочкой</p>
            <p class="p_makeup_price1">7000 ₽</p>
        </div>
    </div>`
    slider.innerHTML = `<div class="swiper-slide"><img src="../igmp/makeup1.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup2.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup3.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup4.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup5.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup6.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup7.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup8.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup9.jpg" alt="makeup"></div>
    <div class="swiper-slide"><img src="../igmp/makeup10.jpg" alt="makeup"></div>`
    }
    else {
        show_price.innerHTML = `<div class="flex_p_price">
        <p class="first_training">Стоимость от -</p>
        <p id="price" class="price">3000 ₽</p>
    </div>
    <div class="flex_p_price">
        <p class="first_training">Перекрытие старой татуировки -</p>
        <p id="price" class="price">стоимость индивидуальная</p>
    </div>
    <div class="flex_p_price">
        <p class="first_training">Консультация и разработка эскиза -</p>
        <p id="price" class="price">бесплатно</p>
    </div>`
    slider.innerHTML = `<div class="swiper-slide"><img src="../igmp/tattoo1.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo2.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo3.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo4.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo5.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo6.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo7.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo8.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo9.jpg" alt="tattoo"></div>
    <div class="swiper-slide"><img src="../igmp/tattoo10.jpg" alt="tattoo"></div>`
    }
}


show_content()





// Слайдер
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    }
  });