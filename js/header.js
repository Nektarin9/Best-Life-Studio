const header = document.querySelector("header")

window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.style.backgroundColor = "#6e6e6e"
        header.style.transition = "0.3s"
    }
    else {
        header.style.backgroundColor = "#00000013"
    }
})