import {
    Square,
    L,
    BackwardsL,
    BackwardsZ,
    Z,
    Long,
    T,
} from "./tetris.js";
const table = document.getElementById('grid');
import { Grid } from "./grid.js";
let lines = document.getElementById('lines')
let scoreCounter = document.getElementById('score')
let image = document.getElementById('next-shape')

class Tetris {
    grid
    NUM_POINTS = 4;
    shape;
    nextShape;
    score = 0;
    lines = 0;
    level = 1;
    intervalId;
    hardDropPoints;
    constructor() {
        this.grid = new Grid()
        this.createShape()
        this.addNextShapeToGrid()
        this.autoDrop()
        lines.innerHTML = this.lines
    }
    createShape() {
        //creates a random number between 0 and 6
        let randomNum = Math.floor(Math.random() * 7);
        // let randomNum = 1 
        //creates a shape depending on the number
        switch (randomNum) {
            case 0:
                this.nextShape = new Square()
                break
            case 1:
                this.nextShape = new Long()
                break
            case 2:
                this.nextShape = new Z()
                break
            case 3:
                this.nextShape = new BackwardsZ()
                break
            case 4:
                this.nextShape = new L()
                break
            case 5:
                this.nextShape = new BackwardsL()
                break
            case 6:
                this.nextShape = new T()
                break
        }
        image.src = this.nextShape.image
    }
    addNextShapeToGrid() {
        if(!this.grid.arePointsValid(this.nextShape.points)){
            // add alert to say player has lost
            console.log('you have lost')
            clearInterval(this.intervalId)
            return;
        }
        this.grid.setPoints(this.nextShape.points, this.nextShape.color)
        this.shape = this.nextShape
        this.createShape()
    }
    

    moveHorizontally(d) {
        let points = this.shape.moveShapeHorizontally(d);
        if (this.grid.arePointsValid(points)) {
            this.grid.setPoints(points, this.shape.color)
            this.shape.setPoints(points)
        }
    }

    moveVertically() {
        let points = this.shape.moveShapeVertically()
        //collision occured
        if (!this.grid.arePointsValid(points)) {
            this.grid.addToGrid(this.shape.points);
            let num = this.grid.numLinesFull(this.shape.points)
            if (num > 0) {
                this.calculateScore(num)
                this.lines += num
                lines.innerHTML = this.lines;
                this.level = Math.floor(this.lines / 10) + 1
                clearInterval(this.intervalId)
                this.autoDrop()
            } 
            this.addNextShapeToGrid();
            return;
        }
        this.score += 1 
        this.grid.setPoints(points, this.shape.color)
        this.shape.setPoints(points);
        scoreCounter.innerHTML = this.score
    }

    rotate() {
        let points = this.shape.rotate()
        if (this.grid.arePointsValid(points)) {
            this.grid.setPoints(points, this.shape.color)
            this.shape.setPoints(points)
        }
    }
    hardDrop() {
        //drops the shape to its hardDrop position
        let points = this.grid.setPointToHardDrop(this.shape.color)
        let distance = points[0][1] - this.shape.points[0][1]
        this.score += 2* distance
        let num = this.grid.numLinesFull(points);
        if (num > 0) {
            this.calculateScore(num)
            this.lines += num;
            lines.innerHTML = this.lines;
            this.level = Math.floor(this.lines / 10) + 1;
            clearInterval(this.intervalId);
            this.autoDrop();
        }
        this.addNextShapeToGrid();
    }
    calculateScore(num) {
        //calculates num of points score when a line is completed
        switch (num) {
            case 1:
                this.score += (40 * this.level)
                break
            case 2:
                this.score += (100 * this.level)
                break
            case 3:
                this.score += (300 * this.level)
                break
            case 4:
                this.score += (1200 * this.level)
                break
        }
    }
    autoDrop() {
        //drops the block automatically at a set interval.
        // Interval changes each level
        let timeout;
        switch (this.level) {
            case 1:
                timeout = 800
                break
            case 2:
                timeout = 717
                break
            case 3:
                timeout = 633
                break
            case 4:
                timeout = 550
                break
            case 5:
                timeout = 467
                break
            case 6:
                timeout = 383
                break
            case 7:
                timeout = 300
                break
            case 8:
                timeout = 217
                break
            default:
                timeout= 133
        }
        this.intervalId = setInterval(()=>this.moveVertically(), timeout)
    }

}
export {Tetris}