class Estrella {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
        this.w = 30;
        this.h = 30;

        this.estrella = new Image();
        this.estrella.src = "./images/star1.png"
    }
    
    drawEstrella = (frame) => {
        if (frame % 15 === 0) {
            this.estrella.src = "./images/star1.png"
        } else if (frame % 10 === 0) {
            this.estrella.src = "./images/star2.png"
        }
        ctx.drawImage(this.estrella, this.x, this.y, this.w, this.h);
    }
}