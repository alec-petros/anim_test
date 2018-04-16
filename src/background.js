class Background {
  constructor() {
    this.counter = 0
  }

  render() {
    this.horizon();
    this.vertLine(320)
    // this.vertLine(250);
    // this.vertLine(390);

    twoD.beginPath();
    twoD.moveTo(250, 240)
    twoD.lineTo(0, 360)
    twoD.stroke();

    twoD.beginPath();
    twoD.moveTo(390, 240)
    twoD.lineTo(640, 360)
    twoD.stroke();
  }

  vertLine(initial) {
    let diff = Math.pow((canvas.width/2) / initial, 3)
    twoD.beginPath()
    twoD.moveTo(initial, 240)
    console.log(diff)
    twoD.lineTo((initial / diff), 360);
    twoD.stroke();
  }

  horizon() {
    twoD.beginPath()
    twoD.moveTo(0, 240)
    twoD.lineTo(640, 240)
    twoD.stroke();
  }

}
