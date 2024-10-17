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
    }
    addNextShapeToGrid() {
        for (let i = 0; i < this.NUM_POINTS; i++){
            if (!this.grid.isPointValid(this.nextShape.points[i][0], this.nextShape.points[i][1])) {
                // add alert to say player has lost
                console.log('you have lost')
                clearInterval(this.intervalId)
                return;
            }
        }
        this.grid.addShapeToTable(this.nextShape.points, this.nextShape.color)
        this.shape = this.nextShape
        let hardDropPoints = this.grid.hardDrop(this.shape.points)
        this.shape.setHardDropPoints(hardDropPoints)
        this.createShape()
    }
    

    moveHorizontally(d) {
        let points = this.shape.moveShapeHorizontally(d);
        for (let i = 0; i < this.NUM_POINTS; i++){
            if (!this.grid.isPointValid(points[i][0], points[i][1])) {
                return;
            }
        }
        this.grid.removeShapeFromTable(this.shape.points)
        this.shape.setPoints(points)
        this.grid.addShapeToTable(this.shape.points, this.shape.color)
        let oldPoints = this.shape.hardDropPoints
        let  hardDropPoints= this.grid.hardDrop(this.shape.points, this.shape.color, oldPoints)
        this.shape.setHardDropPoints(hardDropPoints)
    }

    moveVertically() {
        let points = this.shape.moveShapeVertically()
        for (let i = 0; i < this.NUM_POINTS; i++){
            //collision occured
            if (!this.grid.isPointValid(points[i][0], points[i][1])) {
                this.grid.addToGrid(this.shape.points);
                let num = this.grid.numLinesFull(this.shape.points)
                if (num > 0) {
                    this.lines += num
                    lines.innerHTML = this.lines;
                    this.level = Math.floor(this.lines / 10) + 1
                    clearInterval(this.intervalId)
                    this.autoDrop()
                } 
                this.addNextShapeToGrid();
                return;
            }
        }
        this.grid.removeShapeFromTable(this.shape.points);
        this.shape.setPoints(points);
        this.grid.addShapeToTable(this.shape.points, this.shape.color);
    }
    rotate() {
        let points = this.shape.rotate()
        for (let i = 0; i < this.NUM_POINTS; i++){
            if (!this.grid.isPointValid(points[i][0], points[i][1])) {
                return;
            }
        }
        this.grid.removeShapeFromTable(this.shape.points);
        this.shape.setPoints(points);
        this.grid.addShapeToTable(this.shape.points, this.shape.color);
        let oldPoints = this.shape.hardDropPoints;
        let hardDropPoints = this.grid.hardDrop(
            this.shape.points,
            this.shape.color,
            oldPoints
        );
        this.shape.setHardDropPoints(hardDropPoints);
    }

    autoDrop() {
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