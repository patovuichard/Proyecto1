class Tiburon {
    // Propiedades
    constructor(posX, posY, tiburonDerecha) {
        this.x = posX;
        this.y = posY;
        this.w = 70;
        this.h = 70;
        this.speed = 3;

        this.enemigo = new Image();
        if (tiburonDerecha) {
            this.enemigo.src = "./images/sharkD.png"
        } else (
            this.enemigo.src = "./images/sharkI.png"
        )
    }

    // Metodos
    drawTiburon = () => {
        ctx.drawImage(this.enemigo, this.x, this.y, this.w, this.h);
    }

    moveTiburonDerecha = () => {
        this.x -= this.speed;
    }

    moveTiburonIzquierda = () => {
        this.x += this.speed;
    }
}