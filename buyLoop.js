var prompt = require('prompt-sync')();

var playerInfo = [];
var amtToSpend = 1000;
var boughtItems = [];
var inventory = [];



function item(name, cost)
{
    this.name = name;
    this.cost = cost;
}

var itemsToBuy = [new item("Sword", 200), new item("Shield", 50),
                 new item("Boots", 60), new item("Health Potion", 60), 
                 new item("Armor", 300), new item("Horse", 400),
                 new item("Water", 10),
                 new item("Food", 10)];

function viewStore()
{
    console.log("The STORE");
    console.log("{");
    for(i = 0; i < itemsToBuy.length; i++){
        console.log("***NAME OF ITEM: " + itemsToBuy[i].name + 
                    " COST OF ITEM: " + itemsToBuy[i].cost + " ***");
    }
    console.log(" }");
}

function viewInventory(){
    console.log("You have these items in your INVENTORY");
    console.log("{ ***");
    for(i = 0; i < inventory.length; i++)
    {
        console.log(inventory[i].name + " *** ");
    }
    console.log(" }");
}

function buy()
{
    var confirmBuy = false;
    var itemIndex = -1;
    var idx = 0;
    var ask = prompt("what item would you like to purchase?      ");
    var found = false;

        while(found == false)
        {
            found = ask == itemsToBuy[idx].name.toLowerCase() && amtToSpend >= itemsToBuy[idx].cost;
            if(found == true)
            {
                confirmBuy == true;
                itemIndex = idx;
                break;
            }
            idx++;
        }
    if(found == true)
    {
            amtToSpend-=itemsToBuy[itemIndex].cost;
            inventory.push(itemsToBuy[itemIndex]);
            viewInventory();
            console.log();
            console.log();

            console.log("You have " + amtToSpend + " left to spend! Buy quickly, your quest awaits");

            console.log();

            console.log("AMOUNT LEFT: " + amtToSpend);
    }
    else{
           console.log("That item is not listed or your balance is insufficient");
       }
}

playerInfo[0] = prompt("What will your adventure name be?    ");
playerInfo[1] = prompt("What shall be your adventerous eptiah. Eg: 'Alfred the Great'    ");

console.log("-------Welcome " + playerInfo[1]+ " " + playerInfo[0] + " to the adventure game!-------");

console.log();

console.log("***You will start out with 1000$, and will buy itmes at the shop before going on this adventure!***");

console.log();

console.log("***You must spend as much money as you can! NOTHING SHOULD BE LEFT!***");
console.log();
console.log();


var startGame = prompt("Are you ready to begin thy quest? YES/NO?    ");
console.log();


if(startGame.toLowerCase() == "yes")
{
    console.log("***You will start out with 1000$, and will buy itmes at the shop before going on this adventure!***");
    console.log();
    console.log("***You must spend as much money as you can! NOTHING SHOULD BE LEFT!***");
    while(amtToSpend > 0)
    {
        viewStore();
        buy();
        if(amtToSpend == 0){
            break;
        }
    }
    console.log();
    console.log("You have reached your limit! Venture upon your journey, " + playerInfo[0]);

}

else{
    console.log("Until next time! "  + playerInfo[0]);
}



