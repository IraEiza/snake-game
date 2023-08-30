function Snake (x, y) {
  var self = this
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
        if(this.y === 1) {
          this.y = 20
        } else {
          this.y--
        }
        break
      case 'left' :
        if(this.x === 1) {
          this.x = 20
        } else {
          this.x--
        }
        break
      case 'down' :
        if(this.y === 20) {
          this.y = 1
        } else {
          this.y++
        }
        break
      case 'right' :
        if(this.x === 20) {
          this.x = 1
        } else {
          this.x++
        }
      break
    }
  }

  this.erase = function() {
    var snakeCell = document.querySelector('.snake')
    snakeCell.classList.remove('snake')
  }

  this.move = function() {
    self.updateCoords()
    self.erase()
    self.draw()
  }
}

export { Snake }