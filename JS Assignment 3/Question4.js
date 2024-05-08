let str = "My name is Rushabh Jain and I am pursuing BTech in Computer Engineering.";

function countVowels(str) {
    const vowels = /[aeiou]/gi; 
    const vowelCount = (str.match(vowels) || []).length; 
    return vowelCount;
}

function countConsonants(str) {
    const consonants = /[bcdfghjklmnpqrstvwxyz]/gi; 
    const consonantCount = (str.match(consonants) || []).length; 
    return consonantCount;
}

let vowelCount = countVowels(str);
let consonantCount = countConsonants(str);

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);