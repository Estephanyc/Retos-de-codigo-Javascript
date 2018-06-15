function computeSumOfAllElements(arr) {
   
   let sum=0;
   arr.forEach(element => {
       sum+= element;
   });
   return sum

}
var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6