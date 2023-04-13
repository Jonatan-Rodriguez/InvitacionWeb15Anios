const seccionesPaginas = new fullpage('#fullpage',{

  navigation: true,
  anchors: ['inicio', 'infoEvento', 'galeria','regalos','confirmacion'],
  navigationTooltips: ['Inicio', 'Donde y cuando', 'Galeria de fotos','Regalos','Confirmacion'],
  sectionsColor : ['#000', '#ffd166', '#ef476f','#06d6a0','#118ab2','#073b4c'],
  verticalCentered: true,
});

//Cuenta regresiva
const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays} : ${t.remainHours} : ${t.remainMinutes} : ${t.remainSeconds}`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Aug 26 2023 21:00:00 GMT-0300', 'clock', '¡Feliz cumpleaños!');

//Slider de fotos
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

//corremos la ultima foto al primer lugar
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft="-200%";
  slider.style.transition = "all 0.5s";

  setTimeout(function(){
    slider.style.transition= "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};

function prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft="0";
  slider.style.transition = "all 0.5s";

  setTimeout(function(){
    slider.style.transition= "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  next();
});

btnLeft.addEventListener('click', function(){
  prev();
});

//copy paste
let inputCbu = document.getElementById(`inputCbu`);
let btnCbu = document.getElementById(`btnCbu`);
let inputAlias = document.getElementById(`inputAlias`);
let btnAlias = document.getElementById(`btnAlias`); 
let noti = document.getElementById(`noti`);
let notificacion = document.getElementById(`notificacion`);
  
btnCbu.addEventListener(`click`, ()=>{
    inputCbu.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    
    setTimeout(()=>{
        noti.classList.add(`noti-active`);
        notificacion.classList.add(`notificacion-active`);
    },500);
  
    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
  },3400);
});
  
btnAlias.addEventListener(`click`, ()=>{
    inputAlias.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    
    setTimeout(()=>{
      noti.classList.add(`noti-active`);
      notificacion.classList.add(`notificacion-active`);
    },500);

    setTimeout(()=>{
      noti.classList.remove(`noti-active`);
      notificacion.classList.remove(`notificacion-active`);
    },3400);
});

//Formulario de confirmacion
const send = document.getElementById('send');
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const warning = document.getElementById('warning');
const warning2 = document.getElementById('warning2');


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  warning.style.display='none';/* 
  warning2.style.display='none'; */

  let nombre = document.getElementById('nombre').value;

  /* if(nombre.length <= 2){
    warning2.style.display='flex';
  } */
  
  let numero= 5491123901151;
  let opcion;

  for(let i = 0 ; i < form.opcion.length ; i++){
    if(form.opcion[i].checked == true){
      opcion = i;
    }
  }

  switch (opcion){
    case 0:
            var win= window.open(`https://wa.me/${numero}?text=Hola%20,si%20puedo%20asistir%20:)%20soy%20${nombre},%20gracias%20por%20invitarme
  `,'_blank');
    break;

    case 1: 
            var win= window.open(`https://wa.me/${numero}?text=Hola%20,perdon%20no%20puedo%20asistir%20:(%20soy%20${nombre},%20gracias%20por%20invitarme
  `,'_blank');
    break;

    default: warning.style.display='flex';
    break;
  }
});

