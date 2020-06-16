
class Balloon{
constructor (x,y,r,img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.balloon = img;
    this.bubbles = [];
}

setup(){

    for (let i = 0 ; i < 20 ; i++){
        let x = random(width);
        ley y = random(height);
        let r = random (20,60);
        let balloon = random(game.balloons);
        let b = new Bubble (x,y,r,balloon);
        bubbles.push(b);
    }

}

drawBalloon{
    background()
}

}