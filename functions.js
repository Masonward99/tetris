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
            event.preventDefault()
            game.moveVertically()
            break
        case 'ArrowUp':
            event.preventDefault()
            game.rotate()
            break
        case " ":
            if (game.hasEnded ) {
                game = new Tetris(false)
            } else if (game.isFirst) {
                game.startGame()
            }
            else {
                game.hardDrop()
            }
            break
        case 'p':
            game.pause()
            break
        default:
            return;
    }
})


let game = new Tetris(true)
