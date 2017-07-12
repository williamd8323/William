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

var fstPokemon = ["Pikachu", 23, 1000];
var scndPokemon = ["William", 77, 1000];

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