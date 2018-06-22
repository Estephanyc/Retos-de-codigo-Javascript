function getSumOfAllElementsAtProperty(obj, key) {
   if ((Array.isArray(obj.key)) === false || obj.key.length == 0  )
  {
    return 0
  }
  let sum=0;
for(let i =0; i< obj.key.length; i++)
{
 sum += obj.key[i];
}
return sum
}
var obj = {
  key: "hola"
};
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 13
