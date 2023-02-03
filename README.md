# Surfer Boy


# Description

Surfer Boy is a game where the main character has to surf waves in order to increase his energy and score points to make the game more dificult, while trying to evade sharks from eating him. The game ends when the surfer has no more energy available.

# MVP (DOM - CANVAS)

- Game has one character who is a surfer
- Surfer moves all the way through the screen
- Waves appear randomly from both sides of the screen, to increase surfer´s energy and score points
- Sharks appear randomly from both sides of the screen, to decrease surfer´s energy on a bite
- Stars appear randomly on the screen, to increase surfer´s energy
- Increasing dificulty

# Backlog Functionalities

- Choose between different characters
- Add stunts to score more points
- Have a scoreboard

# Project Structure

## main.js

- gameScreen () {}
- musicAutoPlay () {}
- Inicio () {}
- movimientoSurfer () {}
- keyUp () {}
- muteSong () {}

## game.js

- Game () {}
- clearCanvas () {}
- drawBg () {}
- tiburonAparece () {}
- tiburonDesaparece () {}
- checkColisionTiburon () {}
- estrellaAparece () {}
- estrellaDesaparece () {}
- checkColisionEstrella () {}
- checkEnergiaSurfer () {}
- olaAparece () {}
- olaDesaparece () {}
- checkColisionOla () {}
- levelUp () {}
- timer () {}
- gameOver () {}
- gameLoop () {}

## surfer.js 

- Surfer () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
    this.energia;
    this.posicion;
    this.personaje;
    this.personaje.src;
}
- drawSurfer () {}
- arribaSurfer () {}
- abajoSurfer () {}
- izquierdaSurfer () {}
- derechaSurfer () {}
- drawEnergia () {}

## ola.js 

- Ola () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawOla () {}
- moveOlaDerecha () {}
- moveOlaIzquierda () {}
- drawContadorOla () {}

## tiburon.js 

- Tiburon () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawTiburon () {}
- moveTiburonDerecha () {}
- moveTiburonIzquierda () {}

## estrella.js 

- Estrella () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawEstrella () {}

# States and Transitions

Definition of the different states and their transition (transition functions)

- Start Screen
- Game Screen
- Game Over Screen

# Tasks

- main - gameScreen
- main - musicAutoPlay
- main - Inicio
- main - movimientoSurfer
- main - movimientoSurfer
- main - muteSong
- main - addEventListener
- game - clearCanvas
- game - drawBg
- game - tiburonAparece
- game - tiburonDesaparece
- game - checkColisionTiburon
- game - estrellaAparece
- game - estrellaDesaparece
- game - checkColisionEstrella
- game - checkEnergiaSurfer
- game - olaAparece
- game - olaDesaparece
- game - checkColisionOla
- game - levelUp
- game - timer
- game - gameOver
- game - gameLoop
- surfer - drawSurfer
- surfer - arribaSurfer
- surfer - abajoSurfer
- surfer - izquierdaSurfer
- surfer - derechaSurfer
- surfer - drawEnergia
- ola - drawOla
- ola - moveOlaDerecha
- ola - moveOlaIzquierda
- ola - drawContadorOla
- tiburon - drawTiburon
- tiburon - moveTiburonDerecha
- tiburon - moveTiburonIzquierda
- estrella - drawEstrella

# Links

### Git
- URL for the project repo [Link Repo](https://github.com/patovuichard/Surfer-Boy) 
- URL for the project deploy [Link Deploy](https://patovuichard.github.io/Surfer-Boy/)

### Slides
- URls for the project presentation (slides) [Link Slides](https://docs.google.com/presentation/d/10T9luAj3aii9N7Wr3EPPn5MG6GJ4OUXM6KmIZHxqiAQ/edit#slide=id.p)