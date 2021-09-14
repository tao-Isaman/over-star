import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image("ship" , "assets/warships/w1.png")
    this.load.image('beam' , "assets/warships/light-attack.png")
    this.load.image('background' , "assets/bg6.jpeg")
  }

  create() {
    this.scene.start('PlayGame')
  }

  
}
