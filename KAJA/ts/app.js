function initLogging() {
    log = log4javascript.getLogger("main");
    var appender = new log4javascript.PopUpAppender();
    log.addAppender(appender);
    log.debug("DEBBUGING LOGGER STARTED");
}
var PhaserGame = (function () {
    function PhaserGame() {
        log.debug("Phaser constructor - started");
        this.game = new Phaser.Game(900, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update, render: this.render });
        this.game.state.add('StateBoot', StateBoot, false);
        this.game.state.add('StateStart', StateStart, false);
        this.game.state.add('StateGaming', StateGaming, false);
        //this.game.state.add('StateGameOver', StateGameOver, false);
        this.game.state.start('StateBoot');
        log.debug("Phaser constructor - finished");
    }
    PhaserGame.prototype.preload = function () {
    };
    PhaserGame.prototype.create = function () {
    };
    PhaserGame.prototype.update = function () {
    };
    PhaserGame.prototype.render = function () {
    };
    return PhaserGame;
}());
window.onload = function () {
    try {
        initLogging();
        var game = new PhaserGame();
        console.log("STARTING - window.onload");
    }
    catch (e) {
        console.log("Exception window-onload");
    }
};
//# sourceMappingURL=app.js.map