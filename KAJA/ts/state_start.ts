class StateStart extends Phaser.State {
    
    logoImage: Phaser.Sprite;
    fontStyle: any;

    preload() {
        log.debug("StateStart.preload");

        log.debug("phaserIMG loading.")
        this.game.load.image('phaserIMG', 'assets/img/img_phaser.png');
        log.debug("phaserIMG loaded.")
    }

    create() {
        log.debug("StateStart.create - started");

        this.logoImage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserIMG');
        this.logoImage.anchor.setTo(0.5, 0.5);
        this.logoImage.alpha = 1.0;
        this.fontStyle = { font: "40px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
        this.game.add.text(this.game.world.centerX - 30, this.game.world.centerY, "KAJA - Start .", this.fontStyle);

        //this.game.state.start('StateGaming', true, false);

        log.debug("StateStart.create - finished");
    }


    update() {
        /*
        if(stuff happens / Time passes)
        this.game.state.start('StateGaming', true, false);
        */
    }
}