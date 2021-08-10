const piano = document.querySelector('.piano');
const audios = document.querySelectorAll('audio');
const buttonNotes = document.querySelector('.btn.btn-notes')
const buttonLetters = document.querySelector('.btn.btn-letters')
const fullScreen = document.querySelector('.fullscreen')
const main = document.querySelector('.main')
const pianoKeys = document.querySelectorAll('.piano-key');


let keyFlag = false;
let mouseFlag = false;


window.addEventListener('keydown', (event) => {
if(keyFlag === false){
    for(let i = 0; i < pianoKeys.length; i++){
        if(pianoKeys[i].classList.contains('piano-key-active')){
            pianoKeys[i].classList.remove('piano-key-active');
      }
    };

    for(let i = 0; i < audios.length; i++){
        if(event.keyCode === +audios[i].dataset.key){
            playAudio(audios[i]);
          
           for(let i = 0; i < pianoKeys.length; i++){
               if(+pianoKeys[i].dataset.key === event.keyCode){
                  pianoKeys[i].classList.add('piano-key-active');
                }
              }
        }
     }
  event.repeat = 'false'; 
  keyFlag = true;
  }
});


window.addEventListener('keyup', (event) => {
  keyFlag = false;
  for(let i = 0; i < pianoKeys.length; i++){

    if(+pianoKeys[i].dataset.key === event.keyCode){
      pianoKeys[i].classList.remove('piano-key-active');
     }
   }
});


piano.addEventListener('mousedown', (event) => {
    mouseFlag = true;
 
  for(let i = 0; i < pianoKeys.length; i++){
    if(pianoKeys[i].classList.contains('piano-key-active')){
        pianoKeys[i].classList.remove('piano-key-active');
    }
  }


  for(let i = 0; i < audios.length; i++){
    if(event.target.dataset.key === audios[i].dataset.key){
      event.target.classList.add('piano-key-active');
      event.target.classList.add('piano-key-active-pseudo');
      playAudio(audios[i]);
    }
  }

});


piano.addEventListener('mouseup', (event) => {
    mouseFlag = false;
    event.target.classList.remove('piano-key-active');
    event.target.classList.remove('piano-key-active-pseudo');
    
});


piano.addEventListener('mouseover', (event) => {
  if(mouseFlag === false) return;
  if(mouseFlag === true) {
     for(let i = 0; i < pianoKeys.length; i++){
          if(pianoKeys[i].classList.contains('piano-key-active')){
             pianoKeys[i].classList.remove('piano-key-active');
             pianoKeys[i].classList.remove('piano-key-active-pseudo');
          }
        }

    for(let i = 0; i < audios.length; i++){
      if(event.target.dataset.key === audios[i].dataset.key){
            event.target.classList.add('piano-key-active');
            event.target.classList.add('piano-key-active-pseudo');
            playAudio(audios[i]);
          }
        }
   }
});


function playAudio(audio) {
    audio.currentTime = 0;// запускает проигрывание с начала трека
    audio.play(); 
};


buttonLetters.addEventListener('click', (e) => {
    buttonLetters.classList.add('btn-active');
    buttonNotes.classList.remove('btn-active');

    for(let i = 0; i < pianoKeys.length; i++){
      pianoKeys[i].classList.add('piano-key-letter'); 
    }
  });


buttonNotes.addEventListener('click', (e) => {
    if(!buttonNotes.classList.contains('btn-active')){
         buttonNotes.classList.add('btn-active');
         buttonLetters.classList.remove('btn-active'); 

              for(let i = 0; i < pianoKeys.length; i++){
                  pianoKeys[i].classList.remove('piano-key-letter');
              }
    }  
});

 
fullScreen.addEventListener('click', (e) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
});


main.addEventListener('mouseup', (e)=>{
  if(e.target.classList.contains('main')){
    mouseFlag = false;
      for(let i = 0; i < pianoKeys.length; i++){
      pianoKeys[i].classList.remove('piano-key-active');
      pianoKeys[i].classList.remove('piano-key-active-pseudo');
      }
  }
});