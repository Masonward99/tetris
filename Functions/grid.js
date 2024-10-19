let table = document.getElementById('grid')
let nextShape = document.getElementById('next-shape')

class Grid {
    arrayGrid;
    points;
    hardDropPoints;

    constructor() {
        table.innerHTML = ''
        this.arrayGrid = new Array(10)
        for (let i = 0; i < 20; i++) {
            const row = table.insertRow(i);
            let arrayRow = new Array(10).fill(0);
            this.arrayGrid[i] = arrayRow;
            for (let j = 0; j < 10; j++) {
                row.insertCell(j);
            }
        }
    }

    arePointsValid(points) {
        for (let i = 0; i < points.length; i++){
            let x = points[i][0]
            let y = points[i][1]
            if (x > 9 || x < 0) {
                return false
            }
            if (y > 19 || y < 0) {
                return false
            }
            if (this.arrayGrid[y][x] != 0) {
                return false
            }
        }
        return true
    }
    setPoints(points, color) {
        if (this.points) {
            this.removeShapeFromTable(this.points)
        }
        this.points = points
        this.hardDrop(this.points)
        this.addShapeToTable(this.points, color)
    }

    numLinesFull(points) {
        let arrayOfYcoordinates = points.map(e => e[1])
        let uniqueYCoords = [...new Set(arrayOfYcoordinates)]
        uniqueYCoords.sort((a, b) => a - b);
        let count = 0 
        for (let i = 0; i < uniqueYCoords.length; i++){
            if (this.arrayGrid[uniqueYCoords[i]].filter((e) => e == 1).length == 10) {
                count += 1
                this.arrayGrid.splice(uniqueYCoords[i], 1)
                table.deleteRow(uniqueYCoords[i])
                this.addRow()
            }
        }
        return count
    }

    addRow() {
        let row = table.insertRow(0)
        let array = new Array(10)
        array.fill(0)
        this.arrayGrid.unshift(array)
        for (let i = 0; i < 10 ; i++){
            let cell = row.insertCell(i)
        }
    }

    addShapeToTable(points, color) {
        for (let i = 0; i < points.length; i++) {
            table.rows[points[i][1]].cells[points[i][0]].style.backgroundColor = color;
        }
    }
    removeShapeFromTable(points) {
        for (let i = 0; i < points.length; i++) {
            table.rows[points[i][1]].cells[points[i][0]].style.backgroundColor = 'white';
        }
    }

    addToGrid(points) {
        for (let i = 0; i < points.length; i++){
            this.arrayGrid[points[i][1]][points[i][0]] = 1
        }
        this.points = null
        this.hardDropPoints = null
    }

    hardDrop(points) {
        let minDistance = 20;
        let newPoints
        for (let i = 0; i < points.length; i++){
            // for each point calculate the distance to the next point below it
            let distance = 0
            if (points[i][1] == 19) {
                minDistance = 0
                break
            }
            for (let j = points[i][1] + 1; j < 20; j++){
                if (this.arrayGrid[j][points[i][0]] == 0) {
                    distance += 1;
                    if (j == 19) {
                        if (minDistance > distance) {
                            minDistance = distance
                        }
                    }
                } else {
                    if (minDistance > distance) {
                        minDistance = distance
                    }
                }
            }
        }
        newPoints = points.map((e) => [e[0], e[1] + minDistance])
        
        if (this.hardDropPoints) {
            this.removeShapeFromTable(this.hardDropPoints)
        }
        this.hardDropPoints = newPoints
        this.addShapeToTable(newPoints, 'black')
        return newPoints
        
    }

    setPointToHardDrop(color) {
        let points = this.hardDropPoints
        this.removeShapeFromTable(this.points)
        this.addShapeToTable(this.hardDropPoints, color)
        this.addToGrid(this.hardDropPoints)
        return points
    }
    showNextShape(points, color) {
        console.log(this.arrayGrid)
        let translated = points.map(e => [e[0] - 3, e[1]])
        nextShape.innerHTML = ''
        for (let i = 0; i < 2; i++){
            let row = nextShape.insertRow(i)
            for (let j = 0; j < 4; j++){
                row.insertCell(j)
            }
        }
        for (let i = 0; i < translated.length; i++){
            nextShape.rows[translated[i][1]].cells[translated[i][0]].style.backgroundColor = color
        }
    }
}


export {Grid}