import { Snake } from "./snake.js"
import { Food } from "./food.js"

// Audios

var eatingSound = new Audio("./assets/music/eating.wav")
var music = new Audio("./assets/music/background-music.mp3")
music.volume = 0.3
//music.play()

// Elementos del juego
var food = new Food(10, 3)
food.draw()
var snake = new Snake(10, 10)
snake.draw()

// Detección de teclado
window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'w':
    snake.direction = 'up'
    break
    case 'a':
    snake.direction = 'left'
    break
    case 's':
    snake.direction = 'down'
    break
    case 'd':
    snake.direction = 'right'
    break
  }
})

// Game loop
var gameSpeed = 400
var timerId = setInterval(gameLoop, gameSpeed)

function gameLoop() {
  snake.move()
  var snakeHead = snake.coords[0]
  if(snakeHead.x === food.x && snakeHead.y === food.y) {
    eatingSound.play()
    snake.isEating = true
    console.log('ÑAM ÑAM!')
    food.respawn()
    gameSpeed *= 0.8
    clearInterval(timerId)
    timerId = setInterval(gameLoop, gameSpeed)
  }
  if(snake.isDead === true) {
    clearInterval(timerId)
    alert('GAME OVER')
  }
}

