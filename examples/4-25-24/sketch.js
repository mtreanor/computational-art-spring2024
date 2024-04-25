let currentState;

let state_1;
let state_2;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  state_1 = new State_1();
  state_2 = new State_2();

  currentState = state_1;
}


function draw() {
  currentState.draw();
}

function mousePressed() {
  currentState.mousePressed();
}

