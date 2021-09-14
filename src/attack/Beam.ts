export default class Beam extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene){
        var x = scene.ship.x 
        var y = scene.ship.y

        super(scene,x,y,"beam")
        scene.add.existing(this)
        scene.physics.world.enableBody(this , 0)
        this.body.velocity.y = -500
    }

}