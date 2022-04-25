class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    show() {
        let x = this.i * cellsize;
        let y = this.j * cellsize;
        stroke(255);
        if (this.walls[0]) line(x           , y           , x + cellsize, y);
        if (this.walls[1]) line(x + cellsize, y           , x + cellsize, y + cellsize);
        if (this.walls[2]) line(x + cellsize, y + cellsize, x           , y + cellsize);
        if (this.walls[3]) line(x           , y + cellsize, x           , y);

        if (this.visited) {
            fill(255, 0, 255, 100);
            rect(x, y, cellsize, cellsize);
        }
    }

    index(i, j) {
        if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
            return -1;
        }
        return i + j * cols;
    }

    checkNeighbors() {
        let neighbors = [];

        let top = grid[this.index(this.i, this.j - 1)];
        let right = grid[this.index(this.i + 1, this.j)];
        let bottom = grid[this.index(this.i, this.j + 1)];
        let left = grid[this.index(this.i - 1, this.j)];

        if (top && !top.visited) neighbors.push(top);
        if (right && !right.visited) neighbors.push(right);
        if (bottom && !bottom.visited) neighbors.push(bottom);
        if (left && !left.visited) neighbors.push(left);

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        }
        return undefined;
    }
}