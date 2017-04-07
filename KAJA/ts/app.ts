declare var log: any;

function initLogging() {
    log = log4javascript.getLogger("main");
    var appender = new log4javascript.PopUpAppender();
    log.addAppender(appender);
    log.debug("DEBBUGING LOGGER STARTED");
}

class PhaserGame {

    game: Phaser.Game;

    constructor() {
        log.debug("Phaser constructor - started");

        this.game = new Phaser.Game(900, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update, render: this.render });

        this.game.state.add('StateBoot', StateBoot, false);
        this.game.state.add('StateStart', StateStart, false);
        this.game.state.add('StateGaming', StateGaming, false);
        //this.game.state.add('StateGameOver', StateGameOver, false);

        this.game.state.start('StateBoot');

        log.debug("Phaser constructor - finished");
    }



    preload() {
    }

    create() {
    }

    update() {
    }

    render() {
        
    }
}

window.onload = () => {
    try {
        initLogging();
        var game = new PhaserGame();
        console.log("STARTING - window.onload"); 
    } catch (e) {
        console.log("Exception window-onload");
    }
};