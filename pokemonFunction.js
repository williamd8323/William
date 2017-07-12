function randLetter()
{
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index = Math.floor(Math.random() * 26);
    return alphabet.substring(index, index+1);
}

console.log(randLetter());

function randWord(lengthOfWord){
    var word = "";
    for(i = 0; i < lengthOfWord; i++)
    {
        word+=randLetter();
    }
    return word;
}

console.log(randWord(7));

function randSentence(num)
{
    var sentence = "";
    for(i = 0; i < num; i++)
    {
        sentence+=randWord(7) + " ";
    }
    console.log(sentence);
}

randSentence(5);