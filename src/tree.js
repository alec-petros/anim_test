const tree = document.querySelector('#tree')
const treeArr = []

class Tree {
  constructor(initial) {
    initial > (canvas.width / 2) ? this.orientation = "right" : this.orientation = "left"

    this.modifier = (Math.abs((canvas.width / 2) - initial) / 10)
    this.dist = 0
    this.x = initial
    this.y = 200
    this.height = 15
    this.width = 15
  }

  static randTree() {
    let tree = new Tree(Math.random() * canvas.width)
    treeArr.push(tree)
    console.log(tree)
  }

  static all() {
    return treeArr
  }

  render() {
    if (this.dist < 25) {
      twoD.drawImage(tree, this.x, this.y, this.height, this.width)
      if (this.orientation == "right") {
        this.x += this.dist * this.modifier
        this.y += 2
        this.height += this.dist
        this.width += this.dist
        this.dist += 1
      } else {
        this.x -= this.dist * this.modifier
        this.y += 2
        this.height += this.dist
        this.width += this.dist
        this.dist += 1
      }
    }
  }
}
