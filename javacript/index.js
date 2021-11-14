
 let button1=document.querySelector('#headerbutton');
 button1.addEventListener('click',mesage);
 function mesage(params) {
     console.log('you click the button')
  
 }

 let formmesage=document.querySelector('#formmessage')
 formmessage.addEventListener('submit',formmessagee)
 function formmessagee(e) {
     e.preventDefault()
     console.log('you sub mit form', e);
     let inputName = document.querySelector('#input-name');
     let inputEmail = document.querySelector('#input-email');
     let inputDescription = document.querySelector('#input-description');
     if (!inputName.value) {
         alert('name  is required, enter a valid name');
     }
     if (!inputEmail.value) {
         alert('email is reqired enter a valid  email')
      
     }
     if (!inputDescription.value) {
         alert('querySelecttor is reqired enter a valid text area ')
     }
        
     if(inputName.value && inputEmail.value && inputDescription.value){
         alert('everything is good');
     }
     let data = {
         inputName :inputName.value,
         inputEmail :inputEmail.value,
         inputDescriptionn:inputDescription.value
     };
     console.log(data);
     // console.log('value',inputName,inputName.value);
  
 }
 let topMenu = document.querySelector('#top-menuh');
   topMenu.addEventListener('click', mesage1)
     function mesage1(params) {
       console.log('you click the s')
     }
     let home=document.querySelector('#home');
         home.addEventListener('click',mesage2)
          function mesage2(params) {
              console.log('you click the home')
      
     }
     
     
  
  
  
 console.log(topMenu)










