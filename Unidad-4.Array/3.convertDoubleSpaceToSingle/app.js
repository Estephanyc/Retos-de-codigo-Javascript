function convertDoubleSpaceToSingle(str) {
  
    let stringArray = str.split("  ");
    var newString = stringArray.join(" ");
   return newString
}
var output = convertDoubleSpaceToSingle("hola  tengo  dos  espacios");
console.log(output); // --> "string with double spaces"
