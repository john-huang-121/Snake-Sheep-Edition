import MovingObject from '../actions/moving_object.js';
// const Victor = require("victor");

class Sheep {
  constructor(ctx, x = 45, y = 45) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.sheepLength = 1;
    this.alive = true;
    this.movementStyle = 1;

  }

  increaseLength() {
    this.sheepLength += 1;
  }

  drawStartingSheep() {
    this.drawRestingRight();
  }

  drawMovingSheep(pressedKey) {
    //need to set up custom drawings for each key
    if (pressedKey === 119) { //w
      if (this.movementStyle % 2 === 0) {
        this.drawMoveUp();
      } else {
        this.drawRestingUp();
      }
    } else if (pressedKey === 97) { //a
      if (this.movementStyle % 2 === 0) {
        this.drawMoveLeft();
      } else {
        this.drawRestingLeft();
      }
    } else if (pressedKey === 115) { //s
      if (this.movementStyle % 2 === 0) {
        this.drawMoveDown();
      } else {
        this.drawRestingDown();
      }
    } else if (pressedKey === 100) { //d
      if (this.movementStyle % 2 === 0) {
        this.drawMoveRight();
      } else {
        this.drawRestingRight();
      }
    }

    this.movementStyle++;
  }

  moveSheep(moveX, moveY) {
    if (this.x + moveX >= 0 && this.x + moveX <= 900) {
      this.x += moveX;
    }

    if (this.y + moveY >= 0 && this.y + moveY <= 900) {
      this.y += moveY;
    }
  }

  alive() {
    //checks living status
  }

  // drawTracks() {
  //   const ctx = this.ctx;

  //   ctx.beginPath();
  //   ctx.fillStyle = 'black';
  //   ctx.ellipse(this.x, this.y, 15, 12, Math.PI, 0, Math.PI * 2);
  //   ctx.closePath();
  //   ctx.fill();
  // }

  drawRestingRight() {
    const ctx = this.ctx;

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x + 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x + 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 17, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 18, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawMoveRight() {
    const ctx = this.ctx;

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x + 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x + 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 32, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 35, this.y + 12);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 27, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 28, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawRestingLeft() {
    const ctx = this.ctx;

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 23, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x - 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x - 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 17, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 18, this.y + 25);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawMoveLeft() {
    const ctx = this.ctx;

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 25, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x - 30, this.y - 5, 8, 11, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x - 28, this.y - 12, 6, 9, Math.PI / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 23, this.y + 8);
    ctx.lineTo(this.x + 32, this.y + 15);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 23, this.y + 8);
    ctx.lineTo(this.x - 35, this.y + 12);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 17, this.y + 14);
    ctx.lineTo(this.x + 27, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 18, this.y + 14);
    ctx.lineTo(this.x - 28, this.y + 20);
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawRestingUp() {
    const ctx = this.ctx;

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 30, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y - 31, 8, 11, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y - 30, 6, 9, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  drawMoveUp() {
    const ctx = this.ctx;

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 10, this.y + 20);
    ctx.lineTo(this.x + 10, this.y + 33);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 10, this.y + 20);
    ctx.lineTo(this.x - 10, this.y + 33);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 10, this.y - 20);
    ctx.lineTo(this.x + 10, this.y - 30);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 10, this.y - 20);
    ctx.lineTo(this.x - 10, this.y - 30);
    ctx.lineWidth = 5;
    ctx.stroke();

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 30, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y - 31, 8, 11, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y - 30, 6, 9, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  drawRestingDown() {
    const ctx = this.ctx;

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 30, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 31, 8, 11, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 30, 6, 9, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  drawMoveDown() {
    const ctx = this.ctx;

    //legs
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 10, this.y + 20);
    ctx.lineTo(this.x + 10, this.y + 33);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 10, this.y + 20);
    ctx.lineTo(this.x - 10, this.y + 33);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x + 10, this.y - 20);
    ctx.lineTo(this.x + 10, this.y - 30);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(this.x - 10, this.y - 20);
    ctx.lineTo(this.x - 10, this.y - 30);
    ctx.lineWidth = 5;
    ctx.stroke();

    //body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 20, 30, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // head
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 31, 8, 11, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(this.x, this.y + 30, 6, 9, Math.PI, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

export default Sheep;