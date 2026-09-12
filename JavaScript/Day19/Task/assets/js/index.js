//Syntax of a Callback Function using arrow function

// const mainFunction = (callback)=>{
//     callback();
// }

//Example

const greet =() =>{
    console.log("Hi");
    
};
const processUser=(callback)=>{
    console.log("Processing...");
    callback();
    
};
processUser(greet);


//Basic Syntax of a Promise using resolve and reject
// const promise=new Promise((resolve, reject) => {
//     asyn function
// })

//Example

const promise=new Promise((resolve, reject) => {
    const success=true;
    if (success) {
        resolve("Task Completed")
        
    }else{
        reject("Task Failed")
    }
});




