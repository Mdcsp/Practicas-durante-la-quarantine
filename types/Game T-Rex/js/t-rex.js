document.addEventListener('keydown', function (evento) {
    if (evento.keyCode == 32) {
        console.log("salta");
        saltar();
    }
});
//carga de imagenes
var imgRex;
var imgCactus;
var imgSuelo;
var imgNube;
function cargaImagenes() {
    imgRex = new Image();
    imgCactus = new Image();
    imgSuelo = new Image();
    imgNube = new Image();
    imgRex.src = 'img/dinosaurio.png';
    imgCactus.src = 'img/cactus.png';
    imgSuelo.src = 'img/suelo.png';
    imgNube.src = 'img/nube.png';
}
var width = 700;
var height = 300;
var canvas, contexto;
function inicializar() {
    canvas = document.getElementById("rex");
    contexto = canvas.getContext("2d");
    cargaImagenes();
}
//borrar el canvas
function borraCanvas() {
    canvas.width = width;
    canvas.height = height;
}
// la variable y es la posición vertical, vy es la velocidad vertical
var suelo = 200;
var trex = { y: suelo, vy: 0, gravedad: 2, salto: 28, vymax: 9, saltando: false };
var nivel = { velocidad: 9, puntuacion: 0 };
var cactus = { x: width + 100, y: suelo - 25 };
var nube = { x: 400, y: 60 };
var suelog = { x: 0, y: suelo + 30 };
function dibujarRex() {
    contexto.drawImage(imgRex, 0, 0, 357, 383, 100, trex.y, 50, 50);
}
function dibujaCactus() {
    contexto.drawImage(imgCactus, 0, 0, 300, 100, cactus.x, cactus.y, 240, 90);
}
function dibujaNube() {
    contexto.drawImage(imgNube, 0, 0, 338, 93, nube.x, nube.y, 338, 100);
}
function dibujaSuelo() {
    contexto.drawImage(imgSuelo, suelog.x, 0, 700, 30, 0, suelog.y, 700, 30);
}
function logicaCactus() {
    if (cactus.x < -100) {
        cactus.x = width + 100;
    }
    else {
        cactus.x -= nivel.velocidad;
    }
}
function logicaNube() {
    if (nube.x < -100) {
        nube.x = width + 100;
    }
    else {
        nube.x -= 2;
    }
}
function logicaSuelo() {
    if (suelog.x > 600) {
        suelog.x = 0;
    }
    else {
        suelog.x += nivel.velocidad;
    }
}
function saltar() {
    trex.saltando = true;
    trex.vy = trex.salto;
}
function gravedad() {
    if (trex.saltando == true) {
        if (trex.y - trex.vy - trex.gravedad > suelo) {
            trex.saltando = false;
            trex.vy = 0;
            trex.y = suelo;
        }
        else {
            trex.vy -= trex.gravedad;
            trex.y -= trex.vy;
        }
    }
}
//Bucle principal 
// FPS = FOTOGRAMAS X SEGUNDOS
var FPS = 50;
setInterval(function () {
    principal();
}, 1000 / FPS);
function principal() {
    borraCanvas();
    gravedad();
    logicaCactus();
    logicaNube();
    logicaSuelo();
    dibujaSuelo();
    dibujaCactus();
    dibujaNube();
    dibujarRex();
}
// min 38.11
