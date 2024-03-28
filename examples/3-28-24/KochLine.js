class KochLine {
    constructor(start, end) {
        this.start = start;
        this.end = end;

        this.initialStart = this.start.copy();
        this.initialEnd = this.end.copy();

        this.offset = random(2 * PI);
    }

    update() {
        this.start.x = this.initialStart.x + cos(frameCount * 0.1 + this.offset) * 5;
        this.start.y = this.initialStart.y + sin(frameCount * 0.1 + this.offset) * 5;

        this.end.x = this.initialEnd.x + cos(frameCount * 0.02 + this.offset) * 5;
        this.end.y = this.initialEnd.y + sin(frameCount * 0.02 + this.offset) * 5;
    }

    show() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

    createKochLinePoints() {
        this.a = this.start.copy();
        this.e = this.end.copy();
        let dirFromAtoE = p5.Vector.sub(this.e, this.a);
        let distanceFromAtoE = dirFromAtoE.mag();
        dirFromAtoE.setMag(distanceFromAtoE/3);
        this.b = p5.Vector.add(this.a, dirFromAtoE);
        this.d = p5.Vector.add(this.b, dirFromAtoE);
        dirFromAtoE.rotate(radians(-60));
        this.c = p5.Vector.add(this.b, dirFromAtoE);
    }
}