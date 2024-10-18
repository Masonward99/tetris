class Shape {
    color;
    points;
    image
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
}
class Square extends Shape {
    constructor() {
        super()
        this.points = [[4, 0], [5, 0], [4, 1], [5, 1]]
        this.color = 'yellow'
        this.image = '../square.svg'
    }
    rotate() {
        return this.points
    }
}

class Long extends Shape {
    count = 0
    constructor() {
        super()
        this.points= [[3, 0], [4, 0], [5, 0], [6, 0]]
        this.color = 'blue'
        this.image = '../long.svg'
    }
    rotate() {
        this.count += 1
        let points = this.points
        let x = 0
        let y = 0
        for (let i = 0; i < points.length; i++){
            y += points[i][1]
            x +=points[i][0]
        }
        let centreX = x / 4
        let centreY = y / 4
        let transformedPoints = points.map(e => [e[0] - centreX, e[1] - centreY])
        let rotated = transformedPoints.map(e => 
            [
                e[0] * Math.cos(Math.PI / 2) - e[1] * Math.sin(Math.PI / 2),
                e[0] * Math.sin(Math.PI / 2) + e[1] * Math.cos(Math.PI / 2)
            ]
        )
        if (this.count % 2 == 0) {
            return rotated.map((e) => [
                Math.floor(e[0] + centreX),
                Math.floor(e[1] + centreY),
            ]);
        }
        return rotated.map(e=> [Math.round(e[0]+ centreX), Math.round(e[1]+ centreY)])
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
        this.image = '../Z.svg'
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
        this.image = '../backwardsZ.svg'
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
        this.image = '../L.svg'
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
        this.image = '../backwardsL.svg'
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
        this.image = '../T.svg'
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