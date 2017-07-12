
var people = ["Edgar", "Nick", "William", "Faisal", "Cool Nick"];
function randomPick(index)
{
    var randomNumber = Math.floor(Math.random() * index);
    var result = people[randomNumber];
    return result;
}
console.log(randomPick(people.length));