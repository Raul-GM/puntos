var points;

export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('point10', 'Point.png');
    this.load.image('point1', 'Point01.png');
    this.load.image('point2', 'Point02.png');
    this.load.image('point3', 'Point03.png');
    this.load.image('point4', 'Point04.png');
    this.load.image('point5', 'Point05.png');
    this.load.image('point6', 'Point06.png');
    this.load.image('point7', 'Point07.png');
    this.load.image('point8', 'Point08.png');
    this.load.image('point9', 'Point09.png');
  }
  create() {
    this.physics.world.setBoundsCollision(true);
    for (let i = 0; i < 2000; i++) {
      ((ind) => {
        setTimeout(() => {
          const getRandom = (max) => {
            return Math.random() * (max - 50) + 50;
          }

          const getNumberImageRandom = () => {
            return Math.round(Math.random() * (10 - 1) + 1);
          }
          console.log('=====>', `point${getNumberImageRandom()}`);
          let ball = this.physics.add.image(getRandom(800), getRandom(600), `point${getNumberImageRandom()}`);
          ball.alpha = 0.5;
          
          ball.setBounce(1);
          ball.setCollideWorldBounds(true);
          ball.body.gravity.y = 0;
          ball.body.rotation = 50;
          ball.body.velocity.set(150);
        }, 1000 + (2000*ind))
      })(i)
    }
  }
  update () {
    
  }
}