import { Scene } from 'phaser';


export class PreloadScene extends Scene {
    constructor() {
        super('PreloadScene');
    }
    preload() {
        this.load.image('background', '../assets/background.png');
        this.load.image('ball', '../assets/object_ball.png');
        this.load.image('dot', '../assets/object_dot.png');
        this.load.image('flag_01', '../assets/object_flag_anim01.png');
        this.load.image('flag_02', '../assets/object_flag_anim02.png');
        this.load.image('flag_stick', '../assets/object_flag_stick.png');
        this.load.image('hole', '../assets/object_hole.png');
        this.load.image('ground_down', '../assets/tile_ground_down_01.png');
        this.load.image('ground', '../assets/tile_ground01.png');
        this.load.image('sky', '../assets/tile_sky_color01.png');
    }
    create() {
        this.scene.start('GameScene', { isRestart: true });
    }
}