function findSmallestNumberAmongMixedElements(arr) {
    const numeros =  arr.filter(
        (elemento) => {
            return typeof elemento === 'number';  
    });
    if (arr.length === 0 ||  numeros.length === 0)
    {
        return 0
    }
   let menor = numeros[0]; 
    for (i = 0; i < numeros.length; i++) {
       
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor
}
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
