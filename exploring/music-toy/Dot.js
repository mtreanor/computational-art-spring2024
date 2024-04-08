class Dot {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.hue = random(360);

        this.mass = 1;

        this.maxSpeed = 5;

        // Make the radius have something to do with the mass.
        this.radius = 10 + sqrt(this.mass) * 10;

        this.active = false;
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }


    update() {
        if (this.active) {        
            // FORCES
            this.addForce(downwardGravity);

            // MOVEMENT
            this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
            this.vel.limit(this.maxSpeed); // This limits the magnitude of the velocity vector
            this.pos.add(this.vel); // Apply velocity to position

            this.wrap();

            this.acc.mult(0);
        }
    }

    show() {
        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 50, 100, 0.5);
        ellipse(0, 0, this.radius * 2);

        pop();
    }
}