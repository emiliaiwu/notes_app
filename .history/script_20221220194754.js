'use strict';

const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const cardColors = cardColorsContainer.querySelectorAll('.card_color');
// const addColors = document.querySelector('.add_colors');



// ADD COLORS
addColorBtn.addEventListener("click", () => {

    cardColors.forEach((cardColor, i) => {
        console.log(i);
        setTimeout(function () {
            cardColor.style.transform = 'translate(0px)';
            cardColor.style.display = 'block';
        }, 100 * i);
    })
})