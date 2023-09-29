function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone1");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone2");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone3");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone4");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone5");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone6");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone7");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone8");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone9");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });