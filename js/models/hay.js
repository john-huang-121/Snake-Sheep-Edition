export default class Hay {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 180;
    this.y = 0;
  }

  replaceHayWithGrass() {
    const ctx = this.ctx;
  }

  drawHay() {
    const ctx = this.ctx;

    //black tile for testing purpose
    // ctx.beginPath();
    // ctx.fillStyle = "black";
    // ctx.fillRect(0 + this.x, 0 + this.y, 90, 90);
    
    ctx.beginPath();
    ctx.fillStyle = "gold";
    ctx.fillRect(20 + this.x, 20 + this.y, 50, 50);    

    //left haystack edges
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.moveTo(20 + this.x, 20 + this.y);
    ctx.lineTo(9 + this.x, 25 + this.y);
    ctx.lineTo(20 + this.x, 30 + this.y);
    ctx.lineTo(9 + this.x, 35 + this.y);
    ctx.lineTo(20 + this.x, 40 + this.y);
    ctx.lineTo(9 + this.x, 45 + this.y);
    ctx.lineTo(20 + this.x, 50 + this.y);
    ctx.lineTo(9 + this.x, 55 + this.y);
    ctx.lineTo(20 + this.x, 60 + this.y);
    ctx.lineTo(9 + this.x, 65 + this.y);
    ctx.lineTo(20 + this.x, 70 + this.y);
    ctx.fill();

    //right haystack edges
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.moveTo(70 + this.x, 20 + this.y);
    ctx.lineTo(80 + this.x, 25 + this.y);
    ctx.lineTo(70 + this.x, 30 + this.y);
    ctx.lineTo(80 + this.x, 35 + this.y);
    ctx.lineTo(70 + this.x, 40 + this.y);
    ctx.lineTo(80 + this.x, 45 + this.y);
    ctx.lineTo(70 + this.x, 50 + this.y);
    ctx.lineTo(80 + this.x, 55 + this.y);
    ctx.lineTo(70 + this.x, 60 + this.y);
    ctx.lineTo(80 + this.x, 65 + this.y);
    ctx.lineTo(70 + this.x, 70 + this.y);
    ctx.fill();

    //left to right bundle line
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(30 + this.x, 20 + this.y);
    ctx.lineTo(60 + this.x, 70 + this.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(30 + this.x, 70 + this.y);
    ctx.lineTo(60 + this.x, 20 + this.y);
    ctx.stroke();
  }
}