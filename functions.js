import { Tetris } from "./Functions/game.js"

window.addEventListener('keydown', function (event) {
    // event listener to get user input
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case 'ArrowLeft':
            game.moveHorizontally(-1)
            break
        case 'ArrowRight':
            game.moveHorizontally(1)
            break
        case 'ArrowDown':
            game.moveVertically()
            break
        case 'ArrowUp':
            game.rotate()
            break
        case " ":
            game.hardDrop()
            break
        default:
            return;
    }
})

let game = new Tetris()
