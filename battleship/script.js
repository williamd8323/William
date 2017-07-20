var cpuGrid = [[false, false, false, false],
               [false, false, false, false],
               [false, false, false, false],
               [false, false, false, false]];


var humanGrid = [[false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false]];

var ship = true;
var torpedo = true;
var arrDim = 4;                       
var scaler = 400;
var boxWidth = 100;
var boxHeight = 100;
                 
function createGrid(){
    for(row = 0; row < scaler; row+=boxHeight){
        for(col = 0; col < scaler; col+=boxWidth){
            fill(255,255,255);
            rect(col,row,boxWidth, boxHeight);
        }
    }
}

function cpuMove(){
   var r = Math.floor(Math.random()*arrDim);
   var c = Math.floor(Math.random()*arrDim);
   cpuGrid[r][c] = ship;
   return [r,c]
}




var x =-1;
var y = -1;
function humanMove(){
    function mouseClicked(){
    return [mouseX, mouseY];
}
    var mouseClicked = mouseClicked();
    if((mouseClicked[0]>=0 && mouseClicked[0]<=scaler) && mouseClicked[1] >=0 && mouseClicked[1] <= scaler){
        var xx = Math.floor(mouseClicked[0]/boxWidth);
        var yy = Math.floor(mouseClicked[1]/boxHeight);
        humanGrid[yy][xx] = torpedo;
        if( humanGrid[yy][xx] == torpedo && cpuGrid[yy][xx] == ship){
             fill(0,255,0);
             rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight);
        }
            else{
                fill(255,0,0);
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight);
            }
        x = xx;
        y = yy;
        //return [yy,xx];
    }
}

function checkState(){
    cpuMove();
    humanMove();
    /*
    for(var i = 0; i < arrDim; i++){
        for(var j = 0; j < arrDim; j++){
            if(humanGrid[i][j] == true && cpuGrid[i][j] == false){
                fill(255,0,0);
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight);
            }
            else if(humanGrid[i][j] == true && cpuGrid[i][j] == true){
                fill(0,255,0);
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight);
            }
            else{
                fill(255,255,255);
                rect(x*boxWidth,y*boxHeight,boxWidth,boxHeight);
            }
        }
        
    }
    */
}

function setup(){
    createCanvas(1000,1000);
    background(Math.random()*255, Math.random()*255, Math.random()*255);
    createGrid();
}

//function draw(){
    //cpuMove();
    //humanMove();
//}

