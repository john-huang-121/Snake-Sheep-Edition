export default class Grass {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.exist = true;
    this.x = x;
    this.y = y;
  }

  drawStartingGrass() {
    const ctx = this.ctx;

    // ctx.beginPath();
    // ctx.fillStyle = "black";
    // ctx.fillRect(180, 0, 90, 90);

    ctx.beginPath();
    ctx.fillStyle = "gold";
    ctx.fillRect(200, 20, 50, 50);    

    //left haystack edges
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.moveTo(200, 20);
    ctx.lineTo(190, 25);
    ctx.lineTo(200, 30);
    ctx.lineTo(190, 35);
    ctx.lineTo(200, 40);
    ctx.lineTo(190, 45);
    ctx.lineTo(200, 50);
    ctx.lineTo(190, 55);
    ctx.lineTo(200, 60);
    ctx.lineTo(190, 65);
    ctx.lineTo(200, 70);
    ctx.fill();

    //right haystack edges
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.moveTo(250, 20);
    ctx.lineTo(260, 25);
    ctx.lineTo(250, 30);
    ctx.lineTo(260, 35);
    ctx.lineTo(250, 40);
    ctx.lineTo(260, 45);
    ctx.lineTo(250, 50);
    ctx.lineTo(260, 55);
    ctx.lineTo(250, 60);
    ctx.lineTo(260, 65);
    ctx.lineTo(250, 70);
    ctx.fill();

    //left to right bundle line
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(210, 20);
    ctx.lineTo(240, 70);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(210, 70);
    ctx.lineTo(240, 20);
    ctx.stroke();
  }

  drawGrass() {
    const ctx = this.ctx;

    // ctx.fillStyle = "#f4b241";
    // ctx.fillRect(this.x, this.y, 50, 50);
    // ctx.strokeRect(this.x, this.y, 50, 50);

    // ctx.beginPath();
    // ctx.strokeStyle = "blue";
    // ctx.moveTo(this.x + 5, this.y + 5);
    // ctx.lineTo(this.x + 45, this.y + 45);
    // ctx.stroke();
    
    // ctx.beginPath();
    // ctx.strokeStyle = "blue";
    // ctx.moveTo(this.x + 45, this.y + 5);
    // ctx.lineTo(this.x + 5, this.y + 45);
    // ctx.stroke();
  }
}