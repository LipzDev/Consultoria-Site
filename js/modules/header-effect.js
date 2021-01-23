export default function initHeaderEffect(){
   let header = document.querySelector('.header');

   function headerEffect(){
      if(window.scrollY > 105){
         header.classList.add('header-effect');
      } else { 
         header.classList.remove('header-effect');
      }
   }

   window.addEventListener('scroll', headerEffect);
}