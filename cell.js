class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
    }

    show() {
        let x = this.i * cellsize;
        let y = this.j * cellsize;
        stroke(255);
        if (this.walls[0]) line(x           , y           , x + cellsize, y);
        if (this.walls[1]) line(x + cellsize, y           , x + cellsize, y + cellsize);
        if (this.walls[2]) line(x + cellsize, y + cellsize, x           , y + cellsize);
        if (this.walls[3]) line(x           , y + cellsize, x           , y);

        // noFill();
        // rect(x, y, cellsize, cellsize);
    }
}