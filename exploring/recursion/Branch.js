class Branch {
    constructor(x, y, len, angle) {
        this.start = createVector(x, y);
        this.dir = p5.Vector.fromAngle(angle);
        this.end = p5.vector.add(this.start, p5.Vector.mult(this.dir, len));
    }

    show() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}