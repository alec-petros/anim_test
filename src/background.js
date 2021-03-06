class Background {
  constructor() {
    this.counter = 0
    this.sunY = 170
  }

  render() {
    twoD.drawImage(document.querySelector('#sky'), 0, 0, 640, 450)
    twoD.drawImage(document.querySelector('#sun'), 220, this.sunY -= 0.1, 200, 200)
    this.horizon();
    this.vertLine(320)
    // this.vertLine(250);
    // this.vertLine(390);
    twoD.lineWidth = "4";
    twoD.fillStyle="#420442"
    twoD.fillRect(0, 240, 640, 360);
    twoD.stroke();

    twoD.beginPath();
    twoD.moveTo(280, 240)
    twoD.lineTo(180, 360)
    twoD.strokeStyle = "#8cfffb"
    twoD.stroke();

    twoD.beginPath();
    twoD.moveTo(240, 240)
    twoD.lineTo(0, 360)
    twoD.stroke();

    twoD.beginPath();
    twoD.moveTo(360, 240)
    twoD.lineTo(460, 360)
    twoD.stroke();

    twoD.beginPath();
    twoD.moveTo(400, 240)
    twoD.lineTo(640, 360)
    twoD.stroke();
  }

  vertLine(initial) {
    let diff = Math.pow((canvas.width/2) / initial, 3)
    twoD.beginPath()
    twoD.moveTo(initial, 240)
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
