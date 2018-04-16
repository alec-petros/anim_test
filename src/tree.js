const tree = document.querySelector('#tree')
const treeArr = []

class Tree {
  constructor(initial) {
    initial > (canvas.width / 2) ? this.orientation = "right" : this.orientation = "left"

    this.modifier = Math.abs(canvas.width / 2 - initial)
    console.log(initial)
    this.dist = 10
    this.x = initial
    this.y = 225
    this.height = 15
    this.width = 15
  }

  static randTree() {
    let tree = new Tree((Math.random() * 4) + 318)
    treeArr.push(tree)
  }

  static all() {
    return treeArr
  }

  render() {
    if (this.dist < 30) {
      twoD.drawImage(tree, this.x, this.y, this.height, this.width)
      if (this.orientation == "right") {
        this.x += this.dist * this.modifier
        this.y -= 9
        this.height += this.dist
        this.width += this.dist
        this.dist += 1
      } else {
        this.x -= this.dist * this.modifier
        this.y -= 9
        this.height += this.dist
        this.width += this.dist
        this.dist += 1
      }
    }
  }
}
