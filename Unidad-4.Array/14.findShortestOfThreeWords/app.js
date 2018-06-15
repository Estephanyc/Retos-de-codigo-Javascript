function findShortestOfThreeWords(word1, word2, word3) {
    
    let strings= [word1,word2,word3];
   
    let menorLength = strings[0].length;
    let menorString = strings[0];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length < menorLength) {
            menorLength = strings[i].length;
            menorString = strings[i];
            
        }
       
    }
    
    return menorString

}
var output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(output); // -> 'a'