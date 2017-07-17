function setup(){
	createCanvas(1000,1000);
    background(Math.random()*225, Math.random()*225, Math.random()*225);
}

function drawRect(){
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    rect(mouseX, mouseY, 55, 55);
}

function drawTri(){
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    triangle(mouseX, mouseY, (mouseX+27.5), mouseY-55, mouseX+55, mouseY);
}

function drawEllipse(){
    fill(Math.random()*225, Math.random()*225, Math.random()*225);
    ellipse(mouseX, mouseY, 55, 55);
}

var arr = [drawRect(), drawTri(), drawEllipse()];


function mouseDragged() {
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

mouseDragged();