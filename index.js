function Snake (x, y) {
  this.x = x
  this.y = y
  this.direction = null

  this.draw = function() {
    var snakeCell = document.querySelector(`.row${this.y} .col${this.x}`)
    snakeCell.classList.add('snake')
  }

  this.updateCoords = function() {
    switch(this.direction) {
      case 'up' :
        this.y--
        break
      case 'left' :
        this.x--
        break
      case 'down' :
        this.y++
        break
      case 'right' :
        this.x++
      break
    }
  }

  this.erase = function() {
    var snakeCell = document.querySelector('.snake')
    snakeCell.classList.remove('snake')
  }

  this.move = function() {
    this.updateCoords()
    this.erase()
    this.draw()
  }
}

// Elementos del juego
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
  console.log(snake.direction)
  snake.move()
})

