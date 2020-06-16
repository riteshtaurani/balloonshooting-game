const game = new Game();
let bubbles = [];

function setup() {   
    createCanvas(1200, 600);
    game.setup();
    angleMode(DEGREES);
    for (let i = 0 ; i < 20 ; i++){
        let x = random(width);
        ley y = reandom(height);
        let r = random (20,60);
        let b = new Bubble (x,y,r);
        bubbles.push(b);
    }
}
  

function preload(){
    game.preload()

}    
  
function draw() {
    game.drawGame();
    rect(350, 20, 500, 250, 20);

}

show(){
    stroke(255);
    strokeWeight (4);
    fill(this.brightness,125);
    ellipse(this.x,this.y,this.r *2);
}
// let bulletsFired = [];

// function mousePressed(){
//     console.log("mouse is pressed");
//     let mouseVector = game.player.getMouseVector();
// 	//oneBullet = new bullet(mouseVector.x, mouseVector.y);
//     //bulletsFired.push(oneBullet);
// }

// for (var i = 0; i < bulletsFired.length; i++){
//     bulletsFired[i].display();
//     bulletsFired[i].update();
//     if (bulletsFired[i].outOfBounds()){
//           bulletsFired.splice(i,1);
//     }
//     // else if (bulletsFired[i].hitScan()){
//     //       bulletsFired.splice(i,1);
//     // }
// }
