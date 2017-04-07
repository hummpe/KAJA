var Car = (function () {
    function Car(game) {
        log.debug("Class Car - Constructor Started");
        this.game = game;
        //DISPLAY
        //Phaser.Sprite
        //Phaser.Image
        //Phaser.Button
        //this.duckSprite = game.add.sprite(0, 20, 'duckImage');
        //PHYSICS
        //game.physics.enable(this.duckSprite, Phaser.Physics.ARCADE);
        //this.duckSprite.scale.x = 0.5;
        //this.duckSprite.scale.y = 0.5;
        //this.duckSprite.body.velocity.x = 50;
        //SOUND
        //Phaser.SoundManager (this.game.soound)
        //Phaser.Sound
        //Phaser.AudioSprite
        //this.game.sound.volume = 0.01;
        log.debug("Class Car - Constructor Finished");
    }
    /*
    restart() {

        this.duckSprite.x = 0;
        this.duckSprite.y = 20
        this.duckSprite.body.velocity.x = 50;
        this.duckSprite.body.velocity.y = 0;
    }
    */
    Car.prototype.update = function () {
        /*
        if (this.duckSprite.body.x > this.game.width) {
            this.duckSprite.body.x = 0;

        }
        */
        //this.duckSprite.body.rotate()
    };
    return Car;
}());
//# sourceMappingURL=car.js.map