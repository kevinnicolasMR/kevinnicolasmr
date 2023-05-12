console.log('El archivo esta enlacado')


const botonOcultar = document.getElementById('botonOcultar');
const botonMostrar = document.getElementById('botonMostrar');
const columna = document.querySelector('.divNew');
const newDiv22 = document.getElementById('buttonDivNew2');



botonOcultar.addEventListener('click', () => {
    columna.classList.add('hiddenSeccionDiv');
    newDiv22.classList.add('divNew2WithFull');
    botonOcultar.classList.add('hiddenSeccionDiv');
    botonMostrar.classList.add('buttonOnJS');
    console.log('boton de ocultar clickeado');
  });
  
  botonMostrar.addEventListener('click',()=>{
    columna.classList.remove('hiddenSeccionDiv');
    newDiv22.classList.remove('divNew2WithFull');
    botonOcultar.classList.remove('hiddenSeccionDiv');
    botonMostrar.classList.remove('buttonOnJS');
    console.log('boton de prendido clickeado')
  })

/* Button On Mobile Head AboutMe */ 

const faSliders = document.querySelector(".fa-sliders");
const menuMobileOptions = document.querySelector(".menuMobileOptions")

faSliders.addEventListener('click',()=>{
  if(menuMobileOptions.classList.contains("menuMobileOn")){
    menuMobileOptions.classList.remove("menuMobileOn")
    
  }else{
    menuMobileOptions.classList.add("menuMobileOn")
  }
})

