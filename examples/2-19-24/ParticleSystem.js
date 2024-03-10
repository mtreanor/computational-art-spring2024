class ParticleSystem {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];

        this.active = true;

        this.radius = random(50, 100);
        this.speed = random(-1, -2);

        this.hue = random(360);
    }

    update() {
        // If active, create a particle every time update is called
        if (this.active) {
            this.particles.push(new Particle(this.pos.x, this.pos.y, this.hue));
        }

        // Update and display all the particle system's particles
        for (let particle of this.particles) {
            particle.update();
            particle.show();
        }

        // If the particle's lifetime reached zero, remove it from the system's array
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
    }
}