
class Game{
constructor()
{
    this.player = new Player();
    this.balloon = new Balloon();
    this.bullets=[];
    this.intro = false;
    this.intro = true;
    this.start = false;
    this.gameOver = false;
    this.timer;
    
}
preload(){
    //console.log("preload")
    this.background = new Background();
    this.playerImg = loadImage("assets/images/shooter.png");
    this.backgroundImg = loadImage("assets/images/background_image.jpg");
    this.bulletimg = loadImage("assets/images/bullet.png");
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
    this.player.drawReticle();
    this.balloon.drawBalloon();
    this.player.drawingThePlayer();
    this.bullets.forEach(bullet=>{
        bullet.display();
        this.balloon.collide(bullet);
    })
    cursor(CROSS);
}



}

 