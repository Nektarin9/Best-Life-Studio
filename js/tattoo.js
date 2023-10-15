// Кнопки
const btn = document.querySelectorAll(".button_price")
// Блок в котором отображаем прайс выбранной услуги
const show_price = document.getElementById("show_price")
// Слайдер
const slider_makeup = document.getElementById("show_price_makeup")
const slider_tattoo = document.getElementById("show_price_tattoo")

let counter = 0
slider_makeup.style.display = "none"


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
    slider_makeup.style.display = "block"
    slider_tattoo.style.display = "none"
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
    slider_makeup.style.display = "none"
    slider_tattoo.style.display = "block"
    }
}



const photo_modal = document.querySelector(".form_person")

const makeup_photo = document.querySelectorAll("#makeup > img")
const tattoo_photo = document.querySelectorAll("#tattoo > img")


for (let i = 0; i < makeup_photo.length; i++) {
    makeup_photo[i].addEventListener("click", event => {
        photo_modal.innerHTML = makeup_photo[i].outerHTML
    })
}
for (let i = 0; i < tattoo_photo.length; i++) {
    tattoo_photo[i].addEventListener("click", event => {
        photo_modal.innerHTML = tattoo_photo[i].outerHTML
        body.style.overflow = "hidden"
    })
}















show_content()
let img_person = document.querySelectorAll(".swiper-slide > a")

// Запрещаем скролить фоновую страницу при открытии модального окна
const body = document.body
const modal = document.querySelectorAll(".modal_person")
const close_modal = document.querySelectorAll(".close")
const overlay_person = document.querySelectorAll(".overlay_person")
function body_hidden() {
    for (let i = 0; i < img_person.length; i++) {
        img_person[i].addEventListener("click", event => {
            body.style.overflow = "hidden"
        })
    }
}
function body_auto() {
    for (let i = 0; i < modal.length; i++) {
        close_modal[i].addEventListener("click", event => {
            body.style.overflow = "auto"
        })
        overlay_person[i].addEventListener("click", event => {
            body.style.overflow = "auto"
        })
    }
}
body_hidden()
body_auto()

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



