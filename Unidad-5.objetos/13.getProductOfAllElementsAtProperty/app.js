function getProductOfAllElementsAtProperty(obj, key) {
 
 if ((Array.isArray(obj.key)) === false || obj.key.length === 0) {
    return 0
  }
  let mul=1;
  for (let i = 0; i < obj.key.length; i++) {
    mul *= obj.key[i];
    
  }
  return mul
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 24
