function getLargestNumberAmongMixedElements(arr) {
    const numeros =  arr.filter(
        (elemento) => {
            return typeof elemento === 'number';  
    });
    if (arr.length === 0 || numeros.length === 0)
    {
        return 0
    }
    let mayor = numeros[0];
    for (i = 0; i < 10; i++) {

        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor
}
var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
