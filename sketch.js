let cols, rows;
let cellsize = 40;
let grid = [];

function setup() {
    createCanvas(400, 400);

    cols = floor(width / cellsize);
    rows = floor(height / cellsize);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);
    for (let i in grid) {
        grid[i].show();
    }
}