
let balloons = [];
let bubbles = [];

class Balloon{
constructor (x,y,r,img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.balloon = img;
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

}