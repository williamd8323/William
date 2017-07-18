var inp;
var strArr;
var str;
var points = 0;
var ptsDisp;
var strType;
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(Math.random()*255, Math.random()*255, Math.random()*255);
    textSize(32);
    text("Write Below",500,0,200,200);
    inp = createInput("","text");
    inp.position(100, 100);
    inp.size(500, 100);


    strArr = ["I want to make a website", "Internet Of Things", "Man never know when it's shutdown, eh", "I have failed!", "All star code"];
    str = strArr[Math.floor(Math.random()*strArr.length)];


    ptsDisp = text("points: ", 700, 100, 300, 100);

    strType = text("String to type: "+str, 700, 200, 500, 100);
    

}


//the draw function to keep sentence changing


//redo the canvas as a reset
function resetTrack(){
    background(Math.random()*255, Math.random()*255, Math.random()*255);
    textSize(32);
    text("Write Below",500,0,200,200);
    inp = createInput("","text");
    inp.position(100, 100);
    inp.size(500, 100);

    str = strArr[Math.floor(Math.random()*strArr.length)];


    ptsDisp = text("points: " + points, 700, 100, 300, 100);

    strType = text("String to type: "+str, 700, 200, 500, 100);
    

}



function keyTyped(){
        if(keyCode === ENTER){
            if(inp.value() === str){
                points+=10;
                resetTrack();
            }
            else{
                points-=10;
                resetTrack();
           }
    }
        
}

////some drawing functions

var scale = Math.random()*55;
function drawRect(){
    scale = Math.random()*55;
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    rect(mouseX, mouseY, scale, scale);
}

function drawTri(){
    scale = Math.random()*55;
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    triangle(mouseX, mouseY, (mouseX+scale/2), mouseY-scale, mouseX+scale, mouseY);
}

function drawEllipse(){
    scale = Math.random()*55;
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    ellipse(mouseX, mouseY, scale, scale);
}

var arr = [drawRect(), drawTri(), drawEllipse()];


function mouseDragged() {
    scale = Math.random()*55;
//background(Math.random()*225, Math.random()*225, Math.random()*225);
var rand = Math.floor(Math.random()*3);
if(rand==0){
    drawRect();
}
else if(rand == 1){
    drawTri();
}
else{
    drawEllipse();
}
  
}




