var PhaserDemo = (function () {
    function PhaserDemo() {
        this.game = new Phaser.Game(900, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    PhaserDemo.prototype.preload = function () {
        this.game.load.image('phaser_run', 'run.png');
    };
    PhaserDemo.prototype.create = function () {
        this.game.add.sprite(0, 0, 'phaser_run');
    };
    PhaserDemo.prototype.update = function () {
    };
    return PhaserDemo;
}());
window.onload = function () {
    var game = new PhaserDemo();
};
//# sourceMappingURL=app.js.map