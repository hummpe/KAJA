class StateGaming extends Phaser.State {
    /*
    fps: Fps;
    duck: Duck;
    gun: Gun;
    bullets: BulletsGroup;
    points : number;
    fontStyle: any;
    textPoints: Phaser.Text;
    */

    car: Car;

    preload() {
        log.debug("StateGaming.preload");
    }

    create() {
        log.debug("StateGaming.create")

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

    }

    update() {

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
    }
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

    render() {
        /*
        // Can be used to call specific classes render-functions
        this.fps.renderDebug();
        this.gun.render();
        this.textPoints.text = "Poäng: " + this.points;
        */
    }
}