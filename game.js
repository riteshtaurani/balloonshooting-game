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
  
}

setup()
{
    this.player.setupPlayer();
}
drawGame()
{
    image(this.backgroundImg,0,0,width,height);
    this.player.drawingThePlayer();
}

}

