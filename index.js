import { Snake } from "./snake.js"
import { Food } from "./food.js"

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
var timerId = setInterval(snake.move, 400)

