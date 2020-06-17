
let balloons = [];
let bubbles = [];


class Balloon
{
constructor (x,y,r,img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.balloon = img?img.src:null
    this.color = img?img.color:null
}

preload(){
   /*  for (let i =0 ; i < 4 ; i++){
        balloons[i] = loadImage (`assets/images/balloon${i}.png`);   
    } */
    balloons=[
        {src:loadImage("assets/images/balloon0.png"), color:"blue"},
        {src:loadImage("assets/images/balloon1.png"), color:"green"},
    ]
    console.log("ballons")
}
setup(){
console.log("setup")
    for (let i = 0 ; i < 60 ; i++){
        let x = random(width-100);
        let y = random(height-400);
        let r = random (20,40);
        let balloon = random(balloons);
        //
        //choose a random number between 0 and 3 
        // use this number to get an element from balloons array
        //let balloon = balloons[num];
        let b = new Balloon (x,y,r,balloon);
        bubbles.push(b);
        
    }

}

drawBalloon(){
    for (let i =0; i < bubbles.length ; i++){
        bubbles[i].show();
        bubbles[i].move();
    }
}

move(){
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    }


show (){
    image(this.balloon,this.x,this.y,this.r,this.r);
}

collide(bullet)
{
    for (let i =0; i < bubbles.length ; i++){
        let d = dist(bubbles[i].x+bubbles[i].r/2, bubbles[i].y+bubbles[i].r/2, bullet.x+20/2, bullet.y+20/2);
        //console.log(bubbles[0].balloon);
    if (d < 20)
    {
        //console.log("boom the ballon"); 
        console.log(bubbles[i]);
        bubbles.splice(i,1);
        points++;
        bullet.xSpd = 0;
        bullet.x = 10000;
        bullet.ySpd = 0;

        

    }
        //console.log(bubbles[0].x,bubbles[0].y);
    }
}

}