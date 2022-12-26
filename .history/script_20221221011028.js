'use strict';

const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
const noteContainer = document.querySelector('.notes');
const deleteBtn = document.querySelector('.delete');
const editBtn = document.querySelector('.edit');
const note = document.createElement('div');



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

const addNewNote = () => {
    noteColors.forEach((noteColor) => {
        noteColor.addEventListener('click', () => {
            let color = noteColor.style.backgroundColor;
            
            note.style.backgroundColor = color;
            noteContainer.prepend(note);
            console.log('/////');
        });
	});
}

addNewNote();



const addNote = () => {

}




const deleteNote = () => {
    deleteBtn.addEventListener('click', () => {
        note.remove();
    })
}

