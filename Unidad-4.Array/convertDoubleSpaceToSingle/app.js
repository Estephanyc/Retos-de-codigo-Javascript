function convertDoubleSpaceToSingle(str) {
    let separador = "  ";
    let stringArray = str.split(separador);
    var newString = stringArray.join(" ");
   return newString
}
var output = convertDoubleSpaceToSingle("hola  tengo  dos  espacios");
console.log(output); // --> "string with double spaces"
