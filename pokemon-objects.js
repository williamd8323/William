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

for(i = 0; i < arrOfPoks.length; i++)
{
    printObjInfo(arrOfPoks[i]);
}

pokAttacked(arrOfPoks[1], arrOfPoks[0]);

