
const person = document.querySelector(".container_person")
let img_person = document.querySelectorAll(".container_person > a")
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



