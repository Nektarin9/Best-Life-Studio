const body = document.body
// Фото сотрудника
const img_person = document.querySelectorAll(".img_team")
// Модальное окно
const modal_person = document.querySelector(".modal_person")
// Затемнение модального окна
const overlay_person = document.querySelector(".overlay_person")
// Кнопка закрытия модального окна
const close_btn = document.querySelector(".cl-btn-3")

const modal_content = document.querySelector(".scroll_container")
// Персонал
const studio_staff = [
    {
        img: "../igmp/person3.svg",
        name: "Денис Григорьев",
        experience: "Тренер по боксу и фитнесу (стаж 6 лет)",
        specialization: `Тренер по боксу, cнижение веса за счет под кожно-жировой клетчатки,
        развитие локальной и общей выносливости, набор мышечной массы, работа на 
        тренажерах, свободным и собственным весом, специальная физическая и техническая 
        подготовка для единоборств, оценка опорно-двигательного аппарата и коррекция осанки, 
        консультации по приему спортивного питания, составление программы питания 
        адаптированной к образу жизни тренировочному процессу
        Креативный, ответственный, спокойный. Умеет доходчиво донести нужную информацию, внимательный к мелочам.`,
        achievements: "КМС по боксу"
    },
] 
function rendering(elem) {
    modal_content.innerHTML = `<img class="img_person" src="${elem.img}" alt="${elem.name}">
    <div class="container_text_modal">
        <h2 class="h2_modal">${elem.name}</h2>
        <p class="p_modal">${elem.experience}</p>
        <h3 class="h3_modal">Специализация:</h3>
        <p class="p_modal">${elem.specialization}</p> 
        <h3 class="h3_modal">Достижения:</h3>
        <p class="p_modal">${elem.achievements}</p>`
}


img_person.forEach((item, index) => {
    item.addEventListener("click", event => {
        body.style.overflow = "hidden"
        modal_person.classList.replace("modal_person", "modal_person_visible")
        overlay_person.classList.replace("overlay_person", "overlay_person_visible")

        rendering(studio_staff[index])
        console.log(studio_staff[index])
    })
})








// Закрываем модальное окно и запрещаем скрол страницы при открытии модального окна
function hide_modal() {
    modal_person.classList.replace("modal_person_visible", "modal_person")
    overlay_person.classList.replace("overlay_person_visible", "overlay_person")
    body.style.overflow = "auto"
} 
modal_person.addEventListener("click", event => {
    if (event.target === close_btn || event.target === overlay_person) {
        hide_modal()
    }
})
overlay_person.addEventListener("click", event => {
    if (event.target) {
        hide_modal()
    }
})












// ------------------------



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



