const seccionesPaginas = new fullpage('#fullpage',{

  navigation: true,
  anchors: ['inicio', 'infoEvento', 'galeria','regalos','mesa','confirmacion'],
  navigationTooltips: ['Inicio', 'Donde y cuando', 'Galeria de fotos','Regalos','Mesas','Confirmacion'],
  sectionsColor : ['#000', '#ffd166', '#ef476f','#06d6a0','#118ab2','#073b4c'],
  verticalCentered: true,
});

/*
  var seccionesPagina = new fullpage('#fullpage',{
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: true, // Se activa el scroll.
		 fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'productos', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Productos', 'Contacto'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#000', '#c2c2c2', '#000'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
	// ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────
	afterLoad: function(origin, destination){
		 if(destination.anchor == 'contacto'){
			  document.querySelector('.footer').querySelector('h2').style.opacity = 1;
		 }
	}
});
*/

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
const send = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let numero= 5491123901151;
var win= window.open(`https://wa.me/${numero}?text=Hola%20,si!%20confirmo😊%20soy%20${nombre},%20gracias%20por%20invitarme😁
`,'_blank');     
}
send.addEventListener('click', enviarFormulario);