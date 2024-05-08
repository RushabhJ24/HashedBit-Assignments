function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

console.log(calculate(5, 3, '+')); 
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3, '*')); 
console.log(calculate(5, 3, '/')); 
console.log(calculate(5, 0, '/')); 
console.log(calculate(5, 3, '%')); 