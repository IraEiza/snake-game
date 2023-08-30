function Food(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    var foodCell = document.querySelector(`.row${this.y} .col${this.x}`)
    foodCell.classList.add('food')
  }

  this.erase = function() {
    var foodCell = document.querySelector('.food')
    foodCell.classList.remove('food')
  }
}

export { Food }