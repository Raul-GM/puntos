let point;
let sound;

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
    this.load.audio('sound', ['sound.wav']);
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
          point = this.physics.add.image(getRandom(1300), getRandom(600), `point${getNumberImageRandom()}`);
          point.alpha = 1;
          point.scale = 0.5;
          point.setBounce(1);
          point.setCollideWorldBounds(true);
          point.body.gravity.y = 0;
          point.body.rotation = 50;
          point.body.velocity.set(150);
          
          sound = this.sound.add('sound', {loop: false});
          sound.play();
          
          this.tweens.add({
            targets: point,
            scale: 1,
            alpha: 0.4,
            ease: 'Linear',
            duration: 500,
            repeat: 1,
        
          })
        }, 1000 + (2000*ind))
      })(i)
    }
  }
  update () {
  }
}