let kickSample;
let synth;
let loop;
let reverb;

let sixteenth = 0;

let root = 48;
let scale = "major";

let hue;

// let loopInterval = 1; // Loop interval of 1 second corresponds to 60 BPM

let cookies = [];
let numCookies = 4;

let cookieImg;

let playing = false;

function preload() {
  kickSample = loadSound("./samples/kick.wav");
  cookieImage = loadImage("./images/cookie.png");
}


function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  imageMode(CENTER);

  cookieImage.resize(100, 0);

  for (let i = 0; i < numCookies; i++) {
    cookies.push(new Cookie(width/2, height/2));
  }

  synth = new p5.PolySynth();
  // synth.maxVoices = 160;

  reverb = new p5.Reverb();
  reverb.process(synth, 10, 2);

  delay = new p5.Delay();
  delay.process(synth, 0.4, 0.2, 2300);

  // loop = new p5.SoundLoop(soundLoop, loopInterval/4);
}

function draw() {
  background(0, 0, 100);


  for (let i = 0; i < cookies.length; i++) {
    cookies[i].update();
    cookies[i].show();
  }

}

// function soundLoop(timeFromNow) {
//   let note = root;
//   synth.play(midiToFreq(note), 0.8, timeFromNow, 0.1);

//   sixteenth++;
// }

function mousePressed() {
  if (!playing) {
    userStartAudio();
    playing = true;
  }
}