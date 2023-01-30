class Surfer {
    // Propiedades
    constructor(posicion) {
        this.x = 360;
        this.y = 260;
        this.w = 60;
        this.h = 60;
        this.speed = 40;
        this.energia = 10000;

        this.posicion = posicion;
        this.personaje = new Image();
        this.personaje.src = "./images/surferRight.png"
    }

    // Metodos
    drawSurfer = () => {
        ctx.drawImage(this.personaje, this.x, this.y, this.w, this.h);
    }

    arribaSurfer = () => {
        this.y -= this.speed;
        // this.posicion = "up";
        this.personaje.src = "./images/surferUp.png"
    }

    abajoSurfer = () => {
        this.y += this.speed;
        // this.posicion = "down";
        this.personaje.src = "./images/surferDown.png"
    }

    izquierdaSurfer = () => {
        this.x -= this.speed;
        // this.posicion = "left";
        this.personaje.src = "./images/surferLeft.png"
    }

    derechaSurfer = () => {
        this.x += this.speed;
        // this.posicion = "right";
        this.personaje.src = "./images/surferRight.png"
    }

    drawEnergia = () => {
        ctx.font = "25px sans-serif";
        ctx.fillText(`Energia: ${this.energia / 100}%`, 10, 60);
    }

}