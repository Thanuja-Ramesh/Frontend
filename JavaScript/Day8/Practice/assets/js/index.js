//Arrow Function
const fullName=(first,last)=>first+" "+last
console.log(fullName("Thanuja","Ramesh"));

const great=() =>{
    console.log("Hello");
}
great()
const add=(a,b)=>{
    return a+b
}
console.log(add(10,20));
const hello=()=>"Hello"
console.log(hello());
const plus=(a,b)=>a+b
console.log(plus(5,3));
const greet=(name)=>"Hello"+name;
console.log(greet("Thanuja"));
const multiply=(a,b)=>a*b
console.log(multiply(5,4))
const divide=(a,b)=>a/b
console.log(divide(20,4));
const square=(n)=>n*n
console.log(square(5));
const cube=(x)=>x*x*x
console.log(cube(5));
const even=(n)=>n%2===0
console.log(even(10));
const odd=(n)=>n%2!==0
console.log(odd(3));
const postive=(n)=>n>0
console.log(postive(5));
const negative=(n)=>n<0
console.log(negative(-5));
const adult=(age)=>age>=18
console.log(adult(22));
const double=(n)=>n*2
console.log(double(4));
const half=(n)=>n/2
console.log(half(20));
const remainder=(a,b)=>a%b
console.log(remainder(10,3));

//Function Declaration
function welcome(){
    console.log("Welcome");
    
}
welcome()
function addNo(a,b){
    return a+b;
}
console.log(add(10,20));
function fun(name){
    console.log("Hello"+name);
    }
    fun("Thanuja")
function squareOne(n){
    console.log(n*n);
}
squareOne(5)
function checkEven(n){
    if(n%2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");
        
    }
}
checkEven(10)
function sub(a,b){
    console.log(a-b);
    
}
sub(10,8)
function mul(a,b){
    console.log(a*b)
}
mul(8,8)
function div(a,b){
    console.log(a/b)
}
div(20,5)

//Anonymous Function
const happy=function(){
    console.log("Hello");
}
happy()
const addOne=function(a,b){
    return a+b
}
console.log(add(6,6));
const subOne=function(a,b){
    return a-b
}
console.log(subOne(6,5));
const squareTwo=function(n){
    console.log(n*n);
    
}
squareTwo(5)
const mulOne=function(a,b){
    console.log(a/b);
    
}
mulOne(20,5)
const divOne=function(a,b){
    console.log(a/b);
    
}
divOne(20,5)
const subtract=function(a,b){
    console.log(a-b);
    
}
subtract(20,10)
const plusOne=function(a,b){
    console.log(a+b);
    
}
plusOne(20,5)














