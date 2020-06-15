const game = new Game();

function setup() {   
    createCanvas(1200, 600);
    game.setup();
}
  

function preload(){
    game.preload()

}    
  
function draw() {
    game.drawGame();
    rect(350, 20, 500, 250, 20);

}

let bulletsFired = [];

function mousePressed(){
	let mouseVector = getMouseVector();
	oneBullet = new bullet(mouseVector.x, mouseVector.y);
    bulletsFired.push(oneBullet);
}

for (var i = 0; i < bulletsFired.length; i++){
    bulletsFired[i].display();
    bulletsFired[i].update();
    if (bulletsFired[i].outOfBounds()){
          bulletsFired.splice(i,1);
    }
    else if (bulletsFired[i].hitScan()){
          bulletsFired.splice(i,1);
    }
}
