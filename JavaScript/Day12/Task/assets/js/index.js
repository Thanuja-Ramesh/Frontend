//push()

const numbers=[1,2,3,4,5]
numbers.push(6,7,8)
console.log("final array",numbers);

//pop()
let fruits=["strawberry","mango","dragon","apple","custard apple","kiwi"]
fruits.pop()
fruits.pop()
console.log("final array",fruits);
console.log();


console.log("Create an array of 5 city names. Remove the first city using shift(), then add a new city at the beginning using unshift().");


let city=["nagai","chennai","bangalore","mumbai","madurai"]
city.shift()
city.unshift()
console.log(city);
 
//Create an array of 5 student names. Use forEach() to print each student's name along with their position number.

//Expected format:

// 1. Arun
// 2. Bala
// 3. Kumar


const students = ["Arun", "Bala", "Kumar", "Divya", "Priya"];

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});
//Map
const number = [10, 20, 30, 40, 50];

const result = number.map((num) => num * 2);

console.log(result);