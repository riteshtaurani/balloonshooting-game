class Game{
constructor()
{
    this.player = new Player();
    this.balloons = [];


}
preload(){
    //console.log("preload")
    this.background = new Background();
    this.playerImg = loadImage("assets/images/shooter.png");
    this.backgroundImg = loadImage("assets/images/background_image.jpg");
    for (let i =0 ; i < 3 ; i++){
        this.balloons[i] = loadImage ('assets/images/balloon' + i + '.png')   
    }
  
}

setup()
{
    this.player.setupPlayer();
    this.player.getMouseVector();
}
drawGame()
{
    image(this.backgroundImg,0,0,width,height);
    this.player.drawingThePlayer();
    this.player.drawReticle();
}

}

 