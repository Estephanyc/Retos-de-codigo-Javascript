function getElementOfArrayProperty(obj, key, index) {
  if (key.length === 0 || index > key.length || (Array.isArray(obj.key)) === false )
  {
    return undefined;
  }
  return obj.key[index];
}

var obj = {
  key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'