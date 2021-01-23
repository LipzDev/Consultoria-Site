export default function initMenuMobile(){
   let icon = document.querySelector('.icon');
   let menuMobile = document.querySelector('.menu--mobile');
   let menuMobileList = document.querySelectorAll('.menu--mobile li');

   function openMenu(){
      menuMobile.classList.toggle('ativo');
      icon.classList.toggle('ativo')      
   }
   
   icon.addEventListener('click', openMenu);

   menuMobileList.forEach((e) => {
      e.addEventListener('click', openMenu);
   });
}