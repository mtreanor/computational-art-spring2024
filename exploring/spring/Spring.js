class Spring {
    constructor(d1, d2) {
        this.dot1 = d1;
        this.dot2 = d2;
        this.restLength = 15;
    }

    update() {
        let vec = p5.Vector.sub(this.dot2.pos, this.dot1.pos);
        let x = vec.mag() - this.restLength;
        vec.normalize();
        let k = 0.1;
        vec.mult(x * k);
        this.dot1.addForce(vec.mult(1));
        this.dot2.addForce(vec.mult(-1));
    }

    show() {
        // line(this.dot1.pos.x, this.dot1.pos.y, this.dot2.pos.x, this.dot2.pos.y);
    }
}