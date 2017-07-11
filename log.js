var myPeeps = ["rabbit", "who is edgar", "roger", "cool nick", "chris", "kevin", "that guy on slack", "tknight", "akhurana", "the other guy"];
for(var i = 0; i < myPeeps.length; i++)
{
    console.log(myPeeps[i]);
    if(myPeeps[i].indexOf("guy") >=0){
        console.log("Sorry i forgot your name");
    } 
}