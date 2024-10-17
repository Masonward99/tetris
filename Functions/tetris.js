class Shape {
    color;
    points;
    hardDropPoints;
    moveShapeHorizontally(d) {
        // calculate new points if moved horizontally
        return this.points.map((e) => [e[0] + d, e[1]])
    }
    moveShapeVertically() {
        //calculates shapes position if moved vertically
        return this.points.map((e) => [e[0], e[1] + 1])
    }
    setPoints(points) {
        this.points = points
    }
    setHardDropPoints( points) {
        this.hardDropPoints = points
    }
}
class Square extends Shape {
    constructor() {
        super()
        this.points = [[4, 0], [5, 0], [4, 1], [5, 1]]
        this.color='yellow'
    }
    rotate() {
        return this.points
    }
}

class Long extends Shape {
    direction = 'left'
    constructor() {
        super()
        this.points= [[3, 0], [4, 0], [5, 0], [6, 0]]
        this.color = 'blue'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction = 'up'
                return [
                    [points[0][0] + 2, points[0][1] - 1],
                    [points[1][0] + 1, points[1][1]],
                    [points[2][0] , points[2][1] + 1],
                    [points[3][0]  -1 , points[3][1] + 2]
                ]
            break
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] + 1, points[0][1] + 1],
                    [points[1][0], points[1][1]],
                    [points[2][0] - 1, points[2][1]  - 1],
                    [points[3][0] -2, points[3][1] - 2]
                ]
            case 'right':
                this.direction = 'down'
                return [
                    [points[0][0] - 1, points[0][1] + 2],
                    [points[1][0] , points[1][1] + 1],
                    [points[2][0] + 1, points[2][1] ],
                    [points[3][0] + 2, points[3][1] - 1],
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] -2, points[0][1] -2],
                    [points[1][0] -1, points[1][1] -1],
                    [points[2][0] , points[2][1] ],
                    [points[3][0] + 1, points[3][1] + 1],
                ];
        }
    }
}

class Z extends Shape {
    direction ='left'
    constructor() {
        super()
        this.points = 
            [
                [4, 1],
                [5, 1],
                [5, 0],
                [6, 0],
            ],
        this.color = 'green'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction ='up'
                return [
                    [points[0][0] + 1, points[0][1] -1],
                    [points[1][0], points[1][1]],
                    [points[2][0] + 1, points[2][1] + 1],
                    [points[3][0] , points[3][1] + 2],
                ];
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] + 1, points[0][1]],
                    [points[1][0], points[1][1] -1],
                    [points[2][0] - 1, points[2][1] ],
                    [points[3][0] - 2, points[3][1] - 1],
                ];
            case 'right':
                this.direction = 'down'
                return [
                    [points[0][0] , points[0][1] + 2],
                    [points[1][0] +1, points[1][1] + 1],
                    [points[2][0] , points[2][1] ],
                    [points[3][0] + 1, points[3][1] - 1],
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] -2, points[0][1] - 1],
                    [points[1][0] -1, points[1][1]],
                    [points[2][0] , points[2][1] - 1],
                    [points[3][0] +1, points[3][1]],
                ];
        }
        
    }
}

class BackwardsZ extends Shape{
    direction = 'left'
    constructor() {
        super()
        this.points = [
            [4, 0],
            [5, 0],
            [5, 1],
            [6, 1],
        ];
        this.color = 'red'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction = 'up'
                return [
                    [points[0][0] + 1, points[0][1]],
                    [points[1][0], points[1][1] + 1],
                    [points[2][0] - 1, points[2][1] ],
                    [points[3][0] - 2, points[3][1] + 1],
                ];
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] + 1, points[0][1] + 1],
                    [points[1][0], points[1][1]],
                    [points[2][0] + 1, points[2][1]  - 1],
                    [points[3][0] , points[3][1] - 2]
                ]
            case 'right':
                this.direction = 'down'
                return [
                    [points[0][0] - 2, points[0][1] + 1],
                    [points[1][0] -1, points[1][1]],
                    [points[2][0] , points[2][1] + 1],
                    [points[3][0] + 1, points[3][1] ],
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] , points[0][1] -2],
                    [points[1][0] + 1, points[1][1] -1],
                    [points[2][0] , points[2][1] ],
                    [points[3][0]  + 1, points[3][1] + 1],
                ];
        }
    }
}

