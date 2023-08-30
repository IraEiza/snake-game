function Snake (x, y) {
  var self = this
  this.coords = [{x: x, y: y}]
  this.direction = null
  this.isEating = false

  this.draw = function() {
    this.coords.forEach(function(cellCoord) {
      // cellCoord = {x: 10, y: 10}
      var snakeCell = document.querySelector(`.row${cellCoord.y} .col${cellCoord.x}`)
      snakeCell.classList.add('snake')
    })
  }

  this.updateCoords = function() {
    // Ejemplo: this.coords = [{x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}]
    var copyOfFirstCell = {x: this.coords[0].x, y: this.coords[0].y}
    // copyOfFirstCell = {x: 1, y: 5}

    switch(this.direction) {
      case 'up' :
        if(copyOfFirstCell.y === 1) {
          copyOfFirstCell.y = 20
        } else {
          copyOfFirstCell.y--
        }
        // copyOfFirstCell = {x: 1, y: 4}
        break
      case 'left' :
        if(copyOfFirstCell.x === 1) {
          copyOfFirstCell.x = 20
        } else {
          copyOfFirstCell.x--
        }
        // copyOfFirstCell = {x: 20, y: 4}
        break
      case 'down' :
        if(copyOfFirstCell.y === 20) {
          copyOfFirstCell.y = 1
        } else {
          copyOfFirstCell.y++
        }
        // copyOfFirstCell = {x: 1, y: 6}
        break
      case 'right' :
        if(copyOfFirstCell.x === 20) {
          copyOfFirstCell.x = 1
        } else {
          copyOfFirstCell.x++
        }
        // copyOfFirstCell = {x: 2, y: 4}
      break
    }
    this.coords.unshift(copyOfFirstCell)
    // Si le dimos abajo, ahora copyOfFirstCell = {x: 1, y: 6}
    // this.coords = [{x: 1, y: 6}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}]
    if(this.isEating === false) {
      this.coords.pop()
    } else {
      this.isEating = false
    }
    // this.coords = [{x: 1, y: 6}, {x: 1, y: 5}, {x: 2, y: 5}]
  }

  this.erase = function() {
    var snakeCells = document.querySelectorAll('.snake')
    snakeCells.forEach(function(snakeCell) {
      snakeCell.classList.remove('snake')
    })
  }

  this.move = function() {
    self.updateCoords()
    self.erase()
    self.draw()
  }
}

export { Snake }