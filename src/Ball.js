import { GameObjects, Scene, Time, Curves } from 'phaser';
import * as createjs from 'createjs-module';


export class Ball extends GameObjects.Sprite {
    constructor(scene, props) {
        const { x, y } = props;

        super(scene, x, y, 'ball');

        this.scene.add.existing(this);
        this.setInteractive();
        
        this.pressTime = 0;
    }

    holdDown() {

    }

    release() {

    }
    
}