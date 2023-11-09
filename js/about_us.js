




const photo_modal = document.querySelector(".form_person")

const modal_person = document.querySelector(".modal_person")



const photo_vertical = document.querySelectorAll("#photo_vertical > img")
for (let i = 0; i < photo_vertical.length; i++) {
    photo_vertical[i].addEventListener("click", event => {
        photo_modal.innerHTML = photo_vertical[i].outerHTML
        modal_person.classList.add("vertical_photo")
        modal_person.classList.remove("horizontal_photo")
    })
}
const photo_horizontal = document.querySelectorAll("#photo_horizontal > img")
for (let i = 0; i < photo_horizontal.length; i++) {
    photo_horizontal[i].addEventListener("click", event => {
        photo_modal.innerHTML = photo_horizontal[i].outerHTML
        modal_person.classList.add("horizontal_photo")
        modal_person.classList.remove("vertical_photo")
    })
}

















