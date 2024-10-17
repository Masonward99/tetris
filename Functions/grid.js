let table = document.getElementById('grid')

class Grid {
    arrayGrid;
    constructor() {
        this.arrayGrid = new Array(10)
        for (let i = 0; i < 20; i++) {
            const row = table.insertRow(i);
            let arrayRow = new Array(10).fill(0);
            this.arrayGrid[i] = arrayRow;
            for (let j = 0; j < 10; j++) {
                const cell = row.insertCell(j);
            }
        }
    }
    isPointValid(x, y) {
        if (x > 9 || x < 0) {
            return false
        }
        if (y > 19 || y < 0) {
            return false
        }
        if (this.arrayGrid[y][x] != 0) {
            return false
        }
        return true
    }
    isColission(x, y) {
        if (this.arrayGrid[y][x] != 0) {
            return true;
        }
        return false;
    }
    numLinesFull(points) {
        let arrayOfYcoordinates = points.map(e => e[1])
        let uniqueYCoords = [...new Set(arrayOfYcoordinates)]
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
        console.log(points)
        for (let i = 0; i < points.length; i++) {
            table.rows[points[i][1]].cells[points[i][0]].style.backgroundColor = color;
        }
    }
    removeShapeFromTable(points) {
        for (let i = 0; i < points.length; i++) {
            table.rows[points[i][1]].cells[points[i][0]].style.backgroundColor = 'grey';
        }
    }
    addToGrid(points) {
        for (let i = 0; i < points.length; i++){
            this.arrayGrid[points[i][1]][points[i][0]] = 1
        }
    }
    hardDrop(points, color, oldPoints) {
        if (oldPoints) {
            this.removeShapeFromTable(oldPoints)
        }
        let pointsCopy = [...points]
        pointsCopy.sort((a, b) =>  b[1] - a[1])
        let filtered = pointsCopy.filter((item, index, self) => 
            self.findIndex(subArr => subArr[0]=== item[0]) === index
        )
        let minDistance = 20;
        let newPoints
        for (let i = 0; i < filtered.length; i++){
            let distance = 0
            for (let j = filtered[i][1] + 1; j < 20; j++){
                if (this.arrayGrid[j][filtered[i][0]] == 0) {
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
        if (minDistance != 20) {
             newPoints = points.map((e) => [e[0], e[1] + minDistance])
        } else {
            newPoints = points
        }
        
        
        if (minDistance > 1) {
            this.addShapeToTable(newPoints, 'black')
        } else {
            this.addShapeToTable(points, color)
        }
        return newPoints
        
    }
}

export {Grid}