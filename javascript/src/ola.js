class Ola {
    constructor(posX, posY, olaDerecha) {
        this.x = posX;
        this.y = posY;
        this.w = 120;
        this.h = 100;
        this.speed = 5;

        this.ola = new Image();
        if (olaDerecha) {
            this.ola.src = "./images/waveD.png"
        } else (
            this.ola.src = "./images/waveI.png"
        )
    }

    drawOla = () => {
        ctx.drawImage(this.ola, this.x, this.y, this.w, this.h);
    }

    moveOlaDerecha = () => {
        this.x -= this.speed;
    }

    moveOlaIzquierda = () => {
        this.x += this.speed;
    }

    drawContadorOla = () => {
        ctx.font = "25px sans-serif";
        ctx.fillText(`Score: ${game.contadorOla * 100}`, 220, 60);
    }
}