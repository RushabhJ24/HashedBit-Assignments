let string = 'INDIA';
let additionalLetters = 'ONES';
let stringArray = string.split(''); 

stringArray.splice(3, 0, ...additionalLetters);

let result = stringArray.join(''); 

console.log(result); 