 const navbarEl=document.querySelector(".navbar");

 const bottomConatinerEl=document.querySelector(".bottom-container");
 console.log(navbarEl.offsetHeight);
 console.log(bottomConatinerEl.offsetTop);
 window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomConatinerEl.offsetTop-navbarEl.offsetHeight-40 ){
      navbarEl.classList.add("active");
    }else{
      navbarEl.classList.remove("active");
    }
    
 }); 
 