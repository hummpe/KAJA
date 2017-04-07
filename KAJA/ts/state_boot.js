var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Ansvarighet:
//   - Globala inställningar
//     + Desktop eller mobil
//
var StateBoot = (function (_super) {
    __extends(StateBoot, _super);
    function StateBoot() {
        _super.apply(this, arguments);
    }
    StateBoot.prototype.preload = function () {
        log.debug("StateBoot.preload");
        //this.game.load.image('phaserImage', 'assets/img/img_phaser.png');
        //log.debug("phaserImage loading in.");
    };
    StateBoot.prototype.create = function () {
        log.debug("StateBoot.create - started");
        //  Unless you specifically need to support multitouch I would recommend setting this to 1
        //this.input.maxPointers = 1;
        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        //this.stage.disableVisibilityChange = true;
        if (this.game.device.desktop) {
        }
        else {
        }
        this.game.state.start('StateStart', true, false);
        log.debug("StateBoot.create - finished");
    };
    return StateBoot;
}(Phaser.State));
//# sourceMappingURL=state_boot.js.map