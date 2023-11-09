// Логика кнопок, блок "Прайс"
// Чекбокс
const vip_checkbox = document.querySelector(".toggle-checkbox")
// Кнопки
const btn = document.querySelectorAll(".button_price")
// Прайс первого сеанса
const p_price = document.getElementById("price")
// Блок с прайсом абонементов
const block_subscription = document.getElementById("block_subscription")
// Блок с командой
const person = document.querySelector(".container_person")
let img_person = document.querySelectorAll(".container_person > a")

// Прайс
const price = {
    first_training: "2500 ₽",
    number: [6, 8, 10 , 12],
    old_price_subscription: [15000, 20000, 25000, 30000],
    price_subscription: [14000, 17000, 20000, 23000]
}
// VIP прайс
const price_vip = {
    first_training: "3000 ₽",
    number: [6, 8, 10 , 12],
    old_price_subscription: [18000, 24000, 30000, 36000],
    price_subscription: [17000, 21000, 25000, 28000]
}
// Номер нажатой кнопки
let counter = 0



// Логика чекбокса
function checkbox() {
    vip_checkbox.addEventListener("change", event => {
        p_price.textContent = price_vip.first_training
        block_price(counter)
        person_block()


        if (vip_checkbox.checked === false) {
            p_price.textContent = price.first_training
            block_price(counter)
            person_block()

        }   
    })
}
// Рисуем прайс
function block_price(i) {
    let x = price
    if (vip_checkbox.checked === true) {
        x = price_vip
    }
    else {
        x = price
    }
    block_subscription.innerHTML = `<h2 class="h2_text2">Абонемент из ${x.number[i]} тренировок</h2>
            <div class="container_subscription">
            <div class="new_price_container">
                <span class="span_old_price"></span>
                <p class="old_price">${x.old_price_subscription[i]} ₽</p>
                <p class="price2">${x.price_subscription[i]} ₽</p>
            </div>
            <div class="new_price_container">
                <span class="span_dash">/</span>
                <p class="p_number_subscription">${x.number[i]} тренировок</p>
                <p class="p_duration">Длительность • 90 мин</p>
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

function person_block() {
    if (vip_checkbox.checked === true) {
        person.innerHTML = `<a href="#4">
        <button style="background-image: url(../igmp/person4.svg);" class="container_button_person">
            <p class="p_name">Антон</p>
        </button>
    </a>
    <a href="#5">
        <button style="background-image: url(../igmp/person5.svg);" class="container_button_person">
            <p class="p_name">Анастасия</p>
        </button>
    </a>
    <a href="#6">
        <button style="background-image: url(../igmp/person6.svg);" class="container_button_person">
            <p class="p_name">Андрей</p>
        </button>
    </a>`

    }
    else {
        person.innerHTML = `<a href="#1">
        <button style="background-image: url(../igmp/person1.svg);" class="container_button_person">
            <p class="p_name">Александр</p>
        </button>
        </a>
        <a href="#2">
        <button style="background-image: url(../igmp/person2.svg);" class="container_button_person">
            <p class="p_name">Екатерина</p>
        </button>
        </a>
        <a href="#3">
        <button style="background-image: url(../igmp/person3.svg);" class="container_button_person">
            <p class="p_name">Денис</p>
        </button>
        </a>`
    }
    img_person = document.querySelectorAll(".container_person > a")
    body_hidden()
    
}


person_block()
checkbox()
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

const demo2 = new LetMeScroll({
    selector: "#scrollable2",
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

const demo3 = new LetMeScroll({
    selector: "#scrollable3",
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

const demo4 = new LetMeScroll({
    selector: "#scrollable4",
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

const demo5 = new LetMeScroll({
    selector: "#scrollable5",
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

const demo6 = new LetMeScroll({
    selector: "#scrollable6",
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