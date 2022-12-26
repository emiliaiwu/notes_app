'use strict';

const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
const noteContainer = document.querySelector('.notes');



// ADD COLORS
addColorBtn.addEventListener("click", () => {
    noteColors.forEach((noteColor, i) => {
        console.log(i);
        setTimeout(function () {
            noteColor.style.transform = 'translate(0px)';
            noteColor.style.display = 'block';
        }, 80 * i);
    })
});


// ADD NOTE

const addNote = () => {
    noteColors.forEach((noteColor) => {
        noteColor.addEventListener('click', () => {
            let color = noteColor.style.backgroundColor;
            const note = document.createElement('div');
            note.classList.add('note');
            note.innerHTML = `
                `;
            note.style.backgroundColor = color;
            noteContainer.prepend(note);
        });
	});
}




