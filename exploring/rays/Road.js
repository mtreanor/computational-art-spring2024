class Road {
    constructor() {
        let padding = 10;//width/8;
        let numPoints = 10;
        let h = 50;
        this.points = [];
        for (let i = 0; i < numPoints; i++) {
            let x = map(i, 0, numPoints - 1, padding, width - padding);
            let y = height/2 + sin(i / (numPoints - 1) * TWO_PI) * h;
            this.points.push(createVector(x, y));
        }
    }

    show() {
        push();
        noFill();
        beginShape();
        let i = 0;
        for (let point of this.points) {
            point.y = height/2 + sin((frameCount / 300) + i / (this.points.length - 1) * TWO_PI) * 50;
            ellipse(point.x, point.y, 10, 10);
            vertex(point.x, point.y);
            i++;
        }
        endShape();
        pop();
    }
}