class Cell {
    constructor(indexX, indexY, alive) {
        this.indexX = indexX;
        this.indexY = indexY;

        this.alive = alive;

        this.aliveCount  = 0;
    }

    getLiveNeighborCount() {
        let count = 0;
        if (grid[this.indexX-1][this.indexY-1].alive) count++;
        if (grid[this.indexX][this.indexY-1].alive) count++;
        if (grid[this.indexX+1][this.indexY-1].alive) count++;

        if (grid[this.indexX-1][this.indexY].alive) count++;
        if (grid[this.indexX+1][this.indexY].alive) count++;

        if (grid[this.indexX-1][this.indexY+1].alive) count++;
        if (grid[this.indexX][this.indexY+1].alive) count++;
        if (grid[this.indexX+1][this.indexY+1].alive) count++;
        return count;
    }

    nextState() {
        let liveNeighborCount = this.getLiveNeighborCount();

        if (this.alive) {
            if (liveNeighborCount < 2) {
                // A live cell dies if it has fewer than two live neighbors.
                return false;
            }
            if (liveNeighborCount === 2 || liveNeighborCount === 3) {
                // A live cell with two or three live neighbors lives on to the next generation.
                return true;
            }
            if (liveNeighborCount > 3) {
                // A live cell with more than three live neighbors dies.
                return false;
            }
        } else {
            // A dead cell will be brought back to live if it has exactly three live neighbors.
            if (liveNeighborCount === 3) {
                return true;
            }
        }
        // console.log("Game of life rule not applied");
        return this.alive;
    }

    show() {
        if (this.alive) {
            fill(0, 0, 100);
        } else {
            fill(0, 0, 0);
        }
        fill((200 + this.aliveCount) % 360, 60, 100);
        stroke((230+this.aliveCount) % 360, 90, 100, 0.3);
        strokeWeight(5);
        let x = this.indexX * cellWidth;
        let offsetX = map(this.indexX, 0, grid.length, 0, 2 * PI);
        x += cos(offsetX + frameCount * 0.1) * 2;
        // x += 2*cos(frameCount*0.05 + sin(frameCount * 0.01)*3*PI*this.indexX/grid.length);
        let y = this.indexY * cellHeight;
        let offsetY = map(this.indexY, 0, grid[this.indexX].length, 0, 2 * PI);
        y += sin(offsetY + frameCount * 0.05) * 2;
        // y += 2*sin(frameCount*0.05 + sin(frameCount * 0.01)*3*PI*this.indexX/grid[0].length);
        rect(x, y, cellWidth, cellHeight);
    }
}