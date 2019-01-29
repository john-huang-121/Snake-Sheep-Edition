import Map from './map.js';
import Sheep from '../models/sheep.js';
import Grass from '../models/grass.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.sheeps = new Sheep(ctx);
    this.grasses = new Grass(ctx);
    this.occupied = [];

    this.setupGame = this.setupGame.bind(this);
    this.drawAll = this.drawAll.bind(this);
  }
 
  setupGame() {
    this.map.grid[0][0] = this.sheeps;
    this.sheeps.drawStartingSheep();
    this.grasses.drawStartingGrass();
  }

  drawAll(pressedKey) {
    this.map.drawMap();
    this.sheeps.drawMovingSheep(pressedKey);
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
        sheepLoc = this.map.updateSheepLoc(0, -1);
        
        this.map.grid[sheepLoc[1]][sheepLoc[0]] = this.sheeps;
        
      } else if (pressedKey === 97) {
        sheepLoc = this.map.updateSheepLoc(-1, 0);
        
        this.map.grid[sheepLoc[1]][sheepLoc[0]] = this.sheeps;
        
      } else if (pressedKey === 115) {
        sheepLoc = this.map.updateSheepLoc(0, 1);
        
        this.map.grid[sheepLoc[1]][sheepLoc[0]] = this.sheeps;
        
      } else if (pressedKey === 100) {
        sheepLoc = this.map.updateSheepLoc(1, 0);
        
        this.map.grid[sheepLoc[1]][sheepLoc[0]] = this.sheeps;
        
      }
      
      this.sheeps.moveSheep(
        moves[pressedKey][0],
        moves[pressedKey][1]
        );
      }

      this.drawAll(pressedKey); //rerender effect
    }
        
  objectOccupied(x, y) {
    let okayToBuild = true;
    
    this.occupied.forEach((object) => { //up and back
      if (object[2] === "box") {
        if ((x < object[0] - object[3] || x > object[0] + object[3]) || (y < object[1] - object[3] || y > object[1] + object[3])) {
          okayToBuild = true;
        } else {
          okayToBuild = false;
        }
      }
    })

    return okayToBuild;
  }

  allObjects() {
    return [].concat(this.farmers, this.sheeps, this.grasses);
  }

  checkLiving() {
    //checks whether models are alive or dead. If dead, remove from game?
  }

}

export default Game;