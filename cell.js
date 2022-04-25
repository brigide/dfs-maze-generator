class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }

    show() {
        let x = this.i * cellsize;
        let y = this.j * cellsize;
        stroke(255);
        noFill();
        rect(x, y, cellsize, cellsize);
    }
}