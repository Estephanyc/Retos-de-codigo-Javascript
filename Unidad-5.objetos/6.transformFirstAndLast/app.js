function transformFirstAndLast(array) {
   let obj={}
 
  obj[array[0]] = array[array.length-1]
  return obj
}
