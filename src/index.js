import { Game, AUTO } from 'phaser';
import { PreloadScene } from './scenes/PreloadScene';
import { GameScene } from './scenes/GameScene';
import gameConfig from './gameConfig';

const config = {
    type: AUTO,
    width: gameConfig.screenWidth,
    height: gameConfig.screenHeight,
    backgroundColor: gameConfig.backgroundColor,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [
        PreloadScene,
        GameScene
    ]
};
new Game(config);
