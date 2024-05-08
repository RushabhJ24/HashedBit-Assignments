//What is the output of this snippet of code?
var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x ); //1