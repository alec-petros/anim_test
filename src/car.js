class Car {
  constructor() {
    this.x = 250
  }

  initEventListener() {
    document.addEventListener('keydown', e => {
      if (e.key == "ArrowLeft") {
        this.x -= 7
      } else if (e.key == "ArrowRight") {
        this.x += 7
      }
    })
  }

  render() {
    twoD.drawImage(document.querySelector('#car'), this.x, 300, 100, 60)
  }
}
