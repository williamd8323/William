function randLetter()
{
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.toLowerCase();
    var index = Math.floor(Math.random() * 26);
    return alphabet.substring(index, index+1);
}

console.log("Random Letter: "+ randLetter());

function randWord(){
    var word = "";
    var randLength = Math.floor(Math.random()*10);
    for(i = 0; i < randLength; i++)
    {
        word+=randLetter();
    }
    return word;
}

console.log("random word : "+randWord());

function randSentence()
{
    var sentence = "";
    var num  = Math.floor(Math.random()*10);
    for(i = 0; i < num; i++)
    {
        
        sentence+=randWord() + " ";
    }
    sentence = sentence.substring(0,1).toUpperCase()
                + sentence.substring(1);

    return sentence + ".";
   
}

console.log("random sentence: " + randSentence());




//The pokemon battle
console.log("______________________________________THE POKEMON BATTLE________________________________");

/*
var arrOfPokemon = [["Pikachu", 23, 1000], ["William", 77, 1000], ["CoolNick", 10, 1000], ["FaisalMan", 15, 1000], ["EdgarTheKid", 2, 1000],
                    ["RodgerDodger", 666, 1000], ["KevinFromStuy", 1, 1000], ["KevinTheTeacher", 3, 1000], ["chrisTheSmurf", 0.3, 1000], ["IYAYIII", 90, 1000], ["KatieKate", 1000, 1000],
                    ["Mr Mo", 17, 1000], ["Harraway", 8, 1000], ["Mohinur", 5, 1000],
                    ["adenSellsFakeSupreme", 6, 1000], ["My Brother's name is Aaron", 99, 1000],
                    ["Taseen Init", 33, 1000], ["Tahmidur u done know eh", 1.1, 1000],
                    ["feel Da Bern - ado", 999.9, 1000]]; */

var fstPokemon = ["Pikachu", 23, 100];
var scndPokemon = ["William", 17, 150];

function coinFlip()
{
    var arr = [fstPokemon, scndPokemon];
    var starter = arr[Math.floor(Math.random()*2)];
    return starter;
}

function pokeAttack()
{
    var starter = coinFlip();
    var follow = null;
    if(starter == fstPokemon)
    {
        follow = scndPokemon;
    }
    else{
        follow = fstPokemon;
    }
    console.log(starter[0] + " Will attack first");
    while(starter[2] <= 0  || follow[2] <= 0 )
    {
        follow[2]-=starter[1];
        starter[2]-=follow[1];
    }
    if(starter[2] > follow[2])
    {
        console.log(starter[0] + " DESTROYS " + follow[0]);
    }
    else{
        console.log(follow[0] +" DESTROYS "  + starter[0]);
    }
}

pokeAttack();