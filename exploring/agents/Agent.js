class Agent {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);

        this.len = 10;

        this.target = createVector(100, height/3);
    }

    addForce(force) {
        this.acc.add(force);
    }

    driveToTarget() {
        let desired = p5.Vector.sub(this.target, this.pos);

        let steer = p5.Vector.sub(desired, this.vel);
        steer.normalize();
        steer.mult(0.1);

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
        // this.driveToTarget();

        this.vel.add(this.acc);
        this.vel.limit(2);
        this.pos.add(this.vel);

        this.edges();

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