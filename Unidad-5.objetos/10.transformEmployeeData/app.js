function transformEmployeeData(array) {

   let newArray = [];
  for (let i = 0; i < array.length; i++) {
   
    let obj = {}
    for (let j = 0; j < array[i].length; j++) {
     // console.log(array[i][j][1])
      obj[array[i][j][0]] = array[i][j][1];
    }
    newArray[i] = obj;
  }
  return newArray
}
console.log(transformEmployeeData(
[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
))
