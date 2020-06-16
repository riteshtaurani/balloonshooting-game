const game = new Game();

function setup() {   
    createCanvas(1200, 600);
    game.setup();
    angleMode(DEGREES);

}
  

function preload(){
    game.preload()

}    
  
function draw() {
    game.drawGame();

}


function mousePressed(){
    let mouseVector = game.player.getMouseVector();
    oneBullet = new bullet(mouseVector.x, mouseVector.y);
    game.bullets.push(oneBullet);
}

