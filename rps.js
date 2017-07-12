console.log("_________________________START OF MATCH____________________________________________");
var playerMove = ["rock", "paper", "scissors"];

var p1 = playerMove[Math.floor(Math.random() * 3)];
var p2 = playerMove[Math.floor(Math.random() * 3)];

var p1Points = 0;
var p2Points = 0;

function bestOfRounds(times){
    for(i = 0; i < times; i++)
    {
    var winner = false;

while(winner == false)
{
    if(p1 == "rock" && p2 == "scissors")
    {
        console.log("Player 1: Rock beat Player 2: Scissors");
        winner = true;
        p1Points++;
    }

   if(p2 == "rock" && p1 == "scissors")
    {
        console.log("Player 2: Rock beat Player 1: Scissors");
        winner = true;
        p2Points++;
    }

    if(p1 == "paper" && p2 == "rock")
    {
        console.log("Player 1: Paper beat Player 2: Rock");
        winner = true;
        p1Points++;
    }
   if(p2 == "paper" && p1 == "rock")
    {
        console.log("Player 2: Paper beat Player 1: Rock");
        winner = true;
        p2Points++;
    }
    if(p1 == "scissors" && p1 == "paper")
    {
        console.log("Player 1: Scissors beat Player 2: Paper");
        winner = true;
        p1Points++;
    }
    if(p2 == "scissors" && p1 == "paper")
    {
        console.log("Player 2: Scissors beat Player 1: Paper");
        winner = true;
        p2Points++;
    }
    else{
        console.log("DRAW...AGAIN!");
    }
    p1 = playerMove[Math.floor(Math.random() * 3)];
    p2 = playerMove[Math.floor(Math.random() * 3)];
}
    }
    console.log("______________________________________");
    if(p1Points > p2Points){
        console.log("Player 1 WON THE BEST OUT OF 3 ROUNDS!!!!!!!!!!!!!! WOOOO");
    }
    else if(p2Points > p1Points){
        console.log("Player 2 WON THE BEST OUT OF 3 ROUNDS!!!!!!!!!!!!!! WOOOOO");
    }
    else{
        console.log("THIS MATCH WAS A DRAWWW!!!!!!!!!!!!!!!!!!!!");
    }
    
}

bestOfRounds(10); 