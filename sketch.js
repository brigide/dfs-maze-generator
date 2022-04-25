let cols, rows;
let cellsize = 30;
let grid = [];

let current;

let stack = [];

function setup() {
    createCanvas(600, 600);

    cols = floor(width / cellsize);
    rows = floor(height / cellsize);

    //frameRate(5);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid[0];
}

function draw() {
    background(51);
    for (let i in grid) {
        grid[i].show();
    }

    current.visited = true;
    current.highlight();
    let next = current.checkNeighbors();
    if (next) { //if there are available neighbors
        next.visited = true;

        stack.push(current); //backtracking stack

        removeWalls(current, next);

        current = next;
    }
    else if (stack.length > 0) { //if it's stuck
        current = stack.pop();
    }
}

function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    }
    else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }

    let y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    }
    else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}