// variables globales:
const startBtnDOM = document.querySelector("#start-btn");
const startGameDOM = document.querySelector("#inicio");
const gameDOM = document.querySelector("#juego");
const canvas = document.querySelector("#mi-canvas");
let ctx = canvas.getContext("2d");
const resetBtnDOM = document.querySelector("#restart-btn");
const resetGameDOM = document.querySelector("#reinicio")
const pauseDOM = document.querySelector("#pause-btn");
const songElement = new Audio("./audio/Surfin_Bird.mp3");
const muteSongDOM = document.querySelector(".mute-btn");
const iconSongDOM = document.querySelector("#icon");
const audioStarElement = new Audio("./audio/hell-yeah.mp3");
const audioSharkElement = new Audio("./audio/eating-sound-effect.mp3");
const audioWaveElement = new Audio("./audio/yeah.mp3")

let keyPressedUp = false;
let keyPressedDown = false;
let keyPressedLeft = false;
let keyPressedRight = false;



// Metodos;
const Inicio = () => {
    // elijo que pantalla necesito
    startGameDOM.style.display = "none";
    resetGameDOM.style.display  = "none";
    gameDOM.style.display = "flex";

    // musica para el juego
    songElement.play();
    songElement.volume = 0.05;
    songElement.loop = true;

    // creo objeto de la clase game
    game = new Game();

    // inicio el juego, invocando el metodo de la clase
    game.gameLoop();
}

const movimientoSurfer = (event) => {
    if (event.code === "ArrowUp" && (game.surfer.y + game.surfer.h) > 185) {
        keyPressedUp = true;
        game.surfer.posicion = "up";
        game.surfer.arribaSurfer();
    }
    if (event.code === "ArrowDown" && (game.surfer.y + game.surfer.h) < canvas.height) {
        keyPressedDown = true;
        game.surfer.posicion = "down";
        game.surfer.abajoSurfer();
    }
    if (event.code === "ArrowLeft" && game.surfer.x > 0) {
        keyPressedLeft = true;
        game.surfer.posicion = "left";
        game.surfer.izquierdaSurfer();
    }
    if (event.code === "ArrowRight" && (game.surfer.x + game.surfer.w) < canvas.width) {
        keyPressedRight = true;
        game.surfer.posicion = "right";
        game.surfer.derechaSurfer();
    }
}

const keyUp = (event) => {
    if (event.code === "ArrowUp") {
        keyPressedUp = false;
    }
    if (event.code === "ArrowDown") {
        keyPressedDown = false;
    }
    if (event.code === "ArrowLeft") {
        keyPressedLeft = false;
    }
    if (event.code === "ArrowRight") {
        keyPressedRight = false;
    }
}

const muteSong = () => {
    if (songElement.muted === false) {
        songElement.muted = true;
        iconSongDOM.innerHTML = "audiotrack";
    } else {
        songElement.muted = false;
        iconSongDOM.innerHTML = "volume_mute";
    }
}    



// ActiveListeners:
startBtnDOM.addEventListener("click", Inicio)
window.addEventListener("keydown", movimientoSurfer)
window.addEventListener("keyup", keyUp)
resetBtnDOM.addEventListener("click", () => {
    if (game.juegoTerminado === true) {
        game.juegoTerminado = false;
        game.estaJugando = false;
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
muteSongDOM.addEventListener("click", muteSong);
