

// Creamos el grid

const blockSize = 25;
const rows = 20;
const cols = 20;
let board = '';
let context = '';



window.onload = function() {
    board = document.getElementById('board');
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d'); //para configurar el tablero

    update();

}

const update = () => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
}

