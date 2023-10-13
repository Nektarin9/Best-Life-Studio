// Активные кнопки
function button_active(selector) {
    let Options = document.querySelectorAll(selector);
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
}
button_active('.button_price')
button_active('.button_price_minutes')
