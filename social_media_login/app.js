window.onload = function(){

   let logIn = document.getElementById("log-in");
    logIn.addEventListener("click", ()=>{
       let validation = document.querySelectorAll(".validation");
       for (let i = 0 ; i < validation.length; i++){
           validation[i].style.display="block"
       }
    })
    //Registration event listeners
    let fName = document.getElementById('firstName');
    let lname = document.getElementById('lastName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    fName.addEventListener('focus', (event)=>{
    if(event.target.value == 'First Name'){
            event.target.value ='';
        }
    })
    fName.addEventListener('blur', (event)=>{
        let text = event.target.value;
        if(text==''){
            text='First Name'
        }else if(text.length>0 && text.trim().length==0){
            text='First Name'
        } 
        event.target.value = text;
    })

    lname.addEventListener('focus', (event)=>{
        if(event.target.value == 'Last Name'){
            event.target.value ='';
        }
    })
    lname.addEventListener('blur', (event)=>{
        let text = event.target.value;
        if(text==''){
            text='Last Name'
        }else if(text.length>0 && text.trim().length==0){
            text='Last Name'
        } 
        event.target.value = text;
    })
    email.addEventListener('focus', (event)=>{
        if(event.target.value == 'Email'){
            event.target.value ='';
        }
    })
    email.addEventListener('blur', (event)=>{
        let text = event.target.value;
        if(text==''){
            text='Email'
        }else if(text.length>0 && text.trim().length==0){
            text='Email'
        } 
        event.target.value = text;
    })
    password.addEventListener('focus', (event)=>{
        if(event.target.value == 'Password'){
            event.target.value ='';
        }
    })
    password.addEventListener('blur', (event)=>{
        let text = event.target.value;
        if(text==''){
            text='Password'
        }else if(text.length>0 && text.trim().length==0){
            text='Password'
        } 
        event.target.value = text;
    })


}