let numCellsWidth = 10;
let numCellsHeight = 10;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;
}

function draw() {
  background(0, 0, 100);
  drawGrid()
}

function drawGrid() {
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      let x = cellWidth * xIndex;
      let y = cellHeight * yIndex;

      push();

      translate(x, y);

      let hue = map(noise(x*0.01, y*0.01), 0, 1, 0, 360);
      fill(hue, 50, 100);
      rect(0, 0, cellWidth, cellHeight);
      let colorOffset = 40;

      fill((hue + 180 - colorOffset) % 360, 50, 100);
      noStroke();
      ellipse(cellWidth/2, cellHeight/2, cellWidth, cellHeight);

      fill((hue + 180 + colorOffset) % 360, 50, 100);
      ellipse(cellWidth/2, cellHeight/2, cellWidth/2, cellHeight/2);

      pop();
    }
  }
}
