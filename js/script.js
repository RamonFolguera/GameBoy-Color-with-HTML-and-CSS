/* 

Tareas para hacer la consola interactiva:

1. Accionar botones al clickar encima.
2. Encender la pantalla al apretar START y que aparezca la pantalla de inicio:

<video width="160" height="154" controls src="./video/Game Boy Advance SP Intro HD (60fps).mp4" type="video/mp4"></video>



3. Si clickeas un botón que no sea START antes de encender la pantalla... que salga un alert diciendo que tienes que apretar START primero para empezar el juego

4. Introducir un juego básico de la serpiente.

5. Que el juego aparezca después de la presentación de inicio:

    con un setTimeout y el metodo remove() borro el video cuando se acaba y empieza el juego a los 6s.

Funciones:

- startConsole() - se enciende la consola y empieza el video de inicio.
- timeout() - Activa el setTimeout con la función removeVideo()
- removeVideo() - elimina del DOM el elemento <video> que se crea al clickar START.
- loadGame() - activa el juego.    
- update()  - crea un nuevo tablero en el canvas cada vez que se cumple una condición (cada vez que se cambian las coordenadas de la serpiente o se enciende el juego dando el efecto de movimiento continuo de la serpiente)
- changeDirection() - cambia la dirección de la cabeza de la serpiente.
- randomFoodLocation() - coloca el cuadrado rojo en unas coordenadas aleatorias cada vez que el juego comienza o la serpiente come.
- delayLoadGame() - retrasa el inicio del juego 6s para empezar después del video de inicio.


*/


// Coger elementos que necesitamos del DOM y almacenarlos en variables:
const displayContainer = document.querySelector('.display-container');
const startBtn= document.querySelector('#start-button');
//Creamos el <video> element
const videoElement = document.createElement('video');
videoElement.setAttribute('width','300');
videoElement.setAttribute('height','200');
videoElement.setAttribute('src','./video/Gameboy Color intro.mp4');
videoElement.setAttribute('type','video/mp4');


//Encendido del GameBoy
//Con appendchild colocamos el elemento video dentro del div con class display-container.
//He añadido un cambio de background para igualar el color de fondo al del video y el juego.
//cpn .play() encendemos el video.

const startConsole = () => {
    const videoDiv = displayContainer.appendChild(videoElement);
    displayContainer.style.background = "white";
    videoElement.play(); 
    
};

const timeout = () => {
    setTimeout(removeVideo, 6000);
}
    

const removeVideo = () => {
    document.querySelector('video').remove();
}


//SCRIPT DEL SNAKE

/* Creamos el grid. Creamos las variables que necesitaremos y adjuntamos elementos del DOM.

1. blockSize sera el tamaño de cada cuadrado del grid del tablero
2. rows y cols... el número de columnas y filas que tiene nuestro tablero
3. context para dibujar en el tablero y configurarlo a 2 dimensiones.


usamos const o let dependiendo de si la variable se actualizará más tarde o no
*/

const blockSize = 25;
const rows = 20;
const cols = 20;
let board = document.getElementById('display-container');
let context = board.getContext('2d');


/* creamos la cabeza de la serpiente */

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

/* creamos la comida de la serpiente*/
let foodX = blockSize * 10
let foodY = blockSize * 10

/* velicidad serpiente */
let speedX = 0;
let speedY = 0;


//game over

let gameOver = false;

/* cuerpo de la serpiente */

let snakeBody = []


/*multiplicamos las columnas y filas con el tamaño de cada cuadrado*/


const loadGame = () => {
    board.height = rows * blockSize;
    board.width = cols * blockSize;

    randomFoodLocation();
    document.addEventListener('keyup', changeDirection);
    // update();
    setInterval(update, 1000/10);
    //cada 100 milisegundos actualiza el tablero (context). Por cada movimiento se actualiza y crea tablero nuevo

}

/* para actualizar el tablero */

const update = () => {

    if (gameOver) {
    
        return;
    }


    // dibujamos el tablero entero fillRect (esquina top left, esquina bottom right)
    context.fillStyle = "white";
    context.fillRect(0, 0, board.width, board.height);

    // dibujamos la comida
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // para que la serpiente crezca aplicamos el método push que añade un elemento index al final del array

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        randomFoodLocation();
    }

    //Aquí hacemos que la serpiente se mueva desde el cuadradito de la cola cuadrado a cuadrado hasta la cabeza
    for(let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody [i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    // dibujamos la serpiente
    context.fillStyle = 'green';
    snakeX += speedX * blockSize; // para que se mueva cada unidad de cuadrado de 25
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Cada vez que la serpiente toca la comida se activa el loop y añade al array del snakeBody y al método fillRect.
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    //Reglas de Game over
    // si toda cualquier borde del tablero = gameover = true
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert('Game Over. Actualiza la página y haz click en START para jugar otra vez.');
    }

    // si se come a sí misma = gameover = true    
    for (let i = 0; i < snakeBody.length; i++)
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert('Game Over. Actualiza la página y haz click en START para jugar otra vez.');
        }

}


// creamos funcion para cambiar la direccion de la serpiente
// e.code == 'ArrowUp' && speedY != 1  La parte primera es para manejar la serpiente con las flechas del teclado. La segunda es para que la serpiente no pueda volver por el mismo camino pues se comeria a si mismo y no tendria sentido.

const changeDirection = (e) => {
    if (e.code == 'ArrowUp' && speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == 'ArrowDown' && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } 
    else if (e.code == 'ArrowLeft' && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == 'ArrowRight' && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
}

// Función para los botones de dirección de la consola añadiendo el onclick en el html

const upBtn = () => {
    if (speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
}

const downBtn = () => {
    if (speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
}

const leftBtn = () => {
    if (speedY != 1) {
        speedX = -1;
        speedY = 0;
    }
}

const rightBtn = () => {
    if (speedY != -1) {
        speedX = 1;
        speedY = 0;
    }
}




// creamos una funcion para que nos coloque la comida randomly en el tablero
const randomFoodLocation = () => {
    foodX = Math.floor(Math.random() * cols) * blockSize; 
    foodY = Math.floor(Math.random() * rows) * blockSize;
    
    //el metodo .floor nos redondea el numero que obtenemos con math.random (que es entre 0-1 pudiendo dar decimales) para que sea entero y al multiplicarlo con las columnas y filas obtenemos un numero de 0-19  (nuestro grid)
    
}

//aquí llamamos a la función para que cargue el juego.

const delayLoadGame = () => {
    setTimeout(loadGame, 6000);
}





