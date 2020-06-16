class Player {
    constructor()
    {
        this.x = 40;
    }

    setupPlayer ()
    {
        this.y = height - game.playerImg.height
        this.width = game.playerImg.width;
        this.height = game.playerImg.height;
    }

    drawingThePlayer()
    {   
        
        this.y = mouseY - (this.height/2);
      
        if (this.y < 300)
        {
            this.y = 300;
        }
        if(this.y > 420)
        {
            this.y = 420;
        }

        this.x=mouseX-(this.width/2);
        console.log(mouseX);
        if (this.x > 885){
             this.x = 885;
        }
        if (this.x < 300){
            this.x = 300;
       }
        image(game.playerImg,this.x, this.y,);
        
        //console.log(game.playerImg);
    }

    getMouseVector(){
        let mouseXalt = mouseX - this.x;
        let mouseYalt = mouseY - this.y;
        let mouseDir = createVector(mouseXalt, mouseYalt);
        mouseDir.normalize();
        return mouseDir;
    }
    
     drawReticle(){
        noFill();
        strokeWeight(1.5);
        stroke(0, 100, 125, 125);
        ellipse(mouseX, mouseY, 20);
        stroke(80, 160, 200, 125);
        line(mouseX-14, mouseY-14, mouseX+14, mouseY+14);
        line(mouseX+14, mouseY-14, mouseX-14, mouseY+14);
        stroke(80, 160, 200, 125);
        line(this.x, this.y, mouseX, mouseY);
    }

}