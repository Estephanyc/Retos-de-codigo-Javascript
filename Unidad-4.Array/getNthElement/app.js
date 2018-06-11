function getNthElement(array, n) {
    if(array.length == 0)
    {
        return undefined
    }
    return array[n];
}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3