class L extends Shape {
    direction = 'left'
    constructor() {
        super()
        this.points = [
            [4, 0],
            [4, 1],
            [5, 1],
            [6, 1],
        ];
        this.color = 'brown'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction = 'up'
                return [
                    [points[0][0] + 1, points[0][1] ],
                    [points[1][0], points[1][1] -1],
                    [points[2][0] - 1, points[2][1] ],
                    [points[3][0] - 2, points[3][1] + 1],
                ];
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] + 1, points[0][1] + 1],
                    [points[1][0] + 2, points[1][1]],
                    [points[2][0] + 1, points[2][1] - 1],
                    [points[3][0] , points[3][1] - 2],
                ];
            case 'right':
                this.direction ='down'
                return [
                    [points[0][0] -2, points[0][1] + 1],
                    [points[1][0] -1, points[1][1] + 2],
                    [points[2][0] , points[2][1] + 1],
                    [points[3][0] +1, points[3][1]],
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] , points[0][1] -2],
                    [points[1][0] -1, points[1][1] -1],
                    [points[2][0] , points[2][1] ],
                    [points[3][0] +1, points[3][1] +1],
                ];
        }
    }
}
class BackwardsL extends Shape {
    direction = 'left'
    constructor() {
        super()
        this.points = [
            [4, 1],
            [5, 1],
            [6, 1],
            [6, 0],
        ];
        this.color = 'orange'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction = 'up'
                return [
                    [points[0][0] + 2, points[0][1] + 1],
                    [points[1][0] + 1, points[1][1]],
                    [points[2][0] , points[2][1] - 1],
                    [points[3][0] - 1, points[3][1] ],
                ];
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] , points[0][1] -2],
                    [points[1][0] -1, points[1][1] - 1],
                    [points[2][0] - 2, points[2][1] ],
                    [points[3][0] - 1, points[3][1] +1]
                ];
            case 'right':
                this.direction = 'down'
                return [
                    [points[0][0] -1, points[0][1] ],
                    [points[1][0], points[1][1] + 1],
                    [points[2][0] +1, points[2][1] + 2],
                    [points[3][0] + 2, points[3][1] + 1]
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] - 1, points[0][1] + 1],
                    [points[1][0], points[1][1]],
                    [points[2][0] + 1, points[2][1] - 1],
                    [points[3][0] , points[3][1] - 2]
                ];
        }
    }
}
class T extends Shape {
    direction = 'left'
    constructor() {
        super()
        this.points = [
            [4, 0],
            [5, 0],
            [6, 0],
            [5, 1],
        ];
        this.color = 'purple'
    }
    rotate() {
        let points = this.points
        switch (this.direction) {
            case 'left':
                this.direction = 'up'
                return [
                    [points[0][0] , points[0][1] + 2],
                    [points[1][0] -1, points[1][1] + 1],
                    [points[2][0] - 2 , points[2][1] ],
                    [points[3][0] , points[3][1] ],
                ];
            case 'up':
                this.direction = 'right'
                return [
                    [points[0][0] + 2, points[0][1] -1],
                    [points[1][0] + 1, points[1][1]],
                    [points[2][0] , points[2][1] + 1],
                    [points[3][0] , points[3][1] - 1],
                ];
            case 'right':
                this.direction = 'down'
                return [
                    [points[0][0] - 1, points[0][1] - 1],
                    [points[1][0], points[1][1]],
                    [points[2][0] +1, points[2][1] +1],
                    [points[3][0] -1, points[3][1] +1],
                ];
            case 'down':
                this.direction = 'left'
                return [
                    [points[0][0] -1, points[0][1]],
                    [points[1][0] , points[1][1] -1],
                    [points[2][0] + 1, points[2][1] - 2 ],
                    [points[3][0] + 1, points[3][1] ],
                ];
        }
    }
}
export {Square, Long, Z, BackwardsZ, L, T, BackwardsL }