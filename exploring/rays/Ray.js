class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = createVector(1, 0);
        this.initialHeading = angle;
        this.setAngle(angle);

        this.length = random(100, 300);
    }

    setAngle(angle) {
        this.dir = p5.Vector.fromAngle(angle);
    }


    show() {
        push();
        stroke(0, 0, 0);
        translate(this.pos.x, this.pos.y);
        rotate(this.dir.heading());
        stroke(0, 0, 0, 0.05);
        let endPoint = p5.Vector.mult(createVector(1, 0), this.length);
        line(0, 0, endPoint.x, endPoint.y);
        pop();
    }
}