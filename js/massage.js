
// Логика кнопок, блок "Прайс"

// Кнопки
const btn = document.querySelectorAll(".button_price")
// Кнопки количество минут
const btn2 = document.querySelectorAll(".button_price_minutes")
// Прайс первого сеанса
const p_price = document.getElementById("price")
// Блок с прайсом абонементов
const block_subscription = document.getElementById("block_subscription")
// Блок с командой
const person = document.querySelector(".container_person")
let img_person = document.querySelectorAll(".container_person > a")


// Прайс

// 60 минут
const price = {
    first_training: "3000 ₽",
    minutes: "60 минут",
    number: [6, 8, 10],
    old_price_subscription: [18000, 24000 , 30000],
    price_subscription: [16500, 21000 , 25500]
}
// 90 минут
const price2 = {
    first_training: "4000 ₽",
    minutes: "90 минут",
    number: [6, 8, 10],
    old_price_subscription: [24000, 32000 , 40000],
    price_subscription: [22000, 28000 , 34000]
}
// 120 минут
const price3 = {
    first_training: "5000 ₽",
    minutes: "120 минут",
    number: [6, 8, 10],
    old_price_subscription: [30000, 40000, 50000],
    price_subscription: [28500, 36000, 42500]
}
// Переменная показывающая из какого обьекта мы берем прайс
let x = price
// Счетчик, показывает положение кнопки абонемента
let counter = 0
const mas_prise = [price, price2, price3]
// Рисуем прайс
function block_price(i) {
    p_price.textContent = x.first_training
    block_subscription.innerHTML = `<h2 class="h2_text2">Абонемент из ${x.number[i]} сеансов</h2>
            <div class="container_subscription">
            <div class="new_price_container">
                <span class="span_old_price"></span>
                <p class="old_price">${x.old_price_subscription[i]} ₽</p>
                <p class="price2">${x.price_subscription[i]} ₽</p>
            </div>
            <div class="new_price_container">
                <span class="span_dash">/</span>
                <p class="p_number_subscription">${x.number[i]} сеансов</p>
                <p class="p_duration">Длительность • ${x.minutes}</p>
            </div>
        </div>`
}
// Логика кнопки
function button() {
    for (let i = 0; i < btn.length; i ++) {
        btn[i].addEventListener("click", event => {
            block_price(i)
            counter = i
        })
    }
}
function button_minutes() {
    for (let i = 0; i < btn.length; i ++) {
        btn2[i].addEventListener("click", event => {
            x = mas_prise[i]
            block_price(counter)
        })
    }
}



button_minutes()
button() 
body_hidden()


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
body_auto()


// Кастомный скролл для модальных окон
const demo = new LetMeScroll({
    selector: "#scrollable",
    config : {
      dimensions : {
        // width of the scrollable container
        width : "auto",
        // height of the scrollable container
        height : "100%"
      },
      scroll : {
        // bottom offset
        bottomOffset: 0,
        // auto hide on mouse leave
        autoHide: false
      }
    },  
})