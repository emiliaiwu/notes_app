'use strict';


// ELEMENTS AND VARIABLES
const cardColorsContainer = document.querySelector('.add_colors');
const addColorBtn = document.querySelector('.add_color');
const noteColors = cardColorsContainer.querySelectorAll('.note_color');
const noteContainer = document.querySelector('.notes');
let color;
let i = 0;


// ADD COLORS
addColorBtn.addEventListener("click", () => {
    noteColors.forEach((noteColor, i) => {
        setTimeout(function () {
            noteColor.style.transform = 'translate(0px)';
            noteColor.style.display = 'block';
        }, 80 * i);

    
    })
});

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach((note) => addNote(note));
    
}

// ADD NEW NOTE
function addNewNote(){
    noteColors.forEach((noteColor) => {
        noteColor.addEventListener('click', () => {
            color = noteColor.style.backgroundColor;
           

            // // ADD NOTE
            // function addNote(text = ''){
            //     const note = document.createElement('div');
            //     note.classList.add('note', 'addNote');
            //     note.innerHTML = `
            //         <div class="main ${text ? '' : 'hidden'}"></div>
            //         <textarea class="textarea ${text ? 'hidden' : ''}"></textarea>
            //         <div class="close">
            //             <div class="date">Today</div>
            //             <div class="edit_delete">
            //                 <div class="edit"><i class="fa-solid fa-pen"></i></div>
            //                 <div class="delete"><i class="fa-solid fa-trash-can"></i></div> 
            //             </div>
            //         </div>
            //         <ul class="open">
            //             <li class="bold"><span>Bold</span><i class="fa-solid fa-bold"></i></li>
            //             <li class="italic"><span>Italic</span><i class="fa-solid fa-italic"></i></li>
            //             <li class="underline"><span>Underline</span><i class="fa-solid fa-underline"></i></li>
            //             <li class="strikethrough"><span>strikethrough</span><i class="fa-solid fa-strikethrough"></i></li>
            //             <li class="toggleBtn"><span>Toggle List</span><i class="fa-solid fa-list-ul"></i></li>
            //             <li class="add_image"><span>Add Image</span><i class="fa-solid fa-image"></i></li>
            //         </ul>`;
            //     // note.style.backgroundColor = color;
            //     noteContainer.prepend(note);

            //     const main = note.querySelector('.main');
            //     const textArea = note.querySelector('textarea');
            //     const close = note.querySelector('.close');
            //     const open = note.querySelector('.open');
            //     const bold = note.querySelector('.bold');

            //     textArea.value = text;
            //     main.innerHTML = text;


            //     // DELETE NOTE
            //     const deleteBtn = note.querySelector('.delete');				
            //     deleteBtn.addEventListener('click', () => {
            //         note.remove();
            //         updateLS();
            //     });

            //     note.addEventListener('mouseleave', (event) => {
            //         main.classList.remove('hidden');
            //         textArea.classList.add('hidden');
            //         close.style.display = 'flex';
            //         open.style.display = 'none';
                   
            //     });
            //       note.addEventListener('click', (event) => {
            //         main.classList.add('hidden');
            //         textArea.classList.remove('hidden');
            //         close.style.display = 'none';
            //           open.style.display = 'flex';     
            //     });
            //     // EDIT NOTE
            //     const editBtn = note.querySelector('.edit');
            //     editBtn.addEventListener('click', () => {
            //         main.classList.add('hidden');
            //         textArea.classList.remove('hidden');
            //         close.style.display = 'none';
            //         open.style.display = 'flex';    
            //     });
            //     // TEXTAREA INPUT
            //     textArea.addEventListener("input", (e) => {
            //         const { value } = e.target;
            //         main.innerHTML = value;
            //         updateLS();
            //     })
            // }  
            addNote();
          
            // console.log(i);
           
        });
    });
};
addNewNote();



// ADD NOTE
function addNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note', 'addNote');
    note.id = i;
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
    const bold = note.querySelector('.bold');
    let siblings = Array.from(note.parentElement.children);

    // console.log(children);

    // const siblings = children.

    textArea.value = text;
    main.innerHTML = text;


    // DELETE NOTE
    const deleteBtn = note.querySelector('.delete');				
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });

    // note.addEventListener('mouseleave', (event) => {
    //     main.classList.remove('hidden');
    //     textArea.classList.add('hidden');
    //     close.style.display = 'flex';
    //     open.style.display = 'none';
        
    // });

    note.addEventListener('click', function (event){
        event.preventDefault();
        main.classList.add('hidden');
        textArea.classList.remove('hidden');
        close.style.display = 'none';
        open.style.display = 'flex';  

        // const allSiblings = Array.from(siblings).filter(
        //     (siblings) => siblings.id !== note.id
        // );

        var siblings = element.parentNode.children;
				for (var i = 0; i < siblings.length; i++) {
					siblings[i].removeEventListener('click', this);
				}
        

        console.log(event.target);
    });

    

    // if (note.click()) {
    //     allSiblings.forEach((sib) => {
    //         main.classList.remove('hidden');
    //         textArea.classList.add('hidden');
    //         close.style.display = 'flex';
    //         open.style.display = 'none';
    //     });
    // }
    
    // EDIT NOTE
    const editBtn = note.querySelector('.edit');
    editBtn.addEventListener('click', () => {
        main.classList.add('hidden');
        textArea.classList.remove('hidden');
        close.style.display = 'none';
        open.style.display = 'flex';    
    });
    // TEXTAREA INPUT
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = value;
        updateLS();
    })

    i++;
    console.log(note.id);
}  
            // addNote();

 
 


function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(noteText => notes.push(noteText.value));
    localStorage.setItem('notes', JSON.stringify(notes))
}

