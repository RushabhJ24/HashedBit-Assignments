// What is the output of this snippet of code?
function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() ); //string