let baseRadiusSlider;

// We will use this variable to get the Perlin Noise values
let xoff = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  // Create and position a slider (how it is used is described below)
  baseRadiusSlider = createSlider(0, 1, 0.1, 0.01);
  baseRadiusSlider.position(50, 50);
  baseRadiusSlider.size(width-100);

  // Lower the frameRate so it isn't so irratic.
  frameRate(5);
}

function draw() {
  background(0, 0, 100);

  // Saves the state of the "transformation matrix". In other words, it saves
  // the state of the coordinate system, so we can move it around using
  // translate and rotate, etc. and then restore it back to how it was using
  // pop() below.
  push();

  // Make it so (0,0) is at the center of the screen.
  translate(width/2, height/2);

  // Below, we will draw a spiral using polar coordinates to get an (x,y) pos, 
  // a variable called baseRadius to control how far each vertex is from (0,0). 
  // We increase the rate at which this increases using a slider.
  stroke(0);
  noFill();
  beginShape();
  let baseRadius = 0;
  for(let theta = 0; theta < 128 * PI; theta += 0.1) {
    // Make the actual radius be a little wobbly using noise.
    let radius = baseRadius + map(noise(xoff), 0, 1, -15, 15);

    // Get the (x, y) position using a little trigonometry. Given that we 
    // know the radius, and the theta or the point we are trying to get,
    // we can do the following math based on:
    //    sin(theta) = opposite / hypotenuse
    //    cos(theta) = adjacent / hypotenuse
    let x = radius * cos(theta);
    let y = radius * sin(theta);
    
    // Draw a vertex (the shape will connect all verticese)
    vertex(x, y);

    xoff += 0.2;

    baseRadius += baseRadiusSlider.value();
  }
  endShape();

  // Reset the transformation matrix to how is was at the start of draw()
  pop();
}

