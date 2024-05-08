function findTax(salary) {
    let taxRate;
    let taxAmount;

    switch (true) {
        case (salary <= 500000 && salary > 0):
            taxRate = 0;
            break;
        case (salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary <= 1500000):
            taxRate = 0.2;
            break;
        default:
            taxRate = 0.3;
    }

    taxAmount = salary * taxRate;
    return taxAmount;
}

console.log(findTax(400000)); 
console.log(findTax(600000)); 
console.log(findTax(1200000)); 
console.log(findTax(2000000)); 