class Agent {
    constructor(x, y, target) {
        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);

        this.len = 10;

        this.maxSpeed = 2;
        this.maxForce = 0.01;

        this.target = target;
    }

    addForce(force) {
        this.acc.add(force);
    }

    driveToTarget() {
        let desired = p5.Vector.sub(this.target, this.pos);

        let speed = this.maxSpeed;
        if (desired.mag() < 200) {
            speed = map(desired.mag(), 0, 200, 0, this.maxSpeed);
        } 
        desired.setMag(speed);

        let steer = p5.Vector.sub(desired, this.vel);

        steer.limit(this.maxForce);

        this.addForce(steer);
    }

    edges() {
        // bounce off the edges
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
            this.pos.x += this.vel.x;
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
            this.pos.y += this.vel.y;
        }
    }

    update() {

        // this.addForce(gravity);
        this.driveToTarget();

        this.vel.add(this.acc);
        this.vel.limit(1.5);
        this.pos.add(this.vel);

        // this.edges();

        this.acc.set(0, 0);
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(p5.Vector.heading(this.vel));
        triangle(-this.len, -this.len/2, -this.len, this.len/2, this.len, 0);
        pop();
    }
}