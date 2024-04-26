class State_1 {
    constructor() {

    }

    draw() {
        background(0, 0, 100);

        fill(100, 50, 100);
        ellipse(100, height/2, 100);

        fill(0);
        text("STATE 1", 200, 100);
    }

    mousePressed() {
        currentState = state_2;
    }
}