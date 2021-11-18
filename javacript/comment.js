let noteList=document.querySelector("#note-list")


eventlistener();
function eventlistener (params) {
    document.querySelector("#form-content").addEventListener("submit" , newNote)
    document.querySelector('#note-list').addEventListener('click', removeNote);
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



    
    addNoteLocalstoreage(note);
}
//function remove list
function removeNote (e) {
    
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove();
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
   console.log(notes);
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

