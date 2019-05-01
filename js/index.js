import _ from 'lodash';
import './style.css';
import Game from './game/game.js';

// import Icon from './icon.png';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-screen");

  canvas.width = 990;
  canvas.height = 810;
  const ctx = canvas.getContext("2d");
  
  let game = new Game(ctx, 1, 1);

  
  game.drawAll();
  game.setupGame();
  window.addEventListener("keydown", (e) => game.startGameAnimation(e));

  document.getElementById('easy').addEventListener('click', () => game.setDifficulty('easy'));
  document.getElementById('medium').addEventListener('click', () => game.setDifficulty('medium'));
  document.getElementById('hard').addEventListener('click', () => game.setDifficulty('hard'));
  }
);
