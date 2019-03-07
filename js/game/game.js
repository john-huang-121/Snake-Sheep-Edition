import Map from './map.js';
import Sheep from '../models/sheep.js';
import Hay from '../models/hay.js';

// Todo:
// 1. Moving sheep. (request animation frame, that reads the last key)
// 3. Scoreboard. (check the length of the sheep)
// 4. Unit collision. (variable that stores occupied spaces in map)

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.sheep = [new Sheep(ctx)];
    this.hay = new Hay(ctx);
    this.moveHistory = [[0,0,100]];
    this.occupiedSpace = [];

    this.updateOccupiedSpace = this.updateOccupiedSpace.bind(this);
    this.setupGame = this.setupGame.bind(this);
    this.drawAll = this.drawAll.bind(this);
  }
 
  setupGame() {
    this.map.updateObjectLoc(0, 0, this.sheep[0]);
    this.map.updateObjectLoc(2, 0, this.hay);
    this.drawStartingGame();
  }

  drawStartingGame() {
    this.sheep[0].drawStartingSheep();
    this.hay.drawHay();
  }

  updateOccupiedSpace(arrSlice) {
    this.occupiedSpace = arrSlice;
  }

  drawAll(pressedKey) {
    this.map.drawMap();
    this.sheep.forEach((sheep, index) => {
      if (index === 0) {
        sheep.drawMovingSheep(pressedKey);
      } else {
        sheep.drawMovingSheep(this.occupiedSpace[index - 1][2]);
      }
    });
    this.hay.drawHay();
    // console.log(this.map.grid);
  }

  mapKey(e) {
    let ctx = this.ctx;
    let sheepLoc = this.map.whereSheep;
    
    const moves = {
      "119": [0, -90], //w
      "97": [-90, 0], //a
      "115": [0, 90], //s
      "100": [90, 0], //d
    };
    
    const pressedKey = e.keyCode;
    if (pressedKey === 119 || pressedKey === 97 || pressedKey === 115 || pressedKey === 100) {

      //updates the map grid sheep location
      if (pressedKey === 119) {
        this.map.updateSheepLoc(0, -1, this.sheep, this.moveHistory, this.updateOccupiedSpace, this.ctx);
                
      } else if (pressedKey === 97) {
        this.map.updateSheepLoc(-1, 0, this.sheep, this.moveHistory, this.updateOccupiedSpace, this.ctx);
                
      } else if (pressedKey === 115) {
        this.map.updateSheepLoc(0, 1, this.sheep, this.moveHistory, this.updateOccupiedSpace, this.ctx);
                
      } else if (pressedKey === 100) {
        this.map.updateSheepLoc(1, 0, this.sheep, this.moveHistory, this.updateOccupiedSpace, this.ctx);
                
      }
            
      this.moveHistory.push([this.map.whereSheep[0], this.map.whereSheep[1], pressedKey]);

      //update the sheep's location
      this.sheep[0].moveSheep(
        moves[pressedKey][0],
        moves[pressedKey][1]
      );
    }

    if (this.map.whereSheep[0] === this.map.whereHay[0] && this.map.whereSheep[1] === this.map.whereHay[1]) {
      this.map.updateHayLoc(this.sheep[0], this.hay, this.occupiedSpace);
      this.sheep[0].increaseLength();
    }

    //lose condition when it runs into it's own tail
    this.occupiedSpace.forEach((eachTrailingSheep) => {
      if (this.map.whereSheep[0] === eachTrailingSheep[0] && this.map.whereSheep[1] === eachTrailingSheep[1]) {
        console.log('you lose');
      }
    })

    this.drawAll(pressedKey); //rerender effect
  }

  checkLiving() {
    //checks whether models are alive or dead. If dead, remove from game?
  }

}

export default Game;