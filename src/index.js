const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded')

  setInterval(draw, 100)
  const trees = []

  setInterval(Tree.randTree, 1500)
  treeBeard = new Tree(250)
  otherEnt = new Tree(200)


  function draw() {
    twoD.clearRect(0, 0, canvas.width, canvas.height)
    twoD.fillStyle = "lightgrey"
    twoD.fillRect(0, 0, canvas.width, canvas.height)
    Tree.all().map(tree => tree.render())
    console.log('draw')
  }


})
