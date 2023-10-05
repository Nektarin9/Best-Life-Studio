const header = document.querySelector("header")

window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.style.backgroundColor = "#6e6e6e"
    }
    else {
        header.style.backgroundColor = "#00000013"
    }
})