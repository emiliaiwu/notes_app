'use strict';

const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
// const addColors = document.querySelector('.add_colors');



// ADD COLORS
addColorBtn.addEventListener("click", () => {
    Colors.forEach((cardColor, i) => {
        console.log(i);
        setTimeout(function () {
            cardColor.style.transform = 'translate(0px)';
            cardColor.style.display = 'block';
        }, 80 * i);
    })
});


