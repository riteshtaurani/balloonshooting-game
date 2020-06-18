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
    if (game.start === true)
    {
        back_sound.loop();
    }
    Retry = createButton('retry');
	Retry.hide();
	
	if (!Cookies.get('highscore')){
		Cookies.set('highscore', '0');
	}
    highScore = Cookies.get('highscore');
    
    if (game.start === true){
    back_sound.setVolume(0.3);
    back_sound.play();
    back_sound.playMode('sustain');
    }

}
  

 
  
function draw() {
   
    if (game.intro === true && game.start === false) {
        image(game.backgroundImg,0,0,width,height);
        fill('black');
        textFont('Ubuntu');
        textSize(65);
        text(`BALLOON-SHOOTING`, 400, 30, 600, 100);
        fill('blue');
        textSize(50);
        text(`Let's have some fun`, 600, 260, 500, 200);
        text(`Press Enter To Begin`, 600, 310, 650, 200);
        fill('blue');
        textSize(40);
        text(`FIRE - Left Click`, 600, 400, 500, 100);
        text(`POINTS AS BELOW`, 600, 440, 500, 100);
      } 
    //mouseY = 400;
    else if (game.start === true && shots > -1 ){
        game.intro === false;
        game.gameOver === false;
        //frameRate()
        game.drawGame();

        back_sound.vol
        fill('white');
        textFont('Ubuntu');
        text(`SCORE ${points}`, 900, 100, 380, 100);
        text(`SHOTS ${shots}`, 900, 145, 500, 100);
        if (game.timer <= 10) {
            fill('red');
        }
        text(game.timer, 700, 100, 300, 100);
        if (frameCount % 60 === 0) {
            game.timer--;
          }
      

    }
    if (shots === 0 || game.timer === 0) {
        game.gameOver === true;
        gameOver();
    } 
    

}

function mousePressed(){
    let mouseVector = game.player.getMouseVector();
    oneBullet = new bullet(mouseVector.x, mouseVector.y);
    game.bullets.push(oneBullet);
    shots --;
    //console.log(game.bullets);
    if (game.start === true || game.gameOver === false){
    gunshot.play();
    }

}

function keyPressed() {

    console.log(keyCode);
    if (keyCode === 13) {
      game.start = true;
      game.gameOver = false;
      game.timer = 60;
      console.log('enter');
    }
    if(keyCode === 32 && game.gameOver === true){
        window.location.reload();
        //console.log("replay");
    }
  }

  function gameOver(){
	push()
	
	print("DED");
	noStroke();
	fill(20)
	rect(0,200,600,200)
	
	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("GAME OVER",300,300)
		
	textFont('Helvetica');
	textSize(18);
	fill(235);
	let scoreString = "score: " + points;
	text(scoreString, 300, 340);
	
	if (points > highScore) {
		highScore = points;
		Cookies.remove('highscore');
		Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
    text(highScoreString, 300, 360);
    text("PLease press SpaceBar to try again", 300,300)
	
	
	pop();
    noLoop();
}

// function playBackground()
// {
//     if (!back_sound.isPLaying()){
//         back_sound.loop();
//     }
// }



