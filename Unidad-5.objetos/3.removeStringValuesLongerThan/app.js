  function removeStringValuesLongerThan(num, obj) {
 
    for (var [key, value] of Object.entries(obj)) {
      if (value.length > num)
      {
        delete obj[key]; 
      }
    }
    return obj;
};
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
