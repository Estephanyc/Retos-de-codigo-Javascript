function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  
return obj;
}

var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // --> [1, 3]
