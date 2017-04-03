class PhaserDemo {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(900, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update});
    }

    preload() {
        this.game.load.image('phaser_run', 'run.png');
    }

    create() {
        this.game.add.sprite(0, 0, 'phaser_run');

    }   

    update() {

    }
}

window.onload = () => {
    var game = new PhaserDemo();
};