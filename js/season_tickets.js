// Активные кнопки
let Options = document.querySelectorAll('.button_price');
Options.forEach(function(element, index) {
element.addEventListener('click', switchLanguage);
});
function switchLanguage (event) {
let targetElement = event.target;

Options.forEach(function(element, index) {
    element.classList.remove('active');
});
targetElement.classList.add('active');
}


// Логика кнопок, блок "Прайс"

// Чекбокс
const vip_checkbox = document.querySelector(".toggle-checkbox")
// Кнопки
const btn = document.querySelectorAll(".button_price")
// Прайс первого сеанса
const p_price = document.getElementById("price")
// Блок с прайсом абонементов
const block_subscription = document.getElementById("block_subscription")
// прайс
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
        if (vip_checkbox.checked === false) {
            p_price.textContent = price.first_training
            block_price(counter)
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
                <p class="p_duration">Длительность • 60 мин</p>
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
block_price(0)
checkbox()
button()

