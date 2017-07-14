var prompt = require('prompt-sync')();

function pokemon(name, attack, hp, damage, isLegend, types){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.damage = damage;
    this.isLegend = isLegend;
    this.types = types;
}

var arrOfPoks = [];

arrOfPoks.push(new pokemon("William", "lightning", 100, 15,true, "human"));
arrOfPoks.push(new pokemon("Nick", "PooP", 100, 10, false, "poop"));

function printObjInfo(obj)
{
    console.log("Pokemon info: ");
    for(var key in obj)
    {
        console.log(key + ": " + obj[key]+" ");
    }
}

function pokAttacked(attacked, attacker){
    attacked.hp-=attacker.damage;
    console.log(attacker.name + " attacked " + attacked.name);
    printObjInfo(attacked);
}



function createPokemon()
{
    console.log("--------------------------------------------------------CREATE YOUR OWN POKEMON---------------------------------------------------");
    console.log();
    var crPok = new pokemon(prompt("Pokemon Name?  "), prompt("Pokemon attack?  "), prompt("Pokemon HP?  "), prompt("Pokemon damage?   "),prompt("Pokemon is Legend?  "),
                            prompt("Pokemon Type?  "));
    return crPok;
}


for(i = 0; i < arrOfPoks.length; i++)
{
    printObjInfo(arrOfPoks[i]);
}

console.log();

pokAttacked(arrOfPoks[1], arrOfPoks[0]);

console.log();
console.log();

var mPok = createPokemon();

console.log();
printObjInfo(mPok);

console.log();

