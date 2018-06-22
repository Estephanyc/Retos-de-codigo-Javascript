function findPairForSum(array, number) {
    let newArray= [];
    
  for(let i=0 ; i < array.length; i++)
    {
      for(let j=0; j < array.length; j++)
      {
        if (array[i] + array[j] == number )
          {
            newArray[0]= array[j]
            newArray[1]= array[i]
            
          }
      }
        
    
  }
    return newArray

}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
