class Game {
  // Propiedades:
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg2.jpg";

    this.surfer = new Surfer();

    this.tiburon = new Tiburon();
    this.tiburonArrDerecha = [];
    this.tiburonArrIzquierda = [];

    this.estrella = new Estrella();
    this.estrellaArr = [];

    this.ola = new Ola();
    this.olaArrDerecha = [];
    this.olaArrIzquierda = [];

    this.frames = 1;

    this.estaJugando = true;
    this.juegoTerminado = false;
  }

  // Metodos:

  // CANVAS:
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  // TIBURON:
  tiburonAparece = () => {
    if (this.tiburonArrDerecha.length === 0 || this.frames % 240 === 0) {
      let randomPosY = Math.random() * 600;
      let sharkD = new Tiburon(canvas.width, randomPosY, true);
      this.tiburonArrDerecha.push(sharkD);
    }
    if (this.tiburonArrIzquierda.length === 0 || this.frames % 240 === 0) {
      let randomPosY = Math.random() * 600;
      let sharkI = new Tiburon(0, randomPosY, false);
      this.tiburonArrIzquierda.push(sharkI);
    }
  };

  tiburonDesaparece = () => {
    if (this.tiburonArrDerecha[0].x + this.tiburonArrDerecha[0].w < 0) {
      this.tiburonArrDerecha.shift();
    }
    if (this.tiburonArrIzquierda[0].x > canvas.width) {
      this.tiburonArrIzquierda.shift();
    }
  };

  checkColisionTiburon = () => {
    this.tiburonArrDerecha.forEach((eachTiburon) => {
      if (
        eachTiburon.x < this.surfer.x + this.surfer.w &&
        eachTiburon.x + eachTiburon.w > this.surfer.x &&
        eachTiburon.y < this.surfer.y + this.surfer.h &&
        eachTiburon.h + eachTiburon.y > this.surfer.y &&
        this.surfer.x > 0
      ) {
        this.tiburonArrDerecha.shift();
        this.surfer.energia -= 3333;
        audioSharkElement.play();
        audioSharkElement.volume = 0.5;
        this.surfer.izquierdaSurfer();
        this.surfer.izquierdaSurfer();
      }
    });
    this.tiburonArrIzquierda.forEach((eachTiburon) => {
      if (
        eachTiburon.x < this.surfer.x + this.surfer.w &&
        eachTiburon.x + eachTiburon.w > this.surfer.x &&
        eachTiburon.y < this.surfer.y + this.surfer.h &&
        eachTiburon.h + eachTiburon.y > this.surfer.y &&
        this.surfer.x + this.surfer.w < canvas.width
      ) {
        this.tiburonArrIzquierda.shift();
        this.surfer.energia -= 3333;
        audioSharkElement.play();
        audioSharkElement.volume = 0.5;
        this.surfer.derechaSurfer();
        this.surfer.derechaSurfer();
      }
    });
  };

  // ESTRELLA:
  estrellaAparece = () => {
    if (this.frames % 360 === 0) {
      let randomPosX = Math.random() * 800;
      let randomPosY = Math.random() * 600;
      let estrella = new Estrella(randomPosX, randomPosY);
      this.estrellaArr.push(estrella);
    }
  };

  estrellaDesaparece = () => {
    if (this.frames % 480 === 0) {
      this.estrellaArr.shift();
    }
  };

  checkColisionEstrella = () => {
    this.estrellaArr.forEach((eachEstrella) => {
      if (
        eachEstrella.x < this.surfer.x + this.surfer.w &&
        eachEstrella.x + eachEstrella.w > this.surfer.x &&
        eachEstrella.y < this.surfer.y + this.surfer.h &&
        eachEstrella.h + eachEstrella.y > this.surfer.y &&
        this.surfer.energia < 9980
      ) {
        audioStarElement.play();
        audioStarElement.volume = 0.3;
        this.surfer.energia += 2000;
        this.estrellaArr.shift();
      }
    });
  };

  // SURFER:
  checkEnergiaSurfer = () => {
    // console.log(this.surfer.energia)
    if (this.frames % 60 === 0) {
      this.surfer.energia -= 10;
    }
    if (this.surfer.energia <= 0) {
      this.gameOver();
    }
  };

  // OLA:
  olaAparece = () => {
    if (this.olaArrDerecha.length === 0 || this.frames % 180 === 0) {
      let randomPosY = Math.random() * 600;
      let olaD = new Ola(canvas.width, randomPosY, true);
      this.olaArrDerecha.push(olaD);
    }
    if (this.olaArrIzquierda.length === 0 || this.frames % 180 === 0) {
      let randomPosY = Math.random() * 600;
      let olaI = new Ola(0, randomPosY, false);
      this.olaArrIzquierda.push(olaI);
    }
  };

  olaDesaparece = () => {
    if (this.olaArrDerecha[0].x + this.olaArrDerecha[0].w < 0) {
      this.olaArrDerecha.shift();
    }
    if (this.olaArrIzquierda[0].x > canvas.width) {
      this.olaArrIzquierda.shift();
    }
  };

  checkColisionOla = () => {
    this.olaArrDerecha.forEach((eachOla) => {
      if (
        eachOla.x < this.surfer.x + this.surfer.w &&
        eachOla.x + eachOla.w > this.surfer.x &&
        eachOla.y < this.surfer.y + this.surfer.h &&
        eachOla.h + eachOla.y > this.surfer.y &&
        this.surfer.energia < 9990 &&
        this.surfer.x > 0
      ) {
        audioWaveElement.play();
        audioWaveElement.volume = 0.5;
        this.surfer.energia += 1;
        this.surfer.izquierdaSurfer();
      }
    });
    this.olaArrIzquierda.forEach((eachOla) => {
      if (
        eachOla.x < this.surfer.x + this.surfer.w &&
        eachOla.x + eachOla.w > this.surfer.x &&
        eachOla.y < this.surfer.y + this.surfer.h &&
        eachOla.h + eachOla.y > this.surfer.y &&
        this.surfer.energia < 9990 &&
        this.surfer.x + this.surfer.w < canvas.width
      ) {
        audioWaveElement.play();
        audioWaveElement.volume = 0.5;
        this.surfer.energia += 1;
        this.surfer.derechaSurfer();
      }
    });
  };

  // GAME OVER:
  gameOver = () => {
    // 1. Detener la recursion
    this.estaJugando = false;
    this.juegoTerminado = true;

    // 2. Ocultar el canvas
    gameDOM.style.display = "none";

    // 3. Mostrar la pantalla final
    resetGameDOM.style.display = "flex";
  };

  // BUCLE DEL JUEGO:
  gameLoop = () => {
    this.frames++;

    // Limpio el canvas
    this.clearCanvas();

    // Movimientos y acciones de los elementos
    this.checkEnergiaSurfer();

    this.tiburonAparece();
    this.tiburonDesaparece();
    this.tiburonArrDerecha.forEach((eachTiburon) => {
      eachTiburon.moveTiburonDerecha();
    });
    this.tiburonArrIzquierda.forEach((eachTiburon) => {
      eachTiburon.moveTiburonIzquierda();
    });
    this.checkColisionTiburon();

    this.estrellaAparece();
    this.estrellaDesaparece();
    this.checkColisionEstrella();

    this.olaAparece();
    this.olaDesaparece();
    this.olaArrDerecha.forEach((eachOla) => {
      eachOla.moveOlaDerecha();
    });
    this.olaArrIzquierda.forEach((eachOla) => {
      eachOla.moveOlaIzquierda();
    });
    this.checkColisionOla();

    // Dibujo los elementos por orden de aparicion
    this.drawBg();
    this.surfer.drawEnergia();

    this.tiburonArrDerecha.forEach((eachTiburon) => {
      eachTiburon.drawTiburon();
    });
    this.tiburonArrIzquierda.forEach((eachTiburon) => {
      eachTiburon.drawTiburon();
    });

    this.estrellaArr.forEach((eachEstrella) => {
      eachEstrella.drawEstrella(this.frames);
    });

    this.olaArrDerecha.forEach((eachOla) => {
      eachOla.drawOla();
    });
    this.olaArrIzquierda.forEach((eachOla) => {
      eachOla.drawOla();
    });

    this.surfer.drawSurfer();

    // Recursion y control
    if (this.estaJugando) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
