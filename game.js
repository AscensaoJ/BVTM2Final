var map0;
var tileSet;
var char;
var scaler;
var player;
let looper = 0;

function preload() {
    tileSet = loadImage('images/tilesetMin.png');
    char = loadImage('images/char.png');
}

function setup () {
    createCanvas(1632, 864);
    scaler = 96;
    map0 = new MapMaker(tileSet, scaler);
    map0.objectify();
    player = new Player(scaler);
    map0.render(0);
    map0.render(1);
    map0.render(2);
    player.draw();
    map0.render(3);
    document.addEventListener('keydown', mover, false);
    document.addEventListener('keyup', stopper, false);
    //noLoop();
}

function draw () {
    if (player.moving == true) {
        player.walking();
        map0.render(0);
        map0.render(1);
        map0.render(2);
        player.draw();
        map0.render(3);
        console.log('test');
    } else {
        map0.render(0);
        map0.render(1);
        map0.render(2);
        player.draw();
        map0.render(3);
    }
    //player.input();
}
