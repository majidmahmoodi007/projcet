let noteList=document.querySelector("#note-list")
eventlistener();
function eventlistener (params) {
    // form sbmit
    document.querySelector("#form-content").addEventListener("submit" , newNote);
    //remove note
    document.querySelector('#note-list').addEventListener('click', removeNote);
    //get data from local storage on loaded 
    document.addEventListener('DOMContentLoaded' ,localStorageonLoaded)
}
// 
function newNote (e) {
    e.preventDefault()
    //get value for list
    let note=document.querySelector("#note").value
    //create li tag
    let li =document.createElement('li')
    //add value in li tag 
    li.appendChild(document.createTextNode(note))
    //add li in notelist
    noteList.appendChild(li);
    //create removebutton tag 
    let removebtn=document.createElement("a")
    removebtn.textContent="X"
    removebtn.classList='remove-note'
    //add removebtn 
    li.appendChild(removebtn);
    this.reset()
    addNoteLocalstoreage(note);
    alert('Your comment was added successfully')
}
    //function remove list
function removeNote (e) {
    
 if (e.target.classList.contains('remove-note')) {
     e.target.parentElement.remove();
     //also  remove note for local storage
     removeNoteLocalStorage(e.target.parentElement.textContent)   
    }    
}
// add note in local storage
function addNoteLocalstoreage(note) {
    //get notes from local storage
   const notes=getNoteFromLocalStorage() 
    //add new notes to the  notes array
   notes.push(note)
    //add new notes to the local storage
   localStorage.setItem('notes', JSON.stringify(notes))
}
    // grt note form local storage
function getNoteFromLocalStorage() {
    let notes;
    let getfromls=localStorage.getItem('notes')
    //if not exist  return {}
    if (getfromls === null) {
        notes = []        
    }
    //if  exist convert to the array
    else {
        notes=JSON.parse(getfromls)
    }
    return notes   
}
//get data from local storage on loaded 
function localStorageonLoaded() {
    const notes=getNoteFromLocalStorage();
    notes.forEach(function(note){
    let li =document.createElement('li')
    //add value in li tag 
    li.appendChild(document.createTextNode(note))
    //add li in notelist
    noteList.appendChild(li);
    //create removebutton tag 
    let removebtn=document.createElement("a")
    removebtn.textContent="X"
    removebtn.classList='remove-note'
    //add removebtn 
    li.appendChild(removebtn);
    });
}
    //remove note from local storage
function removeNoteLocalStorage(noteContent) {
    //delete x from  the  content
    let notedelete = noteContent.substring(0 , noteContent.length -1)
    //get notes from local storage 
    const notesfromls=getNoteFromLocalStorage()
    
    notesfromls.forEach(function (note , index) {
        if (note === notedelete) {
            notesfromls.splice(index , 1)
            
        }
    });
    //set new note to the local storage
    localStorage.setItem('notes' ,JSON.stringify(notesfromls))
}

