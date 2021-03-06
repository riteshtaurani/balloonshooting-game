class Player {
    constructor()
    {
        this.x = 700;
    }

    setupPlayer ()
    {
        this.y = height - game.playerImg.height
        this.width = game.playerImg.width;
        this.height = game.playerImg.height;
    }

    drawingThePlayer()
    {   
        
       
     this.x=mouseX-(this.width/2);
        if (this.x > 900){
             this.x = 900;
        }
        if (this.x < 400){
            this.x = 400;
       }
        image(game.playerImg,this.x, this.y,);
        
        //console.log(game.playerImg);
    }

    getMouseVector(){
        let mouseXalt = mouseX - (this.x + (this.width/2));
        let mouseYalt = mouseY - (this.y + (this.height/2));
        let mouseDir = createVector(mouseXalt, mouseYalt);
        mouseDir.normalize();
        mouseDir.limit(2);
        return mouseDir; 
        
    }
    
    drawReticle(){
        noFill();
        strokeWeight(2);
        stroke(16, 18, 71, 125);
        ellipse(mouseX, mouseY, 20);
        stroke(16, 18, 71, 125);
        line(mouseX-14, mouseY-14, mouseX+14, mouseY+14);
        line(mouseX+14, mouseY-14, mouseX-14, mouseY+14);
        stroke(16, 18, 71, 125);
        //line(this.x + (this.width/2), this.y + (this.height/2), mouseX, mouseY);
    }

}