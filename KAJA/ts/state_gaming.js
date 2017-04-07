var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StateGaming = (function (_super) {
    __extends(StateGaming, _super);
    function StateGaming() {
        _super.apply(this, arguments);
    }
    StateGaming.prototype.preload = function () {
        log.debug("StateGaming.preload");
    };
    StateGaming.prototype.create = function () {
        log.debug("StateGaming.create");
        this.car = new Car(this.game);
        /*
        this.fps  = new Fps(this.game);
        this.duck = new Duck(this.game);
        this.gun = new Gun(this.game);
        this.bullets = new BulletsGroup(this.game, this.gun);
        this.points = 0;
        this.stage.backgroundColor = "#CCCCCC";
        this.fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
        this.textPoints = this.game.add.text(100, 550, "Poäng: "+this.points, this.fontStyle);
        */
    };
    StateGaming.prototype.update = function () {
        this.car.update();
        /*
        this.duck.update();
        this.gun.update();
        this.bullets.update();

        for (var i = this.bullets.group.children.length - 1; i >= 0; i--) {

            //console.log("Y");
            this.game.physics.arcade.collide(this.duck.duckSprite, this.bullets.group.children[i], this.collisionHandler, null, this);
        }
        */
    };
    /*
    collisionHandler() {
        this.points = this.points + 1;
        console.log("Points="+this.points);
        if (this.points >= 5) {
            console.log("Transition to StateGameOver");
            this.game.state.start("StateGameOver");
        } else {
            this.duck.restart();
        }

        log.debug("Poäng: " + this.points);
    }
    */
    StateGaming.prototype.render = function () {
        /*
        // Can be used to call specific classes render-functions
        this.fps.renderDebug();
        this.gun.render();
        this.textPoints.text = "Poäng: " + this.points;
        */
    };
    return StateGaming;
}(Phaser.State));
//# sourceMappingURL=state_gaming.js.map