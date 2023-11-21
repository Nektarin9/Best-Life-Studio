const btn_burger = document.querySelector(".menu__btn")
const darken_background = document.getElementById("darken_background")


btn_burger.addEventListener("click", event => {
    darken_background.classList.toggle("darken_background")
})




