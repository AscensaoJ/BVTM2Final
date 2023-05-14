class MapMaker {
    constructor(tileSet, scaler) {
        this.tileSet = tileSet;
        this.tiles = [];
        this.scaler = scaler;
        this.pos = createVector(4.5, 16.5)
    }

    objectify() {
        let wall = false;
        for (let layer = 0; layer < 4; layer++) {
            this.tiles.push([]);
            for (let y = 0; y < mapSrc[layer].length; y++) {
                this.tiles[layer].push([]);
                for (let x = 0; x < mapSrc[layer][y].length; x++) {
                    if (layer == 2) {
                        switch (mapSrc[layer][y][x]) {
                            case 0:
                                wall = false;
                                break;
                            default:
                                wall = true;
                        }
                    }
                    this.tiles[layer][y].push(new Tile(x * this.scaler, y * this.scaler, layer, tileKey[mapSrc[layer][y][x]], wall, this.scaler));
                }
            }
        }
    }

    render(layer) {
        for (let y = 0; y < this.tiles[layer].length; y++) {
            for (let x = 0; x < this.tiles[layer][y].length; x++) {
                if (this.tiles[layer][y][x] != 0) {
                    this.tiles[layer][y][x].render(this.pos.x * this.scaler, this.pos.y * this.scaler, this.tileSet);
                }
            }
        }
    }
}

class Tile {
    constructor(x, y, z, tile, wall, scaler) {
        this.pos = createVector(x, y, z);
        this.tile = tile;
        this.inSize = 32;
        this.outSize = scaler;
        this.wall = wall;
    }

    render(xOffset, yOffset, tileSet) {
        image(tileSet, this.pos.x - xOffset, this.pos.y - yOffset, this.outSize, this.outSize, this.tile[0] * this.inSize, this.tile[1] * this.inSize, this.inSize, this.inSize);
    }
}