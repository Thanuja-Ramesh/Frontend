//Create an array of 5 numbers. Use a for loop to print all the numbers.
const impDate=[10,11,27,26,24]
for(i=0;i<impDate.length;i++){
    console.log(impDate[i]);
    
}

//Create an array of 5 student names. Use a for loop to print each name on a separate line
const speName=["Ramesh","Kumutha","Himasri","Thanuja","Thara"]
for(i=0;i<speName.length;i++){
    console.log(speName[i]);
    
}

//Create an array of numbers. Use a for loop to find and print only the even numbers.
const evenNum=[10,11,27,26,24]
for(i=0;i<evenNum.length;i++){
    if(evenNum[i]%2===0)
        console.log(evenNum[i]);
        
}

// Create an array of student objects containing name and mark. Use a for loop to print the names of students who scored more than 80.
const studentDetail=[
    {name:"Hima",mark:99},
    {name:"Thara",mark:94},
    {name:"Sanjay",mark:80},
    {name:"Anu",mark:74}]
for(i=0;i<studentDetail.length;i++){
    if(studentDetail[i].mark>80){
        console.log(studentDetail[i].name);
        
    }
}
//Create an arrow function that accepts two numbers as parameters and returns their sum
const sumofTwo=(a,b)=>a+b;
console.log(sumofTwo(10,11));






