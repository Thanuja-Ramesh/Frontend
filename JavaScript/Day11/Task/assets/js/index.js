//Create a function called processNumber that accepts a number and a callback function. Pass the result to the callback and display the output.
function processNumber(number, callback) {
    let result = number * 2;
    callback(result);
}

function displayResult(result) {
    console.log(`The result is: ${result}`);
}

processNumber(10, displayResult);
//Create a closure function named createCounter.
//Start the count at 0
//Every time the returned function is called, increase the count by 1
//Call the counter 3 times
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
//Create an array with 5 values.
//Add two new values using push()
//Remove the last value using pop()
//Display the final array
const numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.push(70);

numbers.pop();

console.log(numbers);

//Create an array with some values.
//Add one value at the beginning using unshift()
//Remove the first value using shift()
//Display the final array
const number = [20, 30, 40, 50];

numbers.unshift(10); //[10, 20, 30, 40, 50]

numbers.shift();

console.log(number);

//Given the following array:
//const numbers = [10, 20, 30];
//Create a new empty array and copy all values using a for loop without using push().
//Then add 40 at the end without using push().
const num = [10, 20, 30];

const newNumber = [];

for (let i = 0; i < num.length; i++) {
    newNumber[i] = num[i];
}

// Add 40 at the end without push()
newNumber[newNumber.length] = 40;

console.log(newNumber);
//Array Methods Until concat()
const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

// 1. Add "Banana" at the end
fruits.push("Banana");

// 2. Remove the last element
fruits.pop();

// 3. Add "Grapes" at the beginning
fruits.unshift("Grapes");

// 4. Remove the first element
fruits.shift();

// 5. Check the total length
console.log("Fruits length:", fruits.length);

// 6. Combine both arrays using concat()
const finalArray = fruits.concat(vegetables);

// 7. Display the final result
console.log("Final array:", finalArray);  //Fruits length: 3
                                           //Final array: ["Apple", "Mango", "Orange", "Carrot", "Potato"]