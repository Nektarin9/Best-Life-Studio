

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



