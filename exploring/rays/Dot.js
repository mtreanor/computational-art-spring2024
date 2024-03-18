class Dot {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.hue = 0;

        this.mass = 1;

        this.fov = 20;

        // Make the radius have something to do with the mass.
        this.radius = 5 + sqrt(this.mass);

        this.maxSpeed = 1;
        this.maxForce = random(0.01, 0.05);

        this.rays = [];
        this.range = floor(this.fov/2);
        for (let i = -this.range; i < this.range; i++) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }

        this.forwardDistance = 30;
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
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
        let force = p5.Vector.sub(desired, this.vel);
        force.limit(this.maxForce);

        // 3. Apple this "steering" force. 
        this.addForce(force);
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    update() {
        // Rays
        for (let ray of this.rays) {
            ray.setAngle(ray.initialHeading + this.vel.heading());
        }

        let roadPointDistance = Infinity;
        let roadPoint;

        let closestPoint;
        let closestPointDistance = Infinity;

        for (let i = 0; i < road.points.length - 1; i++) {
            let future = p5.Vector.add(this.pos, p5.Vector.mult(p5.Vector.normalize(this.vel), this.forwardDistance));

            let start = road.points[i];
            let end = road.points[i+1];

            // let mouse = createVector(mouseX, mouseY);
            let lineSegment = p5.Vector.sub(end, start);

            // project a onto b
            let a = p5.Vector.sub(future, start);
            let b = lineSegment.copy();
            // let theta = p5.Vector.angleBetween(a, b);
            // θ = cos-1 [ (a · b) / (|a| |b|) ].
            let val = a.dot(b) / (a.mag() * b.mag());
            let theta = acos(val);
            let d = a.mag() * cos(theta);
            b.setMag(d);

            let normalPoint = p5.Vector.add(start, b);

            let aToNormal = p5.Vector.sub(normalPoint, start);
            let bToNormal = p5.Vector.sub(normalPoint, end);
            if (floor(aToNormal.mag() + bToNormal.mag()) === floor(lineSegment.mag())) {
                let distToNormal = dist(normalPoint.x, normalPoint.y, future.x, future.y);
                if (roadPointDistance > distToNormal) {
                    roadPointDistance = distToNormal;
                    roadPoint = normalPoint;
                }

                // push();
                // fill(0, 100, 100);
                // ellipse(roadPoint.x, roadPoint.y, 5, 5);
                // pop();
            }

            let distToStart = dist(start.x, start.y, future.x, future.y);
            if (closestPointDistance > distToStart) {
                closestPointDistance = distToStart;
                closestPoint = start;
            }
        }
        if (roadPoint) {
            this.seek(roadPoint);
        } else {
            this.seek(closestPoint);
        }



        // FORCES
        // this.addForce(createVector(-0.1, -.5));
        // this.addForce(createVector(sqrt(frameCount), -.5));

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(this.maxSpeed); // This limits the magnitude of the velocity vector
        this.pos.add(this.vel); // Apply velocity to position

        // this.wrap();

        this.acc.mult(0);
    }

    show() {
        for (let ray of this.rays) {
            ray.show();
        }

        // push();

        // translate(this.pos.x, this.pos.y);

        // // Heading is the amount of rotation
        // let angle = this.vel.heading();
        // rotate(angle);

        // // Draw a triangle
        // beginShape();
        // vertex(this.radius, 0);
        // vertex(-this.radius, this.radius/2);
        // vertex(-this.radius, -this.radius/2);
        // endShape(CLOSE);

        // pop();
    }
}