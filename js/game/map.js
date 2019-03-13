import Sheep from "../models/sheep.js";

export default class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.generateGrid();
    this.whereSheep = [0,0];
    this.whereHay = [2,0];
    this.nextHay = [4,0];
    this.occupiedSpace = [];
    this.x = 990;
    this.y = 810;

    this.updateOccupiedSpace = this.updateOccupiedSpace.bind(this);
    this.generateGrid = this.generateGrid.bind(this);
    this.updateSheepLoc = this.updateSheepLoc.bind(this);
    this.drawMap = this.drawMap.bind(this);
    this.randomNewHayLoc = this.randomNewHayLoc.bind(this);
  }

  generateGrid() {
    let array = new Array(9); // 10 deep with 10px, 10px as each grid block

    for (let i = 0; i < 9; i++) {
      array[i] = new Array(11);

      for (let j = 0; j < 11; j++) {
        array[i][j] = null;
      }
    }

    return array;
  }

  updateOccupiedSpace(arrSlice) {
    this.occupiedSpace = arrSlice;
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

      //updates occupied space by sheeps
      this.updateOccupiedSpace(occupiedSheep);
      
      //delete previous sheeps
      sheep.splice(1, sheep.length - 1);
      

      occupiedSheep.forEach(sheepHerd => {
        let newSheep = new Sheep(ctx, sheepHerd[0] * 90 + 45, sheepHerd[1] * 90 + 45);
         
        //swapped sheepherd[1] and [0]
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
    if ((this.whereSheep[0] + x) < 0 || (this.whereSheep[0] + x) > 10) {
      this.whereSheep[0] = this.whereSheep[0];
    } else {
      this.whereSheep[0] = this.whereSheep[0] + x;
    }

    if ((this.whereSheep[1] + y) < 0 || (this.whereSheep[1] + y) > 8) {
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
    let occupied = true;

    while (occupied) {
      this.whereHay[0] = Math.floor(Math.random() * 11);
      this.whereHay[1] = Math.floor(Math.random() * 9);
      
      if (this.grid[this.whereHay[1]][this.whereHay[0]] === null) {
        occupied = false;
      }
      
    }
    
    hayObject.x = this.whereHay[0] * 90;
    hayObject.y = this.whereHay[1] * 90;

    this.updateObjectLoc(this.whereHay[0], this.whereHay[1], hayObject);
  }

  drawGrasses(ctx, gridX, gridY) {
    let tileIncrementX = 90;
    let tileIncrementY;

    for(let i = 0; i < gridY; i += 2) {
      tileIncrementY = 90 * i;

      for(let j = 0; j < gridX; j += 2) {

        //grass fill green
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.lineTo(30 + (tileIncrementX * j), 60 + (tileIncrementY));
        ctx.lineTo(30 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(30 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(40 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(40 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(45 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(45 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(50 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(50 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 60 + (tileIncrementY));
        ctx.fill();
        
        //grass outline black
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.lineTo(30 + (tileIncrementX * j), 60 + (tileIncrementY));
        ctx.lineTo(30 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(30 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(40 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(40 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(45 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(45 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(50 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(50 + (tileIncrementX * j), 45 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 30 + (tileIncrementY));
        ctx.lineTo(60 + (tileIncrementX * j), 60 + (tileIncrementY));
        ctx.stroke();
      }
    }
  }

  drawMap() {
    const ctx = this.ctx;
    
    ctx.clearRect(0, 0, this.x, this.y);
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, this.x, this.y);

    this.drawGrasses(ctx, 11, 9);

  }
}