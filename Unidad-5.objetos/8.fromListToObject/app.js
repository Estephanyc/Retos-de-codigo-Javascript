function fromListToObject(array) {
let obj = {};
  for(let i =0; i < array.length ; i++) {
    
    obj[array[i][0]] = array[i][1];

  }
  return obj
}
console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));
