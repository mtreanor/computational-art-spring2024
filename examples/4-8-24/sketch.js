let kickSample;

let synth;

let loop;

let delay;
let reverb;

let sixteenth = 0;

let kickSequence = [1,0,0,1,0,0,1,0];

let majorArpeggio = [0, 4, 7, 11];

let root = 48;
let scale = "major";


let loopInterval = 1; // Loop interval of 1 second corresponds to 60 BPM

function preload() {
  kickSample = loadSound("./samples/kick.wav");
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  synth = new p5.PolySynth();

  reverb = new p5.Reverb();
  reverb.process(synth, 10, 2);

  delay = new p5.Delay();
  delay.process(synth, 0.4, 0.2, 2300);

  loop = new p5.SoundLoop(soundLoop, loopInterval/4);
}

function draw() {
  background(0, 0, 100);

}

function soundLoop(timeFromNow) {
  if (sixteenth % 8 === 0) {
    if (root === 48) {
      root += 5;
    } else {
      root -= 5;
    }
  }


  let kickIndex = sixteenth % kickSequence.length;
  if (kickSequence[kickIndex] === 1) {
    kickSample.play(timeFromNow);
  }

  // let noteOffset = sixteenth + floor(random(-2, 2));
  // let scaleIndex = noteOffset % scales[scale].length;
  // let note = midiToFreq(root + scales[scale][scaleIndex]);
  // if (random() > 0.3) {
  //   synth.play(note, 0.8, timeFromNow, 0.1);
  // }

  let arpIndex = sixteenth % majorArpeggio.length;
  let note = midiToFreq(root + majorArpeggio[arpIndex]);
  synth.play(note, 0.8, timeFromNow, 0.1);

  sixteenth++;
}

function mousePressed() {
  userStartAudio();
  loop.start();
}