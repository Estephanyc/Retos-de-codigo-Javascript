function computeSumBetween(num1, num2) {

    let sum= 0;
    for(let i=0; i<(num2-num1); i++)
    {
       sum += num1 + i;
    }
    return sum
}
var output = computeSumBetween(2, 5);
console.log(output); // -> 9