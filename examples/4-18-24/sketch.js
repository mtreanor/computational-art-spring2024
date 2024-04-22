let grid = [];

let cellCountX = 100;
let cellCountY = 100;

let cellWidth;
let cellHeight;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);

  // frameRate(5);
  // noStroke();

  cellWidth = width / cellCountX;
  cellHeight = height / cellCountY;

  for (let x = 0; x < cellCountX; x++) {
    grid[x] = [];
    for (let y = 0; y < cellCountY; y++) {
      grid[x][y] = new Cell(x, y, random() < 0.1);
    }
  }
}

function draw() {
  background(0, 0, 100);

  if (mouseIsPressed) {
    let mouseIndexX = floor(map(mouseX, 0, width, 0, grid.length));
    let mouseIndexY = floor(map(mouseY, 0, height, 0, grid[0].length));
    if (mouseIndexX >= 0 && mouseIndexX < grid.length
      && mouseIndexY >= 0 && mouseIndexY < grid[0].length - 3) {
      grid[mouseIndexX][mouseIndexY].alive = true;
      grid[mouseIndexX][mouseIndexY+1].alive = true;
      grid[mouseIndexX][mouseIndexY+2].alive = true;
    }
  }


  let next = [];
  for (let x = 0; x < grid.length; x++) {
    next[x] = [];
    for (let y = 0; y < grid[x].length; y++) {
      if (x === 0 || x === grid.length - 1 || y === 0 || y === grid[x].length - 1) {
        next[x][y] = grid[x][y].alive;
      } else {
        next[x][y] = grid[x][y].nextState();
      }
      grid[x][y].show();
    }
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (next[x][y]) {
        grid[x][y].aliveCount++;
      }
      grid[x][y].alive = next[x][y];
    }
  }
}


