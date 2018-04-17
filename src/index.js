const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')
const car = new Car();

document.addEventListener('DOMContentLoaded', function() {

  const backdrop = document.querySelector('#backdrop')
  const background = new Background();


  car.initEventListener();

  setInterval(draw, 60)
  const horizLines = []

  setInterval(newLines, 200)

  function newLines() {
    let line = new HorizLine()
    horizLines.push(line)
  }

  setInterval(Tree.randTree, 1500)


  function draw() {
    twoD.clearRect(0, 0, canvas.width, canvas.height)
    // twoD.drawImage(backdrop, 0, 0, canvas.width, canvas.height)
    background.render()
    horizLines.map(line => line.render())
    Tree.all().map(tree => tree.render())
    car.render()
  }


})
