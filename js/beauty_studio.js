// Кнопки
const btn = document.querySelectorAll(".button_price")
// Блок в котором отображаем прайс выбранной услуги
const show_price = document.getElementById("show_price")
// Слайдер
const slider_brows = document.getElementById("show_price_brows")
const slider_manicure = document.getElementById("show_price_manicure")


let counter = 0
slider_brows.style.display = "none"


for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", event => {
    counter = i
    show_content()
})
}

function show_content() {
    if (counter === 0) {
        show_price.innerHTML = `<div class="container_makeup">
        <div class="container_service">
            <!-- Маникюр-->
            <p class="p_makeup">Маникюр: </p>
            <div class="flex_vip">
                <p class="p_vip">Мастер</p>
                <p class="p_vip">VIP Мастер</p>
            </div>
        </div>
        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Комбинированный маникюр (без покрытия)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">800 ₽</p>
                <p class="p_makeup_price2">1200 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Комбинированный маникюр с покрытием 
                    (выравнивание базой, покрытие гель-лаком)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">1600 ₽</p>
                <p class="p_makeup_price2">2000 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Укрепление</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1"><span class="span_text">от</span>100 ₽</p>
                <p class="p_makeup_price2"><span class="span_text">от</span>200 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Дизайны (ноготь)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1"><span class="span_text">от</span>50 ₽</p>
                <p class="p_makeup_price2"><span class="span_text">от</span>50 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Снятие «чужой» работы</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">200 ₽</p>
                <p class="p_makeup_price2">200 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Снятие нашей работы с последующим маникюром</p>
            </div>
            <div style="width: auto;" class="flex_price_vip">
                <p class="p_makeup_price2">бесплатно!</p>
            </div>
        </div>
        <!-- Педикюр-->
        <div class="container_service">
            <p class="p_makeup">Педикюр:</p>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Педикюр без покрытия (обработка стопы и пальцев)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">1800 ₽</p>
                <p class="p_makeup_price2">2000 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Полный педикюр с покрытием (обработка стопы и пальцев, покрытие гель-лаком)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">2500 ₽</p>
                <p class="p_makeup_price2">3000 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Педикюр с покрытием (без обработки стопы, только обработка пальцев)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">2000 ₽</p>
                <p class="p_makeup_price2">2400 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Дизайны (ноготь)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1"><span class="span_text">от</span>50 ₽</p>
                <p class="p_makeup_price2"><span class="span_text">от</span>50 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Медицинский педикюр (вросшие ногти, зачистка ногтя от онихолизиса)</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1"><span class="span_text">от</span>500 ₽</p>
                <p class="p_makeup_price2"><span class="span_text">от</span>500 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Снятие «чужой» работы</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price1">200 ₽</p>
                <p class="p_makeup_price2">300 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Снятие нашей работы с последующим педикюром</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">бесплатно!</p>
            </div>
        </div>
    </div>`
    slider_brows.style.display = "none"
    slider_manicure.style.display = "block"
    }
    else {
        show_price.innerHTML = `<div class="container_makeup">
        <div class="container_service">
            <!-- Ламинирование ресниц-->
            <p class="p_makeup">Ламинирование ресниц:</p>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Ламинирование ресниц + окрашивание</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">2300 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Ламинирование ресниц ботоксом + окрашивание</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">2500 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Окрашивание ресниц</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">300 ₽</p>
            </div>
        </div>

        <div class="container_service">
            <!-- Брови-->
            <p class="p_makeup">Брови:</p>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Полная архитектура бровей, создание формы, коррекция пинцетом</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">500 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">Окрашивание краской</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">300 ₽</p>
            </div>
        </div>

        <div class="container_makeup_price">
            <div class="p_max_with">
                <p class="p_makeup_price">биотатуаж хной</p>
            </div>
            <div class="flex_price_vip">
                <p class="p_makeup_price2">500 ₽</p>
            </div>
        </div>
    </div>`
    slider_brows.style.display = "block"
    slider_manicure.style.display = "none"
    }
}



const photo_modal = document.querySelector(".form_person")

const brows_photo = document.querySelectorAll("#brows > img")
const manicure_photo = document.querySelectorAll("#manicure > img")


for (let i = 0; i < brows_photo.length; i++) {
    brows_photo[i].addEventListener("click", event => {
        photo_modal.innerHTML = brows_photo[i].outerHTML
    })
}
for (let i = 0; i < manicure_photo.length; i++) {
    manicure_photo[i].addEventListener("click", event => {
        photo_modal.innerHTML = manicure_photo[i].outerHTML
        body.style.overflow = "hidden"
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



