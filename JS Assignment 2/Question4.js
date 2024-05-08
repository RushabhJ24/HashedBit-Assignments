function sumOfProductDigits(n1, n2) {
    const num1Digits = n1.toString().split('').map(Number); 
    const num2Digits = n2.toString().split('').map(Number); 

    let sum = 0;

    for (let i = 0; i < Math.max(num1Digits.length, num2Digits.length); i++) {
        const digit1 = num1Digits[num1Digits.length - 1 - i] || 0; 
        const digit2 = num2Digits[num2Digits.length - 1 - i] || 0; 

        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProductDigits(9, 34)); 
