var synth1, synth2;
var sloop1, sloop2;
var loopInterval = 0.2; // Loop interval of 1 second corresponds to 60 BPM

let count = 0;
let sixteenth = 0;

let reverb;

let rhythm;

let kickSound;
function preload() {
  soundFormats('wav');
  kickSound = loadSound('samples/kick');
}

function setup() {
  noCanvas();

  reverb = new p5.Reverb();

  synth1 = new p5.PolySynth();
  synth2 = new p5.PolySynth();

  reverb.process(synth2, 1, 2);

  synth2.setADSR(0, 1);
  // Create a SoundLoop which calls mySoundLoop every loopInterval seconds
  sloop1 = new p5.SoundLoop(mySoundLoop1, loopInterval);
  sloop1.start();

  sloop2 = new p5.SoundLoop(mySoundLoop2, loopInterval * 4);
  sloop2.start();

  rhythm = euclid(8, 5, 0);
  console.log(rhythm);
}

function mousePressed() {
  userStartAudio();
}



let scaleIndex = 0;
let scale = "pentatonic minor";
let root = 50;
let offset = 0;

function mySoundLoop1(timeFromNow) {
  let midiNoteToPlay = root + scales[scale][scaleIndex];

  if (count % 4 === 0) {
    scaleIndex = 0;
  }

  // The note is scheduled to begin at the start of each cycle, 
  synth1.play(midiToFreq(midiNoteToPlay), 1.0, timeFromNow, 0.01);
  scaleIndex++;
  scaleIndex %= scales[scale].length;

  let bgIndex = sixteenth % rhythm.length;
  if (rhythm[bgIndex] === 1) {
    kickSound.play(timeFromNow);
  }

  sixteenth++;
  count++;
}

function mySoundLoop2(timeFromNow) {

  let midiNoteToPlay = root + 12 + scales[scale][scaleIndex];

  if (count % 8 === 0) {
    scaleIndex = random(0, 4);
  }

  // The note is scheduled to begin at the start of each cycle, 
  synth2.play(midiToFreq(midiNoteToPlay), 0.3, timeFromNow, .4);
  if (random() > 0.2) {
    scaleIndex += floor(random(-5, 5));
    scaleIndex %= scales[scale].length;
  }

  count++;
}



// from: https://github.com/computermusicdesign/euclidean-rhythm/blob/master/max-example/euclidSimple.js
function euclid( steps,  pulses, rotate){
	rotate += 1;
	rotate %= steps;
	let storedRhythm = []; //empty current track
	var bucket = 0;
	
	//fill track with rhythm
	for(var i=0;i< steps;i++){
		bucket += pulses;
		if(bucket >= steps) {
			bucket -= steps;
			storedRhythm.push(1);
		} else {
			storedRhythm.push(0);
		}
 	}

	//rotate
	if(rotate > 0) storedRhythm = rotateSeq(storedRhythm, steps, rotate);
	
	//send output visualization
	return storedRhythm;
}

//rotate a sequence
function rotateSeq(seq2, steps, rotate){
	var output = new Array(steps);
	var val = steps - rotate;
	for(var i=0;i<seq2.length;i++){
		output[i] = seq2[ Math.abs( (i+val) % seq2.length) ];
	}
	return output;
}