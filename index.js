import { Game } from './game.js';

// const config = {
//   type: Phaser.CANVAS,
//   backgroundColor: '#f63f10',
//   width: 800,
//   height: 600,
// }
const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  width: 1300,
  height: 600,
  scene: [Game],
  physics: {
    default: 'arcade',
  }
}
var game = new Phaser.Game(config);
