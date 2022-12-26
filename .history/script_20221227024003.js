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
            noteColor.style.opacity = '1';
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
    let siblings = note.parentElement.children;

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
        // main.classList.remove('hidden');
        // textArea.classList.add('hidden');
        // close.style.display = 'flex';
        // open.style.display = 'none';
        
    // });
    

    // note.addEventListener('click', function (event){
    //     event.preventDefault();

    //     // let noteId = note.getAttribute('id');
        
        

    //     const allSiblings = Array.from(note.parentNode.children).filter(
    //         (sibling) => sibling.id !== note.id
    //     );


    //     if (note.parentNode.contains(event.target)) {
            // main.classList.add('hidden');
            // textArea.classList.remove('hidden');
            // close.style.display = 'none';
            // open.style.display = 'flex';    
    //     } else {
    //         // note.removeEventListener('click', this);
    //         main.classList.remove('hidden');
    //         textArea.classList.add('hidden');
    //         close.style.display = 'flex';
    //         open.style.display = 'none';

    //     }
        
        
    //     // console.log(event.target);
        
    // });


    // note.addEventListener('click', function (event) {
	// 	let element = document.getElementById('1');
    //     if (element.contains(event.target)) {
    //         main.classList.add('hidden');
    //         textArea.classList.remove('hidden');
    //         close.style.display = 'none';
    //         open.style.display = 'flex';      


	// 			console.log(
	// 				'The event was triggered on an element inside the note element'
	// 			);
    //     } else {
    //         main.classList.remove('hidden');
    //         textArea.classList.add('hidden');
    //         close.style.display = 'flex';
    //         open.style.display = 'none';

	// 				console.log(
	// 					'The event was not triggered on an element inside the note element'
	// 				);
	// 			}
	// 	});

    

    // if (note.click()) {
    //     allSiblings.forEach((sib) => {
            // main.classList.remove('hidden');
            // textArea.classList.add('hidden');
            // close.style.display = 'flex';
            // open.style.display = 'none';
    //     });
    // }
    

        note.addEventListener('click', function (event) {
					var clickedElement = event.target.parentElement;
					var elementId = clickedElement.id;
					console.log(note.id);

					main.classList.add('hidden');
                    textArea.classList.remove('hidden');
                    close.style.display = 'none';
            open.style.display = 'flex';

            const allSiblings = Array.from(note.parentNode.children).filter(
                (sibling) => sibling.id !== elementId
            );

            all

            note.removeEventListener('click', this);
            

		});

    


    // noteContainer.forEach(function(note) {
    // note.addEventListener("click", function () {
            
    //     function getSiblings(element) {
    //         let siblings = [];
    //         let parent = note.parentNode;
    //         let children = parent.children;
    //         for (let i = 0; i < children.length; i++) {
    //             if (children[i] !== note) {
    //                 siblings.push(children[i]);
    //             }
    //         }
    //         return siblings;
    //     }
    //         // Display the box
    //         main.classList.add('hidden');
    //         textArea.classList.remove('hidden');
    //         close.style.display = 'none';
    //         open.style.display = 'flex'; 
    //         getSiblings();

    //         // Hide the siblings of the box
    //         console.log(Array.from(siblings))
    //         Array.from(siblings).forEach(function(sibling) {
    //         if (sibling !== note) {
    //             main.classList.remove('hidden');
    //             textArea.classList.add('hidden');
    //             close.style.display = 'flex';
    //             open.style.display = 'none';
    //             }
    //             console.log(sibling)
    //             console.log(note)
    //         });
    // });
    // });





    
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

