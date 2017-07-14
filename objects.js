function pokemon(name, attack, hp, isLegend, types){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.isLegend = isLegend;
    this.types = types;
}

var charizard = new pokemon("Charizard", "Blaze", 266, false, ["fire", "flying"]);

console.log(charizard.name);
charizard.hp = 100;
console.log(charizard.hp);


function superHero(realName, ability, gender, archEnemy)
{
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
}

var deadpool = new superHero("Wade Wilson", ["Immortal", "Regenerate", "Ninja Moves"], "Heterosexual male but occasionally gay", "Ajax");

function printObjInfo(obj)
{
    console.log("Super Hero Info is");
    for(var key in obj)
    {
        console.log(key + ": " + obj[key]+" ");
    }
}

printObjInfo(deadpool);