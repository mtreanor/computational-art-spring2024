let kickSample;
let synth;
let loop;
let reverb;

let sixteenth = 0;

let root = 48;
let whichScale = "pentatonic major";

let hue;

let loopInterval = 1/4; // Loop interval of 1 second corresponds to 60 BPM

let cookies = [];
let numCookies = 3;

let cookieImg;
let monsterImg;

let playing = false;

function preload() {
  kickSample = loadSound("./samples/kick.wav");
  cookieImage = loadImage("./images/cookie.png");
  monsterImg = loadImage("./images/monster.png");

}


function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  imageMode(CENTER);

  cookieImage.resize(100, 0);

  for (let i = 0; i < numCookies; i++) {
    cookies.push(new Cookie(random(width), height/2));
  }

  synth = new p5.PolySynth();

  reverb = new p5.Reverb();
  reverb.process(synth, 10, 2);

  delay = new p5.Delay();
  delay.process(synth, 0.4, 0.2, 2300);

  loop = new p5.SoundLoop(soundLoop, loopInterval);

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100, 0.01);


  if (playing) {
    push();
    translate(width/2, height);
    scale(0.5 + noise(100 + frameCount * 0.001) * 1);
    rotate(noise(frameCount * 0.001) * 2 * PI - PI);
    image(monsterImg, 0, 0);
    pop();

    for (let i = 0; i < cookies.length; i++) {
      cookies[i].update();
      cookies[i].show();
    }
  } else {
    // textMode(CENTER);
    text("Warning, turn down your sound!\nClick at your own risk...", width/2 - 100, height/2);
  }

}

function soundLoop(timeFromNow) {
  if (sixteenth % 2 === 0) {
    kickSample.play(timeFromNow);
  }

  sixteenth++;
}

function mousePressed() {
  if (!playing) {
    userStartAudio();
    playing = true;
  }
}