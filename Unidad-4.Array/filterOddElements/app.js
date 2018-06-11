function filterOddElements(arr) {
    const impares =  arr.filter(
        (elemento) => {
            return elemento % 2 ==1
    }
    );
    return impares
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]