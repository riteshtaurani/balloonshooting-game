class bullet{
	constructor(xSpd, ySpd){
		this.x = game.player.x+game.playerImg.width/1.9 ;
		this.y =game.player.y+game.playerImg.height/1.9;
		this.xSpd = 60*xSpd;
		this.ySpd = 60*ySpd;
	}

	
	display(){

		push()
		image(game.bulletimg,this.x , this.y , 20 ,20);
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

	
	

	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
}
