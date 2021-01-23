export default function initModalVideo(){
   let addClassModal = document.querySelector('.modal-yt'); 

   function openModal(){
      let video = document.querySelector('.video img');
      function modalEvent(){
         addClassModal.classList.add('modal-visible');
      }
      video.addEventListener('click', modalEvent);
   }

   openModal();

   // FECHAR O MODAL

   function closeModal(){
      let buttonClose = document.querySelector('.close-modal i'); 
      function closeEvent(){
         addClassModal.classList.remove('modal-visible');
         stopVideo();
      }
      buttonClose.addEventListener('click', closeEvent)
      addClassModal.addEventListener('click', closeEvent)

   }

   closeModal(); 

   // PAUSAR O VIDEO QUANDO FECHA O MODAL

   function stopVideo(){
      let iframe = document.querySelector('.modal-yt iframe'); 
      let takeUrl = iframe.getAttribute('src');
      let linkVideo = takeUrl + '?autoplay=0;mute=0;?controls=1&amp;;stop';
      iframe.setAttribute('src', linkVideo);
   }
}
