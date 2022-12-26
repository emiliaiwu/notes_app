'use strict';


// ELEMENTS AND VARIABLES
const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
const noteContainer = document.querySelector('.notes');
const deleteBtn = document.querySelector('.delete');
const editBtn = document.querySelector('.edit');





// ADD COLORS
addColorBtn.addEventListener("click", () => {
    noteColors.forEach((noteColor, i) => {
        setTimeout(function () {
            noteColor.style.transform = 'translate(0px)';
            noteColor.style.display = 'block';
        }, 80 * i);
    })
});


// ADD NEW NOTE
const addNewNote = () => {
    noteColors.forEach((noteColor) => {
        noteColor.addEventListener('click', () => {
            let color = noteColor.style.backgroundColor;
            const addNote = (text = '') => {

            }
            
             
        });
    });
};
addNewNote();






// DELETE NOTE
const deleteNote = () => {
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });
};

