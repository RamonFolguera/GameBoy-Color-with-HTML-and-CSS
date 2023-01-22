

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



/*multiplicamos las columnas y filas con el tamaño de cada cuadrado*/


const loadGame = () => {
    board.height = rows * blockSize;
    board.width = cols * blockSize;

    update();

}

/* para actualizar el tablero */

const update = () => {
    // dibujamos el tablero entero fillRect (esquina top left, esquina bottom right)
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    // dibujamos la serpiente
    context.fillStyle = 'green';
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // dibujamos la comida
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
}


// creamos una funcion para que nos coloque la comida randomly en el tablero
// const randomFoodLocation () => {
//     foodX = Math.floor(Math.random() * cols) * blockSize; //el metodo .floor nos redondea el numero que obtenemos randomly para que sea entero
//     foodY = Math.floor(Math.random() * rows) * blockSize;
// }

loadGame();
