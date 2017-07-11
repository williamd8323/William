var friends = ["f1", "f2", "f3"];


function printArray(array)
{
    for(i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

printArray(friends);
console.log("--------------");
friends.pop(friends.length-1);
printArray(friends);
