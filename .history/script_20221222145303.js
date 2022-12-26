'use strict';


// ELEMENTS AND VARIABLES
const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
const noteContainer = document.querySelector('.notes');










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
            // ADD NOTE
            const addNote = (text = '') => {
                const note = document.createElement('div');
                note.classList.add('note', 'addNote');
                note.innerHTML = `
                    <div class="main ${text ? '' : 'hidden'}"></div>
                    <textarea class="textarea ${text ? 'hidden' : ''}"></textarea>
                    <div class="close">
                        <div class="date">Today</div>
                        <div class="edit_delete">
                            <div class="edit"><i class="fa-solid fa-pen"></i></div>
                            <div class="delete"><i class="fa-solid fa-trash-can"></i></div> 
                        </div>
                    </div>
                    <ul class="open">
                        <li class="bold"><span>Bold</span><i class="fa-solid fa-bold"></i></li>
                        <li class="italic"><span>Italic</span><i class="fa-solid fa-italic"></i></li>
                        <li class="underline"><span>Underline</span><i class="fa-solid fa-underline"></i></li>
                        <li class="strikethrough"><span>strikethrough</span><i class="fa-solid fa-strikethrough"></i></li>
                        <li class="toggleBtn"><span>Toggle List</span><i class="fa-solid fa-list-ul"></i></li>
                        <li class="add_image"><span>Add Image</span><i class="fa-solid fa-image"></i></li>
                    </ul>`;
                note.style.backgroundColor = color;
                noteContainer.prepend(note);

                const main = note.querySelector('.main');
                const textArea = note.querySelector('textarea');
                const close = note.querySelector('.close');
                const open = note.querySelector('.open');

                textArea.value = text;
                main.value = text;


                // DELETE NOTE
                const deleteBtn = note.querySelector('.delete');				
                deleteBtn.addEventListener('click', () => {
					note.remove();
                });

                note.addEventListener('mouseleave', (event) => {
                    main.classList.remove('hidden');
                    textArea.classList.add('hidden');
                    close.style.display = 'flex';
					open.style.display = 'none';
                });

                  note.addEventListener('click', (event) => {
                    main.classList.add('hidden');
                    textArea.classList.remove('hidden');
                    close.style.display = 'none';
                    open.style.display = 'flex';
                });

                
                // EDIT NOTE
                const editBtn = note.querySelector('.edit');
                editBtn.addEventListener('click', () => {
                    main.classList.add('hidden');
                    textArea.classList.remove('hidden');
                    close.style.display = 'none';
                    open.style.display = 'flex';
                    
                });


                // TEXTAREA INPUT
                tex

               

               



               

            }  
            addNote();
        });
    });
};
addNewNote();


// function onClickOutside(note, cb) {
//   document.addEventListener('click', event => {
//     if (!note.contains(event.target)) cb();
//   });
// };

// onClickOutside('#list', () => console.log('Hi!'));

