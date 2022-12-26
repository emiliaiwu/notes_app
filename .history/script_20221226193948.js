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


    note.addEventListener('click', function (event) {
		let element = document.getElementById('1');
        if (element.contains(event.target)) {
            main.classList.add('hidden');
            textArea.classList.remove('hidden');
            close.style.display = 'none';
            open.style.display = 'flex';      


				console.log(
					'The event was triggered on an element inside the note element'
				);
        } else {
            main.classList.remove('hidden');
            textArea.classList.add('hidden');
            close.style.display = 'flex';
            open.style.display = 'none';

					console.log(
						'The event was not triggered on an element inside the note element'
					);
				}
		});

    

    // if (note.click()) {
    //     allSiblings.forEach((sib) => {
            // main.classList.remove('hidden');
            // textArea.classList.add('hidden');
            // close.style.display = 'flex';
            // open.style.display = 'none';
    //     });
    // }


    boxes.forEach(function(box) {
  box.addEventListener("click", function() {
    // Display the box
    box.style.display = "block";

    // Hide the siblings of the box
    let siblings = box.parentNode.children;
    siblings.forEach(function(sibling) {
      if (sibling !== box) {
        sibling.style.display = "none";
      }
    });
  });
});
In this example, the querySelectorAll() method is used to select all elements with the class "box". An event listener is then added to each of these elements that listens for click events. When a click event occurs, the event listener displays the box by setting its display style property to "block", and then hides the siblings of the box by setting their display style property to "none".

To get the siblings of an element, you can use the parentNode property to get the parent element of the element, and then use the children property to get the child elements of the parent element. You can then loop through the child elements and hide any that are not the element that was clicked on.

It's worth noting that the siblings() method is not a standard JavaScript method, so you will need to write your own function to get the siblings of an element if you want to use this method.





    
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

