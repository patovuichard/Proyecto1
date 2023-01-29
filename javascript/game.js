class Game {
    // Propiedades:
    constructor () {
        this.bg = new Image();
        this.bg.src = "./images/bg2.jpg"

        this.surfer = new Surfer();

        this.tiburon = new Tiburon();
        this.tiburonArrDerecha = [];
        this.tiburonArrIzquierda = [];

        this.frames = 1;
        
        this.estaJugando = true;
        this.juegoTerminado = false;
    }

    // Metodos:

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    drawBg = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    }

    tiburonAparece = () => {
        if (this.tiburonArrDerecha.length === 0 || this.frames % 120 === 0) {
            let randomPosY = Math.random() * (600)
            let sharkD = new Tiburon(canvas.width, randomPosY, true);
            this.tiburonArrDerecha.push(sharkD);
        }
        if (this.tiburonArrIzquierda.length === 0 || this.frames % 120 === 0) {
            let randomPosY = Math.random() * (600)
            let sharkI = new Tiburon(0, randomPosY, false);
            this.tiburonArrIzquierda.push(sharkI);
        }
    }

    tiburonDesaparece = () => {
        if (this.tiburonArrDerecha[0].x + this.tiburonArrDerecha[0].w < 0) {
            this.tiburonArrDerecha.shift();
        }
        if (this.tiburonArrIzquierda[0].x > canvas.width) {
            this.tiburonArrIzquierda.shift();
        }
    }
    
    checkColisionTiburon = () => {
        this.tiburonArrDerecha.forEach ((eachTiburon)=> {
            if (
                eachTiburon.x < this.surfer.x + this.surfer.w &&
                eachTiburon.x + eachTiburon.w > this.surfer.x &&
                eachTiburon.y < this.surfer.y + this.surfer.h &&
                eachTiburon.h + eachTiburon.y > this.surfer.y
                )
                {this.gameOver();}
        })
        this.tiburonArrIzquierda.forEach ((eachTiburon)=> {
            if (
                eachTiburon.x < this.surfer.x + this.surfer.w &&
                eachTiburon.x + eachTiburon.w > this.surfer.x &&
                eachTiburon.y < this.surfer.y + this.surfer.h &&
                eachTiburon.h + eachTiburon.y > this.surfer.y
                )
                {this.gameOver();}
        })
    }
        
    gameOver = () => {
        // 1. Detener la recursion
        this.estaJugando = false;
        this.juegoTerminado = true;
        // 2. Ocultar el canvas
        canvas.style.display = "none";
        // 3. Mostrar la pantalla final
        resetGameDOM.style.display  = "flex";
        pauseDOM.style.display = "none";
    }


    gameLoop = () => {
        this.frames++;

        // Limpio el canvas
        this.clearCanvas();

        // Movimientos y acciones de los elementos
        this.tiburonAparece();
        this.tiburonDesaparece();
        this.tiburonArrDerecha.forEach ((eachTiburon) => {
            eachTiburon.moveTiburonDerecha();
        })
        this.tiburonArrIzquierda.forEach ((eachTiburon) => {
            eachTiburon.moveTiburonIzquierda();
        })

        this.checkColisionTiburon();
        
        // Dibujo los elementos por orden de aparicion
        this.drawBg();
        this.surfer.drawSurfer();
        this.tiburonArrDerecha.forEach ((eachTiburon) => {
            eachTiburon.drawTiburon();
        })
        this.tiburonArrIzquierda.forEach ((eachTiburon) => {
            eachTiburon.drawTiburon();
        })

        // Recursion y control
        if (this.estaJugando) {
            requestAnimationFrame(this.gameLoop);
        }
    }
}