//Syntax for handling a Promise using .then() .catch() and .finally()

// promise.then((result)=>{
//     console.log(result);
// });

//Example

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Task Completed");
    } else {
        reject("Error");
    }

});                   
promise.then((result) => {
    console.log(result);
});                               Output: Task Completed


//Syntax of .catch()
// promise.catch((error)=>{
// console.log(error);
// })

//Example
const promise = new Promise((resolve, reject) => {

    const success = false;

    if (success) {
        resolve("Success");
    } else {
        reject("Something went wrong");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });                              Output: Something went wrong

//Syntax of .finally()

const promise = new Promise((resolve, reject) => {

    const success = false;

    if (success) {
        resolve("Success");
    } else {
        reject("Something went wrong");
    }

});

promise
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("Process Completed");

});                        Output: Something went wrong
                                   Process Completed
 
//Another Example

Promise.resolve(10)
    .then((value) => {
        return value * 2;
    })
    .then((value) => {
        return value + 5;
    })
    .then((value) => {
        console.log(value);
    });                       Output: Something went wrong
                                      Process Completed   
                                      25
