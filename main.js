const game = new Game();
let shots = 20;
let points = 0;
let back_sound;
let gunshot;
let balloon_pop;
let loser;
let end;
let highScore;

function preload(){
    game.preload();
    back_sound = loadSound('assets/sounds/background.mp3');
    gunshot = loadSound('assets/sounds/gunshot.mp3');
    balloon_pop = loadSound('assets/sounds/balloon_pop.mp3');
}   

function setup() {   
    createCanvas(1600, 600);
    game.setup();
    angleMode(DEGREES);
    Retry = createButton('retry');
	Retry.hide();
	
	if (!Cookies.get('highscore')){
		Cookies.set('highscore', '0');
	}
    highScore = Cookies.get('highscore');
    

}
  

 
  
function draw() {
   
    if (game.intro === true && game.start === false) {
        image(game.backgroundImg,0,0,width,height);
        fill('darkblue');
        textFont('Georgia')
        textSize(50);
        text(`Let's have some fun!!!`, 600, 20, 500, 200);
        text(`Press Enter To Begin`, 600, 100, 650, 200);
        textSize(40);
        text(`SHOOT - Left Click`, 600, 200, 500, 100);
        fill('white')
        text(`Points as below:`, 600, 250, 500, 100);
        textSize(30)
        text(`Yellow - 20`,600, 300, 500, 100);
        text(`Blue - 10`,600, 350, 500, 100);
        text(`pink - 5`,600, 400, 500, 100);
        text(`green- 2`,600, 450, 500, 100);
        fill('black');
        textSize(50)
        text(`To beat your own highscore, keep playing `,300, 550)

      } 
    //mouseY = 400;
    else if (game.start === true && shots > -1 ){
        game.intro === false;
        game.gameOver === false;
        //frameRate()
        game.drawGame();
        fill('white');
        textFont('Ubuntu');
        document.querySelector("#score").innerText = `SCORE ${points}`;
        document.querySelector("#shots").innerText = `SHOTS ${shots}`;
        if (game.timer <= 10) {
            fill('red');
        }
        document.querySelector("h3").innerText = `TIME LEFT: 00:${game.timer}`;
        if (frameCount % 60 === 0) {
            game.timer--;
          }
      

    }
    if (shots === 0 || game.timer < 0) {
        game.gameOver = true;
        gameOver();
    } 
    

}

function mousePressed(){
    let mouseVector = game.player.getMouseVector();
    oneBullet = new bullet(mouseVector.x, mouseVector.y);
    game.bullets.push(oneBullet);
    shots --;
    //console.log(game.bullets);
    if (game.start == true && game.gameOver == false){
    gunshot.play();
    gunshot.setVolume(0.3);
    }

}

function keyPressed() {

    if (keyCode === 13) {
      game.start = true;
      game.gameOver = false;
      game.timer = 60;
      playBackground();
    }
    if(keyCode === 32 && game.gameOver == true){
        window.location.reload();
        //console.log("replay");
    }
  }

  function gameOver(){
	push()
	noStroke();
	fill(20)
	rect(450,200,600,200)
	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("GAME OVER",750,250)
		
	textFont('Helvetica');
	textSize(25);
	fill(235);
	let scoreString = "score: " + points;
	text(scoreString, 750, 300);
	
	if (points > highScore) {
		highScore = points;
		Cookies.remove('highscore');
		Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
    text(highScoreString, 750, 340);
    textSize(30)
    text("Please press SpaceBar to try again", 750,390)
	
	pop();
    noLoop();
}

 function playBackground()
 {
    
        back_sound.setVolume(0.3);
        back_sound.play();
        back_sound.playMode('sustain');
     
}



