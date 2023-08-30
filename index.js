function Snake (x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    var snakeCell = document.querySelector(`.row${this.x} .col${this.y}`)
    snakeCell.classList.add('snake')
  }
}

var snake = new Snake(10, 10)
snake.draw()