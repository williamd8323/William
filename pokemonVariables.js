var pokemonName = "Pikachu";
var pikachuHP = 35;
var pikachuNum = 25;
var pikachuType = "Electric";
var pikachuBestMove  = "Thunder Bolt";
var pikachuLastEvo  = "Raichu";
var height = .4;
var heightUnit = "m";
var weight = 6;
var weightUnit = "kg";
var pikachuGender = "fluid";

var abilities = "Static, Lightningrod";

function printpodexInfo(){
    console.log('This is ' + pokemonName 
            + " pronounced ' PIK - A - CHU.'" + " its gender is " 
            +pikachuGender + ". It is an " + pikachuType 
            + " and has an HP of " + pikachuHP + ".");
}

function askForMore(){
    console.log("<li>Uhhh why did you say yes...</li>");
    console.log("Pikachu Number: " + pikachuNum);
    console.log("Pikachu LastEvo: " + pikachuLastEvo);
    console.log("Pikachu height: " + height + heightUnit);
    console.log("Pikachu weight: " + weight + weightUnit);
    console.log("Lastly, Its Gender....: " + pikachuGender);

}

printpodexInfo();
askForMore();