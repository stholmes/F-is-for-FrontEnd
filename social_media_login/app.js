window.onload = function(){

    let inputValidation = (event, defaultValue) =>{
        if(event.target.value ==''){
            event.target.value = defaultValue;
        }
        console.log('validation')
    }
    var logIn = document.getElementById("log-in");
    logIn.addEventListener("click", function(){
       let validation = document.querySelectorAll(".validation");
       for (let i = 0 ; i < validation.length; i++){
           validation[i].style.display="block"
       }
    })
    var fName = document.getElementById('firstName');
    fName.addEventListener("focus", function(event){
        if(fName.value == 'First Name'){
            event.target.value='';
        }
    })
    fName.addEventListener("blur", function(event){
        if(event.target.value==''){
            event.target.value='First Name'
        }
        if(event.target.value.length>0 && event.target.value.trim().length==0){
            event.target.value='First Name'
        } 
    });


}