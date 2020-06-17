const game = new Game();
let shots = 20;
let points = 0;

function setup() {   
    createCanvas(1200, 600);
    game.setup();
    angleMode(DEGREES);

}
  

function preload(){
    game.preload()

}    
  
function draw() {
    mouseY = 400;
    if (shots > 1 ){
        frameRate(1000)
        game.drawGame();
    }
    else {
        console.log(points);
    }
    

}

function mousePressed(){
    let mouseVector = game.player.getMouseVector();
    oneBullet = new bullet(mouseVector.x, mouseVector.y);
    game.bullets.push(oneBullet);
    shots --;
    console.log(game.bullets);
    

}

