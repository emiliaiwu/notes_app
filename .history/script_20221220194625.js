'use strict';

const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const cardColors = card.querySelectorAll('.card_color');
// const addColors = document.querySelector('.add_colors');



// ADD COLORS
addColorBtn.addEventListener("click", () => {

    cardColors.forEach((cardColor, i) => {
        console.log(i);
        setTimeout(function () {
            cardColor.style.transform = `transform(0px)`;
            cardColor.style.display = 'block';
        }, 50 * i);
    })
})