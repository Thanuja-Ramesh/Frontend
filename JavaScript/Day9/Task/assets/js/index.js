//Create a function that accepts two numbers as parameters and returns their sum.
function sum(a,b){
    return a+b;
    }
    console.log(sum(10,11));

//Create a function that accepts a number n and uses a for loop to print all even numbers from 1 to n.
function printSum(n){
    for(let i=1;i<=n;i++){
        if(i%2===0){
            console.log(i);
            
        }
    }

}
printSum(10)

//Create an arrow function that accepts a number and returns its factorial.

const factorial = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(5));

//Create a program demonstrating the difference between global scope, function scope, and block scope using var, let, and const.
// Global Scope
var a = 10;

console.log(a);


// Function Scope
function test() {
    var b = 20;
    console.log(b);
}

test();


// Block Scope
{
    let c = 30;
    const d = 40;

    console.log(c);
    console.log(d);
}