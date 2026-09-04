//Explain the difference between var, let, and const based on scope, redeclaration, reassignment, hoisting, and TDZ. Write a program demonstrating all the differences.
// 1. SCOPE
var a = 10;
let b = 20;
const c = 30;

{
    var a = 100;       // Same variable because var is not block scoped
    let b = 200;       // Different variable because let is block scoped
    const c = 300;     // Different variable because const is block scoped

    console.log(a); // 100
    console.log(b); // 200
    console.log(c); // 300
}

console.log(a); // 100
console.log(b); // 20
console.log(c); // 30


// 2. REDECLARATION

var x = 10;
var x = 20;             // Allowed
console.log(x);         // 20

let y = 10;
// let y = 20;          // Error: Cannot redeclare block-scoped variable

const z = 10;
// const z = 20;        // Error: Cannot redeclare block-scoped variable


// 3. REASSIGNMENT

var p = 10;
p = 20;                 // Allowed
console.log(p);         // 20

let q = 10;
q = 20;                 // Allowed
console.log(q);         // 20

const r = 10;
// r = 20;              // Error: Assignment to constant variable.


// 4. HOISTING

console.log(m);         // undefined
var m = 10;

// console.log(n);      // Error: Cannot access 'n' before initialization
let n = 20;

// console.log(o);      // Error: Cannot access 'o' before initialization
const o = 30;


// 5. TEMPORAL DEAD ZONE (TDZ)

{
    // TDZ starts here

    // console.log(num); // Error: Cannot access 'num' before initialization

    let num = 50;

    console.log(num);   // 50
}

{
    // TDZ starts here

    // console.log(value); // Error: Cannot access 'value' before initialization

    const value = 100;

    console.log(value); // 100
}
//Convert the following normal functions into arrow functions. Show both explicit return and implicit return.
// Explicit return

const add = (a, b) => {
    return a + b;
};

const square = (n) => {
    return n * n;
};

console.log(add(10, 20));  // 30
console.log(square(5));    // 25


// Implicit return

const addNumbers = (a, b) => a + b;

const findSquare = (n) => n * n;

console.log(addNumbers(10, 20)); // 30
console.log(findSquare(5));      // 25
//Using the following data, extract the required values using array destructuring and object destructuring.
const numbers = [10, 20, 30];

const [d, e, f] = numbers;

console.log("Array Destructuring:");
console.log(d);
console.log(e);
console.log(f);


const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log("Object Destructuring:");
console.log(name);
console.log(age);
console.log(course);
//Explain the difference between Rest Parameter and Spread Syntax. Write one program using Rest and one program using Spread.
//Rest Parameter
function plus(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total = total + num;
    }

    return total;
}

console.log(plus(10, 20, 30, 40)); // 100
//Spread Syntax
const number = [10, 20, 30];

const newNumber = [...number, 40, 50];

console.log(newNumber);
//Create a function that accepts name, course, and city. Give "Chennai" as the default value for city and use a template literal to generate the output.
function studentDetails(name, course, city = "Chennai") {
    return `My name is ${name}. I am studying ${course} in ${city}.`;
}

console.log(studentDetails("Ravi", "JavaScript"));
console.log(studentDetails("Anu", "HTML", "Bangalore"));
//Create a Student class with name, age, and mark properties and a displayDetails() method. Create two student objects and display their details.
class Student {

    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Mark: ${this.mark}`);
    }
}

// Create two student objects

const student1 = new Student("Ravi", 20, 85);
const student2 = new Student("Priya", 21, 90);

// Display details

student1.displayDetails();
student2.displayDetails();