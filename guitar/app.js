

    const tabs = document.querySelectorAll(".tab");
    const dropdowns = document.querySelectorAll(".dropdown");
    const arrows = document.querySelectorAll(".arrow");
    tabs.forEach((tab,i)=>{tab.onclick = function(){
        
        
        if(!dropdowns[i].classList.value.includes("open")){
            dropdowns.forEach(dropdown=>{dropdown.classList.remove("open")})
            dropdowns[i].classList.add("open");
            arrows.forEach(arrow=>{arrow.classList.remove("rotate")})
            arrows[i].classList.add("rotate");
        }else{
            dropdowns[i].classList.remove("open");
            arrows[i].classList.remove("rotate");
    
        }

        
    }})
   const sm_nav = document.querySelector(".sm-nav");
   const slide_in = document.querySelector(".nav");
   sm_nav.onclick = function(){
       if(!slide_in.classList.value.includes("slide-in")){
           slide_in.classList.add("slide-in")
       }else{

           slide_in.classList.remove("slide-in");
       }
   }


