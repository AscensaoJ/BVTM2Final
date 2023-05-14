let acc = 0;//check input
function mover(e) {
    //loop()
    console.log(isLooping());
    switch (e.keyCode) {
        case 87:
            player.direction = 3;
            if (player.moving == false){
            redraw();
            acc++;
            }
            if(player.checkWall() == false) {
                console.log('potato');
                player.moving = true;
                player.aniFrame = 0;
                redo()
            }
            break;
        case 83:
            player.direction = 0;
            if (player.moving == false){
            redraw();
            acc++;
            }
            if(player.checkWall() == false) {
                console.log('potato');
                player.moving = true;
                player.aniFrame = 0;
                redo();
            }
            break;
        case 65:
            player.direction = 1;
            redraw();
            acc++;
            if(player.checkWall() == false) {
                console.log('potato');
                player.moving = true;
                player.aniFrame = 0;
                redo();
            }
            break;
        case 68:
            player.direction = 2;
            redraw();
            acc++;
            if(player.checkWall() == false) {
                console.log('potato');
                player.moving = true;
                player.aniFrame = 0;
                redo();
            }
            break;
        }
    acc = 0;
}

//stop movement
function stopper () {
    //if(acc == 0) {
    player.moving = false;
    player.aniFrame = 1;
    redraw();
    //noLoop();
    //}
}

function redo () {
    for (let i = 0; i < 16; i++) {
        redraw();
    }
}