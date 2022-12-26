'use strict';

const addColors = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const cardColors = document.querySelectorAll('.card_color');
// const addColors = document.querySelector('.add_colors');



// ADD COLORS
addColorBtn.addEventListener("click", () => {

    cardColors.forEach((cardColor, i) => {
        console.log(i);
        setTimeout(function () {
            cardColor.style.transform = 'transform(0px)';
            cardColor[i].style.display = 'block';
        }, 50 * i);
    })
})