class Vehicle {
    constructor(x, y, target) {
        // For more detailed comments on how pos, vel, acc, and addForce work
        // see the Dot example from 2-15-24.

        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);

        this.target = target;
        this.maxSpeed = 2;
        this.maxForce = 0.05;

        this.dim = 15 + random(5);

        this.hue = 170;
        this.saturation = 70;
        this.brightness = 100;

        this.mass = 1;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    seek(t, arrive) {
        // 1. Compute the desired velocity and set it to be maxSpeed
        let desired = p5.Vector.sub(t, this.pos);

        let distance = desired.mag();

        // If the caller passed in true, and we are close to the target, scale our
        // speed based on the distance.
        if (arrive && distance < 100) {
            let speed = map(distance, 0, 100, 0, this.maxSpeed);
            desired.setMag(speed);
        } else {
            desired.setMag(this.maxSpeed);
        }

        // 2. Compute the force by seeing the the change is in velocities
        // to move from the current velocity to the desired velocity and limit
        // its magnitude.
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        // 3. Apple this "steering" force. 
        this.addForce(steer);
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }


    update() {
        // What actions is this agent pursuing?
        this.seek(this.target);

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel); // Apply velocity to position

        this.wrap();

        this.acc.set(0,0);
    }

    show() {
        push();

        translate(this.pos.x, this.pos.y);

        // Heading is the amount of rotation
        let angle = this.vel.heading();
        rotate(angle);

        fill(this.hue, this.saturation, this.brightness);

        // Draw a triangle
        beginShape();
        vertex(this.dim, 0);
        vertex(-this.dim, this.dim/2);
        vertex(-this.dim, -this.dim/2);
        endShape(CLOSE);

        pop();
    }
}