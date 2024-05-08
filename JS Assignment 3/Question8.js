function repeatedSumOfDigits(number) {
    function sumDigits(num) {
        return num.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
    }

    let result = number;
    
    while (result >= 10) {
        result = sumDigits(result);
    }

    return result;
}

console.log(repeatedSumOfDigits(456)); 