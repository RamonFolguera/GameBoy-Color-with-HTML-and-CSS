

/* Creamos el grid. Creamos las variables que necesitaremos y adjuntamos elementos del DOM.

1. blockSize sera el tamaño de cada cuadrado del grid del tablero
2. rows y cols... el número de columnas y filas que tiene nuestro tablero
3. context para dibujar en el tablero y configurarlo a 2 dimensiones.


usamos const o let dependiendo de si la variable se actualizará más tarde o no
*/

const blockSize = 25;
const rows = 20;
const cols = 20;
let board = document.querySelector('.display-container');
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
    context.fillStyle = 'black';
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
        alert('Game Over');
    }

    // si se come a sí misma = gameover = true    
    for (let i = 0; i < snakeBody.length; i++)
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert('Game Over');
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



// creamos una funcion para que nos coloque la comida randomly en el tablero
const randomFoodLocation = () => {
    foodX = Math.floor(Math.random() * cols) * blockSize; 
    foodY = Math.floor(Math.random() * rows) * blockSize;
    
    //el metodo .floor nos redondea el numero que obtenemos con math.random (que es entre 0-1 pudiendo dar decimales) para que sea entero y al multiplicarlo con las columnas y filas obtenemos un numero de 0-19  (nuestro grid)
    
}



// loadGame();
