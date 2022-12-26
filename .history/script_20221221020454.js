'use strict';


// ELEMENTS AND VARIABLES
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


// ADD NEW NOTE
const addNewNote = () => {
    noteColors.forEach((noteColor) => {
        noteColor.addEventListener('click', () => {
            let color = noteColor.style.backgroundColor;
            addNote();
            note.style.backgroundColor = color;
            noteContainer.prepend(note);
        });
    });
};
addNewNote();


// ADD NOTE
const addNote = () => {
    note.classList.add('note', 'addNote');
    note.innerHTML = `
            <div
            <textarea class="textarea"></textarea>
            <div class="footer close">
                <div class="date">Today</div>
                <div class="edit_delete">
                    <div class="edit"><i class="fa-solid fa-pen"></i></div>
                    <div class="delete"><i class="fa-solid fa-trash-can"></i></div> 
                </div>
            </div>
            <ul class="footer open">
                <li class="bold"><span>Bold</span><i class="fa-solid fa-bold"></i></li>
                <li class="italic"><span>Italic</span><i class="fa-solid fa-italic"></i></li>
                <li class="underline"><span>Underline</span><i class="fa-solid fa-underline"></i></li>
                <li class="strikethrough"><span>strikethrough</span><i class="fa-solid fa-strikethrough"></i></li>
                <li class="toggleBtn"><span>Toggle List</span><i class="fa-solid fa-list-ul"></i></li>
                <li class="add_image"><span>Add Image</span><i class="fa-solid fa-image"></i></li>
            </ul>`;
};



// DELETE NOTE
const deleteNote = () => {
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });
};

