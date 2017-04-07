// Ansvarighet:
//   - Globala inställningar
//     + Desktop eller mobil
//
class StateBoot extends Phaser.State {
    preload() {
        log.debug("StateBoot.preload");
        //this.game.load.image('phaserImage', 'assets/img/img_phaser.png');
        //log.debug("phaserImage loading in.");
    }

    create() {
        log.debug("StateBoot.create - started");

        //  Unless you specifically need to support multitouch I would recommend setting this to 1
        //this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        //this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {

        }
        else {
            // Mobil
        }

        this.game.state.start('StateStart', true, false);

        log.debug("StateBoot.create - finished");
    }
}