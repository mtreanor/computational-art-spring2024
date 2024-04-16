class Cookie {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(1, 2), random(1, 2));
        this.vel.x *= (random() > 0.5) ? -1: 1;
        this.vel.y *= (random() > 0.5) ? -1: 1;

        this.size = random(0.8, 1.2);

        this.hue = random(360);

        this.currentZone = this.computeZone();

        this.thetaOffset = random(2 * PI);

    }

    computeZone() {
        let zone = floor(map(this.pos.x, 0, width, 0, scales[whichScale].length));
        return zone;
    }

    update() {
        if (this.osc === undefined) {
            let oscType = random(["sine", "triangle", "square", "sawtooth"]);
            this.osc = new p5.Oscillator(oscType);
            reverb.process(this.osc, 10, 2);
            this.osc.start();
        }
        this.osc.amp(min(0.7, abs(sin(this.thetaOffset + frameCount * 0.01))));

        this.pos.add(this.vel);
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }   
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }

        let zone = this.computeZone();
        if (zone !== this.currentZone) {
            let note = root + floor(map(this.pos.x, 0, width, 0, scales[whichScale].length));
            note += floor(map(this.size, 1.2, 0.8, -2, 2)) * 12;
            synth.play(midiToFreq(note), 0.8, 0, 0.1);

            this.osc.freq(midiToFreq(note));

            this.currentZone = zone;
        }
    }
    show() {
        push();
        translate(this.pos.x, this.pos.y);
        tint(this.hue, 50, 100);
        scale(this.size);
        image(cookieImage, 0, 0);
        pop();
    }
}