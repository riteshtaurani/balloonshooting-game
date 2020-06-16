class Game{
constructor()
{
    this.player = new Player();
    this.balloon = new Balloon();

}
preload(){
    //console.log("preload")
    this.background = new Background();
    this.playerImg = loadImage("assets/images/shooter.png");
    this.backgroundImg = loadImage("assets/images/background_image.jpg");
    this.balloon.preload();
    
}

setup()
{
    this.player.setupPlayer();
    this.player.getMouseVector();
    this.balloon.setup();
}
drawGame()
{
    image(this.backgroundImg,0,0,width,height);
    // this.player.drawReticle();
    this.balloon.drawBalloon();
    this.player.drawingThePlayer();
}

}

 