class Player {
    constructor(scaler) {
        this.pos = createVector(7.5 + map0.pos.x, 3.5 + map0.pos.y); // position of player character, reference 7.5, 3.5
        this.xy = createVector(map0.pos.x, map0.pos.y);
        this.inSize = 32; // size on sprite sheet
        this.outSize = scaler; // size on screen
        this.aniFrame = 1; // 0 = right step, 1 = stationary, 2 = left step
        this.moving = false; // if walking animation should be used
        this.direction = 0; // 0 = down, 1 = left, 2 = right, 3 = up
        this.motion = 0.0625; // distance moved by player per call of
        this.check = 1;
        this.frameCount = 0;
    }

    // check if desired direction is walkable
    checkWall() {
        let xOffset = 0;
        let yOffset = 0;
        switch (this.direction) {
            case 0:
                yOffset = 0.01;
                break;
            case 1:
                xOffset = -1;
                break;
            case 2:
                xOffset = 0.01;
                break;
            case 3:
                yOffset = -1;
                break;
        }
        let coords = [Math.ceil(this.pos.x + xOffset), Math.ceil(this.pos.y + yOffset)];
        console.log(coords + ' ' + map0.tiles[2][coords[1]][coords[0]].wall);
        if (map0.tiles[2][coords[1]][coords[0]].wall == true) {
            return true;
        }
        return false;
    }

    



    walking() {
        if (this.frameCount > 7){
            switch (this.aniFrame) {
                case 0:
                    this.aniFrame = 2;
                    break;
                case 2:
                    this.aniFrame = 0;
                    break;
            }
            this.frameCount = 0;
        }
        switch(this.direction) {
            case 0:
                if(this.checkWall() == false){
                this.pos.y += this.motion;
                map0.pos.y += this.motion;
                } else {
                    this.aniFrame = 1;
                    redraw();
                }
                break;
            case 1:
                if(this.checkWall() == false){
                this.pos.x -= this.motion;
                map0.pos.x -= this.motion;
                } else {
                    this.aniFrame = 1;
                    redraw();
                }
                break;
            case 2:
                if(this.checkWall() == false){
                this.pos.x += this.motion;
                map0.pos.x += this.motion;
                } else {
                    this.aniFrame = 1;
                    redraw();
                }
                break;
            case 3:
                if(this.checkWall() == false){
                this.pos.y -= this.motion;
                map0.pos.y -= this.motion;
                } else {
                    this.aniFrame = 1;
                    redraw();
                }
                break;
        }
        //image(char, 7.5 * this.outSize, 3.5 * this.outSize, this.outSize, this.outSize, this.aniFrame * this.inSize, this.direction * this.inSize, this.inSize, this.inSize);

        this.frameCount++;
    }

    draw() {
        image(char, 7.5 * this.outSize, 3.5 * this.outSize, this.outSize, this.outSize, this.aniFrame * this.inSize, this.direction * this.inSize, this.inSize, this.inSize);
    }

    
}