var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StateStart = (function (_super) {
    __extends(StateStart, _super);
    function StateStart() {
        _super.apply(this, arguments);
    }
    StateStart.prototype.preload = function () {
        log.debug("StateStart.preload");
        log.debug("phaserIMG loading.");
        this.game.load.image('phaserIMG', 'assets/img/img_phaser.png');
        log.debug("phaserIMG loaded.");
    };
    StateStart.prototype.create = function () {
        log.debug("StateStart.create - started");
        this.logoImage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserIMG');
        this.logoImage.anchor.setTo(0.5, 0.5);
        this.logoImage.alpha = 1.0;
        this.fontStyle = { font: "40px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
        this.game.add.text(this.game.world.centerX - 30, this.game.world.centerY, "KAJA - Start .", this.fontStyle);
        //this.game.state.start('StateGaming', true, false);
        log.debug("StateStart.create - finished");
    };
    StateStart.prototype.update = function () {
        /*
        if(stuff happens / Time passes)
        this.game.state.start('StateGaming', true, false);
        */
    };
    return StateStart;
}(Phaser.State));
//# sourceMappingURL=state_start.js.map