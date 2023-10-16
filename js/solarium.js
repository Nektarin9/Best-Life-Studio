// Кнопки
const btn = document.querySelectorAll(".button_price")
// Блок в котором отображаем прайс выбранной услуги
const show_price = document.getElementById("show_price")
const price_solarium = {
    price_min: [40],
    minutes: [60, 100],
    old_price: [2400, 4000],
    price: [2100, 3000]
}

let counter = 0
for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", event => {
    counter = i
    show_content()
})
}

function content() {
    show_price.innerHTML = `<h2 class="h2_text2">Абонемент ${price_solarium.minutes[counter]} минут</h2>
        <div class="container_subscription">
            <div class="new_price_container">
                <span class="span_old_price"></span>
                <p class="old_price">${price_solarium.old_price[counter]} ₽</p>
                <p class="price2">${price_solarium.price[counter]} ₽</p>
            </div>
            <div class="new_price_container">
                <span class="span_dash">/</span>
                <p class="p_duration">Длительность • ${price_solarium.minutes[counter]} мин</p>
            </div>
        </div>`
}
function show_content() {
    if (counter === 0) {
        content()
    }
    else {
        content()
    }
}

show_content()
















const photo_modal = document.querySelector(".form_person")
const solarium_photo = document.querySelectorAll("#solarium > img")
for (let i = 0; i < solarium_photo.length; i++) {
    solarium_photo[i].addEventListener("click", event => {
        photo_modal.innerHTML = solarium_photo[i].outerHTML
    })
}

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



