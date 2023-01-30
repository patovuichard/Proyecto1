// variables globales:
const startBtnDOM = document.querySelector("#start-btn");
const startGameDOM = document.querySelector("#inicio");
const gameDOM = document.querySelector("#juego");
const canvas = document.querySelector("#mi-canvas");
let ctx = canvas.getContext("2d");
const resetBtnDOM = document.querySelector("#restart-btn");
const resetGameDOM = document.querySelector("#reinicio")
const pauseDOM = document.querySelector("#pause-btn");



// Metodos;
const Inicio = () => {
    // elijo que pantalla necesito
    startGameDOM.style.display = "none";
    resetGameDOM.style.display  = "none";
    gameDOM.style.display = "flex";

    // creo objeto de la clase game
    game = new Game();

    // inicio el juego, invocando el metodo de la clase
    game.gameLoop();
}

const movimientoSurfer = (event) => {
    if (event.code === "ArrowUp" && (game.surfer.y + game.surfer.h) > 185) {
        game.surfer.posicion = "up";
        game.surfer.arribaSurfer();
    } else if (event.code === "ArrowDown" && (game.surfer.y + game.surfer.h) < canvas.height) {
        game.surfer.posicion = "down";
        game.surfer.abajoSurfer();
    } else if (event.code === "ArrowLeft" && game.surfer.x > 0) {
        game.surfer.posicion = "left";
        game.surfer.izquierdaSurfer();
    } else if (event.code === "ArrowRight" && (game.surfer.x + game.surfer.w) < canvas.width) {
        game.surfer.posicion = "right";
        game.surfer.derechaSurfer();
    }
}



// ActiveListeners:
startBtnDOM.addEventListener("click", Inicio)
window.addEventListener("keydown", movimientoSurfer)
resetBtnDOM.addEventListener("click", () => {
    if (game.juegoTerminado === true) {
        game.juegoTerminado = false;
        game.estaJugando = false;
        // startBtnDOM.style.display = "block";
        // startGameDOM.style.display = "block";
        Inicio();
    }
})
pauseDOM.addEventListener("click", () => {
    if (game.estaJugando === true) {
        game.estaJugando = false;
    } else {
        game.estaJugando = true;
        game.gameLoop();
    }
})