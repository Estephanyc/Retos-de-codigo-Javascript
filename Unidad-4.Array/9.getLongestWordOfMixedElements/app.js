function getLongestWordOfMixedElements(arr) {
    const strings =  arr.filter(
        (elemento) => {
            return typeof elemento === 'string';  
    });
    console.log(strings)
    if (arr.length === 0 || strings.length=== 0)
    {
        stringsNone="";
        return stringsNone
    }
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
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
