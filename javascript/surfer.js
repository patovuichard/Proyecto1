class Surfer {
    // Propiedades
    constructor() {
        this.x = 400;
        this.y = 300;
        this.w = 80;
        this.h = 80;
        this.speed = 40;

        this.personaje = new Image();
        this.personaje.src = "./images/surferRight.png"
    }

    // Metodos
    drawSurfer = () => {
        ctx.drawImage(this.personaje, this.x, this.y, this.w, this.h);
    }

    arribaSurfer = () => {
        this.y -= this.speed;
    }

    abajoSurfer = () => {
        this.y += this.speed;
    }

    izquierdaSurfer = () => {
        this.x -= this.speed;
    }

    derechaSurfer = () => {
        this.x += this.speed;
    }

}