function setup(){
    createCanvas(windowWidth/1.75, windowHeight);
    background(Math.random()*255, Math.random()*255, Math.random()*255);
}

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

function drawRandomShapes(){
    mouseDragged();
}

function drawTriOnly(){
    function mouseDragged(){
        drawTri();
    }
}

function drawRectOnly(){
    function mouseDragged(){
        drawRect();
    }
}

function drawEllipseOnly(){
    function mouseDragged(){
        drawEllipse();
    }
}