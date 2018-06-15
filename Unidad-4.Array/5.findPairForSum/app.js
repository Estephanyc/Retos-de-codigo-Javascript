function findPairForSum(array, number) {
    let newArray= [];
    for(let i=0 ; i < array.length; i++)
    {
        for(let j=1; j < array.length; j++)
        {
            if (array[i] + array[j] == number )
            {
             newArray[i]= array[i]
             newArray[i+1]=array[j]
             break
            }
        }
        
    }
    return newArray

}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
