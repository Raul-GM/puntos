export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('point', 'Point.png');
  }

  create() {
    this.physics.world.setBoundsCollision(true);
    this.ball = this.physics.add.image(20, 20, 'point');
    this.ball.setBounce(1);
    this.ball.setCollideWorldBounds(true);
    this.ball.body.gravity.y = 10;
    this.ball.body.velocity.set(200);

    // let velocity = 100 * Phaser.Math.Between(1.3, 2);
    // if (Phaser.Math.Between(0, 10) > 5) {
    //   velocity = 0 - velocity;
    // }
    // this.ball.setVelocity(velocity, 10);
  }

}