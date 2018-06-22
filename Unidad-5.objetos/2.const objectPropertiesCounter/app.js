const objectPropertiesCounter = (obj) => {
   let propieties = Object.keys(obj);
   return propieties.length
};
const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(output); // -> 2
