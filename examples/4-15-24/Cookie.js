class Cookie {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));

        this.size = random(10, 100);

        this.hue = 100;

        this.currentZone = this.computeZone();

        this.osc = new p5.Oscillator('sine');
        this.osc.start();
    }

    computeZone() {
        let zone = floor(map(this.pos.x, 0, width, 0, scales[scale].length));
        return zone;
    }

    update() {
        this.pos.add(this.vel);
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
            let note = root;
            // synth.play(midiToFreq(note), 0.8, 0, 0.1);
        }   
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
            // let note = root + floor(map(this.pos.x, 0, width, 0, scales[scale].length));
            // note += floor(map(this.size, 100, 10, -2, 2)) * 12;
            // synth.play(midiToFreq(note), 0.8, 0, 0.1);
        }

        let zone = this.computeZone();
        if (zone !== this.currentZone) {
            let note = root + floor(map(this.pos.x, 0, width, 0, scales[scale].length));
            note += floor(map(this.size, 100, 10, -2, 2)) * 12;
            synth.play(midiToFreq(note), 0.8, 0, 0.1);

            this.osc.freq(midiToFreq(note));

            this.currentZone = zone;
        }
    }
    show() {
        fill(this.hue, 60, 100);
        ellipse(this.pos.x, this.pos.y, this.size);
        // image(cookieImage, this.pos.x, this.pos.y);
    }
}