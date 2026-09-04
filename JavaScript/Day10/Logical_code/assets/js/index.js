//Even or Odd
let evenOdd=24
if (evenOdd%2===0) {
    console.log("Even");
        
}
else{
     console.log("Odd");
        
} 
//Postive, Negative or Zero
let numberType=5
if(numberType>0){
    console.log("Postive");
    }
else if(numberType<0){
    console.log("Negative");
    
}
else{
    console.log("Zero");
    
}
//Largest of three Numbers
let a=10;
let b=20;
let c=30;
if(a>b && b>C){
    console.log("A is largest");
}
else if(b>a && a>c){
    console.log("B is largest");
    
}
else{
    console.log("C is largest");
    
}
//Voting Eligibility
let age=24;
if(age>=18){
    console.log("Eligible to vote");
    
}
else{
    console.log("Not eligible to vote");
    
}
//Leap Year
const leapYear=2024
if(leapYear%4===0){
    console.log("Leap Year");
    
}
else{
    console.log("Not a leap year");
    
}
// Even number using if and for
for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(i);
        
    }
   
}
//Greater than or equal to 5
for(let i=1;i<=10;i++)
    if(i>=5){
        console.log(i);
        
    }
    //Arrays
//Print Array Elements Using for
const fruitName=["Grapes","Kiwi","Orange","Blackberry","Blueberry"]
for(i=0;i<=fruitName.length-1;i++){
    console.log(fruitName[i]);
    
}
//Print Numbers Greater Than 30
const numberOf=[10,20,30,40,50]
for(i=0;i<numberOf.length-1;i++){
    if(numberOf[i]>30){
        console.log(numberOf[i]);
        
    }
}
//Object
const studentDetail={
    Name:"Thanuja Ramesh",
    Age:24,
    Course:"JavaScript",
    Marks:94}
    console.log(studentDetail);
    console.log(studentDetail.Name);
//Function Declaration
function greet(){
    console.log("Hello");
}
greet()
//Anonymous Function
let add=function(){
    console.log(20+40);
    
}
add()
//Arrow Function
const mul=(a,b)=>(a*b)
    console.log(mul(20,4));
const fullName=(first,last)=>(first+" "+last)
console.log(fullName("Thanuja","Ramesh"));
//Types of Scope
//Global Scope
let someOne="Thara"
function show() {
    console.log(someOne);
}
console.log(someOne);
show()

//Function Scope
function weaver(){
    let fnName="Tharun"
    console.log(fnName);
    
}
weaver()
//Block Scope
function block(){
    if(true){
        let a="html"
        const b="css"
        console.log(a+" "+b);
        
    }
}
block()
//All together
var fatherName="Ramesh"
let motherName="Kumutha"
const childName="Himasri"//Global
function Names(){
    var fatherName="Ramesh"
    let motherName="Kumutha"
    const childName="Himasri"//Functional
    console.log(fatherName+" "+motherName+" "+childName);
    

    if(true){
         var fatherName="Ramesh"
    let motherName="Kumutha"
    const childName="Himasri"//Block

   

    console.log(fatherName+" "+motherName+" "+childName);
    
 }
 
}
Names()
console.log(fatherName+" "+motherName+" "+childName);
//Another Example for scope

var x = 10; // Global scope

function test() {
    var y = 20; // Function scope

    if (true) {
        let z = 30; // Block scope
        console.log(x);
        console.log(y);
        console.log(z);
    }
}

test();
//Fibonacci Series
let n=10;
let numberOne=0;
let numberTwo=1;
for(i=0;i<=10;i++){
    console.log(numberOne);
    let next=numberOne+numberTwo;
    numberOne=numberTwo;
    numberTwo=next;
    
}
//Factorial
let num=5;
let factorial=1;
for(let i=1;i<=5;i++){
    factorial=factorial*i
}
console.log(factorial);

    

    
    


