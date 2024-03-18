let walls = [];

let road;

let players = [];

function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
  
  road = new Road();

  for (let i = 0; i < 30; i++) {
    players.push(new Dot(random(width), random(height)));
  }
}

function draw() {
  background(0, 0, 100, 0.01);

  for (let wall of walls) {
    // wall.show();
  }

  // road.show();

  for (let player of players) {
    player.update();
    player.show();
  }
}

function mousePressed() {
  player.target.x = mouseX;
  player.target.y = mouseY;
}

