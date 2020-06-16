class bullet{
	constructor(xSpd, ySpd){
		this.x = game.player.x+game.playerImg.width/1.9 ;
		this.y =game.player.y+game.playerImg.height/1.9;
		this.xSpd = 30*xSpd;
		this.ySpd = 30*ySpd;
	}

	
	display(){

		push()
		image(game.bulletimg,this.x , this.y , 20 , 20);
		this.update()
		this.outOfBounds()
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}
	
	preload(){
		for (let i =0 ; i < 4 ; i++)
		{
			balloons[i] = loadImage (`assets/images/balloon${i}.png`);   
		}
	}
	setup(){
	
		for (let i = 0 ; i < 80 ; i++)
		{
			let x = random(width-100);
			let y = random(height-420);
			let r = random (20,30);
			let balloon = random(balloons);
			let b = new Balloon (x,y,r,balloon);
			bubbles.push(b);
		}
	
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
}
