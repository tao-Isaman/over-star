import Beam from "../attack/Beam"
import config from "../config"

export default class Scene1 extends Phaser.Scene{
    constructor(){
        super('PlayGame')
    }

    create(){
        this.bg = this.add.image(0, 0, 'background')
        this.ship = this.add.image(config.scale.width/2  , config.scale.height/2 , "ship")
        this.add.text(20,20, "Score : ")   
        this.upKey = this.input.keyboard.addKey('W')
        this.downKey = this.input.keyboard.addKey('S')
        this.leftKey = this.input.keyboard.addKey('A')
        this.rightKey = this.input.keyboard.addKey('D')
        this.attack = this.input.keyboard.addKey('SPACE')

    }

    update() {
        if(this.upKey.isDown){
            this.moveShip(this.ship , 5 , 'up')
        }
        if(this.downKey.isDown){
            this.moveShip(this.ship , 5 , 'down')
        }
        if(this.leftKey.isDown){
            this.moveShip(this.ship , 5 , 'right')
        }
        if(this.rightKey.isDown){
            this.moveShip(this.ship , 5 , 'left')
        }

        if(this.attack.isDown){
            this.attacking(this.ship)
        }
    }

    attacking(ship: any){ 
        var beam = new Beam(this);
    }


    moveShip(ship:any, speed:number , side:String) {
        if(side == 'left'){
            ship.x += speed;
        }else if(side == 'right'){
            ship.x -= speed;
        }else if(side == 'up'){
            ship.y -= speed;
        }else if(side == 'down'){
            ship.y += speed; 
        }


        if (ship.y > config.scale.height ) {
          this.stopShipt(ship , 'down');
        }

        if (ship.x > config.scale.width) {
            this.stopShipt(ship , 'right');
        }

        if (ship.x <= 0) {
            this.stopShipt(ship , 'left');
        }

        if (ship.y <= 0) {
            this.stopShipt(ship , 'top');
        }
      }

      stopShipt(ship : any , side:String){
        if(side == 'down'){            
            ship.y = config.scale.height 
        }

        if(side == 'right'){
            ship.x = config.scale.width 
        }

        if(side == 'left'){
            ship.x = 0
        }
        if(side == 'top'){
            ship.y = 0
        }
      }

}

