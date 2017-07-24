function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0,0,0);
}

function set(){
    createCanvas(windowWidth,windowHeight);
    background(0,0,0);
    fill(0,255,0);
    var r = rect(x, y, 20,20);
}

function move(){
    if((keyCode === LEFT_ARROW)){
        set();
        fill(0,255,0);
        r = rect(x--, y, 20,20);
        set();
        fill(0,255,0);
        r = rect(x--, y, 20,20);
        set();
        fill(0,255,0);
        r = rect(x--, y, 20,20);
    }
    if(keyCode === RIGHT_ARROW){
        set();
        fill(0,255,0);
        r = rect(x++, y, 20,20);
        set();
        fill(0,255,0);
        r = rect(x++, y, 20,20);
        set();
        fill(0,255,0);
        r = rect(x++, y, 20,20);
        
    }
    if(keyCode === UP_ARROW){
        set();
        fill(0,255,0);
        r = rect(x, y--, 20,20);
        set();
        fill(0,255,0);
        r = rect(x, y--, 20,20);
        set();
        fill(0,255,0);
        r = rect(x, y--, 20,20);
    }
    if(keyCode === DOWN_ARROW){
        set();
        fill(0,255,0);
        r = rect(x, y++,20,20);
        set();
        fill(0,255,0);
        r = rect(x, y++,20,20);
        set();
        fill(0,255,0);
        r = rect(x, y++,20,20);
    }
}


function generateWall(){
    var x1 = Math.random(1000);
    var y = 300;
    line(x1,y,x1,y+20);
}

var x = 400;
var y = 400;
function draw(){
    stroke(255);
    move();
}
