class Game {
  // Propiedades:
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg2.jpg";

    this.surfer = new Surfer();

    this.tiburon = new Tiburon();
    this.tiburonArrDerecha = [];
    this.tiburonArrIzquierda = [];
    this.velocidadTiburon = 1;
    this.velocidadAparicionTiburon = 600;

    this.estrella = new Estrella();
    this.estrellaArr = [];

    this.ola = new Ola();
    this.olaArrDerecha = [];
    this.olaArrIzquierda = [];
    this.contadorOla = 0;

    this.frames = 1;
    this.segundos = 0;
    this.minutos = 0;

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
    if (this.tiburonArrDerecha.length === 0 || this.frames % (this.velocidadAparicionTiburon) === 0) {
      let randomPosY = Math.random() * 500;
      let sharkD = new Tiburon(canvas.width, (randomPosY + 100), this.velocidadTiburon, true);
      this.tiburonArrDerecha.push(sharkD);
    }
    if (this.tiburonArrIzquierda.length === 0 || this.frames % (this.velocidadAparicionTiburon) === 0) {
      let randomPosY = Math.random() * 500;
      let sharkI = new Tiburon(0, (randomPosY + 100), this.velocidadTiburon, false);
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
    if (this.frames % 720 === 0) {
      let randomPosX = Math.random() * 800;
      let randomPosY = Math.random() * 500;
      let estrella = new Estrella(randomPosX, (randomPosY + 100));
      this.estrellaArr.push(estrella);
    }
  };

  estrellaDesaparece = () => {
    if (this.frames % 359 === 0) {
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
        this.surfer.energia <= 8000
      ) {
        audioStarElement.play();
        audioStarElement.volume = 0.2;
        this.surfer.energia += 2000;
        this.estrellaArr.shift();
      }
    });
  };

  // SURFER:
  checkEnergiaSurfer = () => {
    if (this.frames % 120 === 0) {
      this.surfer.energia -= 50;
    }
    if (this.surfer.energia <= 0) {
      this.gameOver();
    }
  };

  // OLA:
  olaAparece = () => {
    if (this.olaArrDerecha.length === 0 || this.frames % 180 === 0) {
      let randomPosY = Math.random() * 500;
      let olaD = new Ola(canvas.width, (randomPosY + 100), true);
      this.olaArrDerecha.push(olaD);
    }
    if (this.olaArrIzquierda.length === 0 || this.frames % 180 === 0) {
      let randomPosY = Math.random() * 500;
      let olaI = new Ola(0, (randomPosY + 100), false);
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
        this.contadorOla++
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
        this.contadorOla++
      }
    });
  };

  // AUMENTAR LA DIFICULTAD:
  levelUp = () => {
    if (this.contadorOla > 250 && this.contadorOla < 500) {
      this.velocidadAparicionTiburon = 480;
      this.velocidadTiburon = 2;
    } else if (this.contadorOla >= 500 && this.contadorOla < 750) {
      this.velocidadAparicionTiburon = 360;
      this.velocidadTiburon = 3;
    } else if (this.contadorOla >= 750 && this.contadorOla < 1000) {
      this.velocidadAparicionTiburon = 240;
      this.velocidadTiburon = 4;
    } else if (this.contadorOla >= 1000) {
      this.velocidadAparicionTiburon = 120;
      this.velocidadTiburon = 5;
    }
  }
  
  // RELOJ:
  timer = () => {
    if (this.segundos % 60 === 0 && this.segundos > 59) {
      this.segundos = 0;
      this.minutos++
    }
    if (this.frames % 60 === 0 && this.frames > 0) {
      this.segundos++
    }
    if (this.segundos < 10){
      ctx.font = "25px sans-serif";
      ctx.fillText(`Tiempo: ${this.minutos}:0${this.segundos}`, 440, 60);
    } else {
      ctx.font = "25px sans-serif";
      ctx.fillText(`Tiempo: ${this.minutos}:${this.segundos}`, 440, 60);
    }
  }

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
    this.ola.drawContadorOla();

    this.levelUp();

    this.timer();

    // console.log(this.contadorOla, this.velocidadAparicionTiburon)
    // Recursion y control
    if (this.estaJugando) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
