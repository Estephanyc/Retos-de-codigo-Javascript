function getLongestOfThreeWords(word1, word2, word3) {
    
    let strings= [word1,word2,word3];
  
    
    let mayorLength = 0;
    let mayorString =[];
    for (let i = 0; i < strings.length; i++) {
        if (mayorLength < strings[i].length) {
            mayorLength= strings[i].length;
            mayorString= strings[i];
        }
    }
    return mayorString
}
var output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(output); // -> 'estos'
