import Sheep from "../models/sheep.js";

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.generateGrid();
    this.whereSheep = [0,0];
    this.whereHay = [2,0];
    this.nextHay = [4,0];
    //this.occupied would store the slices of sheep generated from the move history
    this.x = 900;
    this.y = 900;

    this.generateGrid = this.generateGrid.bind(this);
    this.updateSheepLoc = this.updateSheepLoc.bind(this);
    this.drawMap = this.drawMap.bind(this);
    this.randomNewHayLoc = this.randomNewHayLoc.bind(this);
  }

  generateGrid() {
    let array = new Array(10); // 10 deep with 10px, 10px as each grid block

    for (let i = 0; i < 10; i++) {
      array[i] = new Array(10);

      for (let j = 0; j < 10; j++) {
        array[i][j] = null;
      }
    }

    return array;
  }

  updateObjectLoc(x, y, object) {
    this.grid[y][x] = object;
  }

  updateSheepLoc(x, y, sheep, moveHistory, ctx) {

    //remove the previous sheep location if no hay is eaten yet
    if (sheep[0].sheepLength <= 1) {
      this.updateObjectLoc(this.whereSheep[0], this.whereSheep[1], null);
    } else {
      //slice from the length of sheep to current sheep
      let occupiedSheep = moveHistory.slice(moveHistory.length - (sheep[0].sheepLength - 1), moveHistory.length);
      console.log(occupiedSheep);

      //delete previous sheeps
      sheep.splice(1, sheep.length - 1);

      occupiedSheep.forEach(sheepHerd => {
        let newSheep = new Sheep(ctx, sheepHerd[0] * 90 + 45, sheepHerd[1] * 90 + 45);
        
        this.updateObjectLoc(sheepHerd[0], sheepHerd[1], newSheep);
        
        sheep.push(newSheep);
      });

      //clear the last sheep of the chain
      this.updateObjectLoc(
        moveHistory[moveHistory.length - (sheep[0].sheepLength)][0],
        moveHistory[moveHistory.length - (sheep[0].sheepLength)][1],
        null
      );
    }

    //update the location of the sheep and also not let it run off the grid
    if ((this.whereSheep[0] + x) < 0 || (this.whereSheep[0] + x) > 9) {
      this.whereSheep[0] = this.whereSheep[0];
    } else {
      this.whereSheep[0] = this.whereSheep[0] + x;
    }

    if ((this.whereSheep[1] + y) < 0 || (this.whereSheep[1] + y) > 9) {
      this.whereSheep[1] = this.whereSheep[1];
    } else {
      this.whereSheep[1] = this.whereSheep[1] + y;
    }

    this.updateObjectLoc(this.whereSheep[0], this.whereSheep[1], sheep[0]);

    return this.whereSheep; 
  }

  updateHayLoc(sheepObject, hayObject) { //this will generate a new hay location as it is eaten
    this.updateObjectLoc(this.whereSheep[0], this.whereSheep[1], sheepObject);
    this.randomNewHayLoc(hayObject);
  }
  
  randomNewHayLoc(hayObject) {
    let nextHay0 = this.nextHay[0];
    let nextHay1 = this.nextHay[1];

    this.whereHay = [nextHay0, nextHay1];
    
    hayObject.x = this.whereHay[0] * 90;
    hayObject.y = this.whereHay[1] * 90;

    this.updateObjectLoc(this.whereHay[0], this.whereHay[1], hayObject);
    
    this.nextHay[0] = Math.floor(Math.random() * 10);
    this.nextHay[1] = Math.floor(Math.random() * 10);

    if (this.grid[this.nextHay[0]][this.nextHay[1]] !== null) {
      this.randomNewHayLoc(hayObject);
    }
  }

  drawMap() {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, this.x, this.y);

    //testing purposes to see rendered tiles
    ctx.clearRect(0, 0, 90, 90);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 90, 90);

    ctx.clearRect(810, 810, 900, 900);
    ctx.fillStyle = 'blue';
    ctx.fillRect(810, 810, 900, 900);
  }
}