function convertObjectToList(obj) {
 let newArray = Object.entries(obj)

  return newArray

}
console.log(convertObjectToList(
  {
    name: 'Holly',
    edad: 35,
    papel: 'productor'
  }
))