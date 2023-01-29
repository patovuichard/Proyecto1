// variables globales:
let startBtnDOM = document.querySelector("#start-btn");
let startGameDOM = document.querySelector("#inicio");
let canvas = document.querySelector("#mi-canvas");
let ctx = canvas.getContext("2d");
let resetBtnDOM = document.querySelector("#restart-btn");
let resetGameDOM = document.querySelector("#reinicio")
let pauseDOM = document.querySelector("#pause-btn");



// Metodos;
const Inicio = () => {
    // elijo que pantalla necesito
    startGameDOM.style.display = "none";
    resetGameDOM.style.display  = "none";
    canvas.style.display = "block";
    pauseDOM.style.display = "block";

    // creo objeto de la clase game
    game = new Game();

    // inicio el juego, invocando el metodo de la clase
    game.gameLoop();
}

const movimientoSurfer = (event) => {
    if (event.code === "ArrowUp" && (game.surfer.y + game.surfer.h) > 185) {
        game.surfer.arribaSurfer();
    } else if (event.code === "ArrowDown" && (game.surfer.y + game.surfer.h) < canvas.height) {
        game.surfer.abajoSurfer();
    } else if (event.code === "ArrowLeft" && game.surfer.x > 0) {
        game.surfer.izquierdaSurfer();
    } else if (event.code === "ArrowRight" && (game.surfer.x + game.surfer.w) < canvas.width) {
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