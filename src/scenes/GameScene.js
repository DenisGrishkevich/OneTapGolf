import { Scene } from 'phaser';
import { Ball } from '../Ball';
import gameConfig from '../gameConfig';


export class GameScene extends Scene {
    constructor() {
        super('GameScene');

    }

    onBallClick(pointer, object) {
        if (object instanceof Ball) {
            object.holdDown(pointer);
        }
    }
    
    onBallClickEnd(pointer, object) {
        if (object instanceof Ball) {
            object.release(pointer);
        }
    }
    

    create() {
        const ground_down = this.add.tileSprite(0, 1040, 4000, 400, 'ground_down');
        const ground = this.add.tileSprite(0, 890, 4000, 100, 'ground');       
        const background = this.add.tileSprite(0, 400, 4000, 700, 'background');
        const sky = this.add.tileSprite(0, 0, 4000, 400, 'sky');
        var ball = new Ball(this, {x: 100, y: 810});
        let platforms = this.physics.add.staticGroup();
        let scoreText = this.add.text(1800, 20, '0', { fontSize: '100px', fill: '#FECC00' });

        platforms.create(Math.random() * (1800 - 300) + 300, 875, 'hole');

        this.input.on('gameobjectdown', this.onBallClick);
        this.input.on('gameobjectup', this.onBallClickEnd);

        this.physics.add.existing(ground, true);
        this.physics.add.existing(ball);
        this.physics.add.collider(ball, platforms);
        this.physics.add.collider(ball, ground);
        
    }
}


//npm run develop