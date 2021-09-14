import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import Scene1 from './scenes/Sence1';

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene , Scene1] ,
  })
);
