
let balloons = [];
let bubbles = [];

class Balloon{
constructor (x,y,r,img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.balloon = img;
}

preload(){
    for (let i =0 ; i < 3 ; i++){
        balloons[i] = loadImage (`assets/images/balloon${i}.png`);   
    }
}
setup(){

    for (let i = 0 ; i < 80 ; i++){
        let x = random(width-200);
        let y = random(height-200);
        let r = random (20,40);
        let balloon = random(balloons);
        let b = new Balloon (x,y,r,balloon);
        bubbles.push(b);
    }

}

drawBalloon(){
    for (let i =0; i < bubbles.length ; i++){
        bubbles[i].show();
    }
}

show (){
    image(this.balloon,this.x,this.y,this.r,this.r);
}

}