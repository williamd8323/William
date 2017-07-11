var myPokemonRoster = ["Pikachu", "Raichu", "JigglyPuff", "Wobbuffet", "William", "Roger", "edgar the Pokemon", "chrissPuff", "Hueue","kevinMEre", "SupremeXBape Pokemon"];
var subs = ["those boys", "the allstar", "hajhahahha", "nukes and roses"];
var z = 0;
if(myPokemonRoster.length %2 != 0)
{
    myPokemonRoster.push(subs[z]);
    z+=1;
}
var i = 0;
var j = myPokemonRoster.length - 1;
var firstToFight = myPokemonRoster[i];
var secondToFight = myPokemonRoster[j];

function fight()
{
    console.log(firstToFight + " VS " + secondToFight);
    console.log("___________________________________________");
}

for(var x = 0; x < myPokemonRoster.length/2; x++)
{
    fight();
    i++;
    j--;
    firstToFight = myPokemonRoster[i];
    secondToFight = myPokemonRoster[j];
}


