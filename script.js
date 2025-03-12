
function menu() {
  let button_nav = document.querySelector('.button_nav');
  button_nav.classList.toggle('active');
  let burger = document.querySelector('.burger');
  burger.classList.toggle('active');

  if(burger.classList.contains('active')){
    navbar.style.background = ' rgb(36, 66, 34)';
    document.body.classList.toggle("no-scroll");
  }else {
    if (window.scrollY > 70) {
      navbar.style.background = ' rgb(36, 66, 34)';
    }else{
      navbar.style.backgroundColor = 'transparent';
    }
    document.body.classList.remove("no-scroll");
  }
} 




//background Nav quand ont scroll

 let navbar = document.querySelector("nav")
 function changeNavbarBackground() {
   if (window.scrollY > 70) { 
       navbar.style.background = 'rgb(36, 66, 34)';
      
   } else {
       navbar.style.backgroundColor = 'transparent';
   }
 }

 window.addEventListener('scroll', changeNavbarBackground);
