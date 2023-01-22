/* 

Tareas para hacer la consola interactiva:

1. Accionar botones al clickar encima.
2. Encender la pantalla al apretar START y que aparezca la pantalla de inicio:

<video width="160" height="154" controls src="./video/Game Boy Advance SP Intro HD (60fps).mp4" type="video/mp4"></video>

Funciones:

- startConsole()

3. Si clickeas un botón que no sea START antes de encender la pantalla... que salga un alert diciendo que tienes que apretar START primero para empezar el juego

4. Introducir un juego.



*/


// Coger elementos que necesitamos del DOM y almacenarlos en variables:



const displayContainer = document.querySelector('.display-container');
const startBtn= document.querySelector('#start-button');

//Creamos el <video> element
const videoElement = document.createElement('video');
videoElement.setAttribute('width','160');
videoElement.setAttribute('height','154');
videoElement.setAttribute('src','./video/Game Boy Advance SP Intro HD (60fps).mp4');
videoElement.setAttribute('type','video/mp4');
console.log(displayContainer)

//añadimos el video al div: display-container




//Encendido del GameBoy

const startConsole = () => {
    const videoDiv = displayContainer.appendChild(videoElement);
    displayContainer.style.background = "#bebebe";
    videoElement.play()    
};

console.log('hello, como estas')