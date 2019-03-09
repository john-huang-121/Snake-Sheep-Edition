import Map from './map.js';
import Sheep from '../models/sheep.js';
import Hay from '../models/hay.js';

// Todo:
// 1. Moving sheep. (request animation frame, that reads the last key)

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(ctx);
    this.sheep = [new Sheep(ctx)];
    this.hay = new Hay(ctx);
    this.moveHistory = [[0, 0, 100]];
    this.lastKey = null;
    this.startGame = false;
    this.difficulty = 500;

    this.setDifficulty = this.setDifficulty.bind(this);
    this.startGameAnimation = this.startGameAnimation.bind(this);
    this.gameAnimation = this.gameAnimation.bind(this);
    this.checkScore = this.checkScore.bind(this);
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

  setDifficulty(difficulty) {
    console.log(difficulty);

    if (difficulty === 'easy') {
      this.difficulty = 1000;

      document.getElementById('difficulty-display').innerText = 'Difficulty: Easy'
    } else if (difficulty === 'medium') {
      this.difficulty = 500;

      document.getElementById('difficulty-display').innerText = 'Difficulty: Medium'
    } else if (difficulty === 'hard') {
      this.difficulty = 100;

      document.getElementById('difficulty-display').innerText = 'Difficulty: Hard'
    }
  }

  drawAll(pressedKey) {
    this.map.drawMap();
    this.sheep.forEach((sheep, index) => {
      if (index === 0) {
        sheep.drawMovingSheep(pressedKey);
      } else {
        sheep.drawMovingSheep(this.map.occupiedSpace[index - 1][2]);
      }
    });
    this.hay.drawHay();
  }

  //throttling animation frames with setTimeout https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm
  startGameAnimation(e) {
    this.startTime = new Date();
    this.lastKey = e;

    if (this.startGame === false) {
      this.startGame = true;

      this.gameAnimation(e);
    }
  }

  gameAnimation(e) {
    setTimeout(() => {
      requestAnimationFrame(this.gameAnimation);

      this.mapKey(this.lastKey);
    }, this.difficulty);
  }

  //from m1erickson in Stackoverflow https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
  // gameAnimation(e) {
  //   let runningTime = new Date();
  //   let elapsedTimeSec = runningTime.getMilliseconds() - this.startTime.getMilliseconds();
  //   let framesCycle = runningTime.getSeconds()

  //     requestAnimationFrame(this.gameAnimation);

  // console.log(elapsedTimeSec);
  // console.log(framesCycle);

  // if (e.keyCode === 100) {
  //     this.startGame = true;
  //   this.lastKey = e;
  // }

  // if (framesCycle %  === 1) {
  //   console.log(e.keyCode);

  //   if (this.startGame === true) {
  //     if (this.lastKey) {
  //       this.mapKey(this.lastKey);
  //     } else {
  //       this.mapKey(e);
  //     }
  //   }
  // }
  // }

  //speed doubles every time you press a key

  mapKey(e) {
    let ctx = this.ctx;
    let sheepLoc = this.map.whereSheep;

    const moves = {
      "119": [0, -90], //w
      "97": [-90, 0], //a
      "115": [0, 90], //s
      "100": [90, 0] //d
    };

    const pressedKey = e.keyCode;

    if (
      pressedKey === 119 ||
      pressedKey === 97 ||
      pressedKey === 115 ||
      pressedKey === 100
    ) {
      //updates the map grid sheep location
      if (pressedKey === 119) {
        this.map.updateSheepLoc(0, -1, this.sheep, this.moveHistory, this.ctx);
      } else if (pressedKey === 97) {
        this.map.updateSheepLoc(-1, 0, this.sheep, this.moveHistory, this.ctx);
      } else if (pressedKey === 115) {
        this.map.updateSheepLoc(0, 1, this.sheep, this.moveHistory, this.ctx);
      } else if (pressedKey === 100) {
        this.map.updateSheepLoc(1, 0, this.sheep, this.moveHistory, this.ctx);
      }

      this.moveHistory.push([
        this.map.whereSheep[0],
        this.map.whereSheep[1],
        pressedKey
      ]);

      //update the sheep's location
      this.sheep[0].moveSheep(moves[pressedKey][0], moves[pressedKey][1]);
    }

    if (
      this.map.whereSheep[0] === this.map.whereHay[0] &&
      this.map.whereSheep[1] === this.map.whereHay[1]
    ) {
      this.map.updateHayLoc(this.sheep[0], this.hay, this.occupiedSpace);
      this.sheep[0].increaseLength();
    }

    this.checkLosingCollision();

    this.checkScore();

    //rerender effect
    this.drawAll(pressedKey);
  }

  //lose condition when it runs into it's own tail
  checkLosingCollision() {
    this.map.occupiedSpace.forEach(eachTrailingSheep => {
      if (
        this.map.whereSheep[0] === eachTrailingSheep[0] &&
        this.map.whereSheep[1] === eachTrailingSheep[1]
      ) {
        alert("you lose");
      }
    });
  }

  checkScore() {
    let scoreElement = document.getElementById("game-score");

    scoreElement.innerText = `Score: ${this.sheep[0].sheepLength - 1}`;
  }
}

export default Game;