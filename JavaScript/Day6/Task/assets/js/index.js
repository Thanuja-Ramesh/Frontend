//Print Numbers in single line
let print="";
for(i=1;i<=20;i++){
    print=print+i+" ";
    
}
console.log(print);
//Even Numbers in single line
let even="";
for(i=1;i<=50;i++){
    if (i%2===0) {
        even=even+i+" ";   
    }
}
 console.log(even);
//Odd Numbers in single line
 let odd="";
 for(i=1;i<=50;i++){
    if(i%2===1){
        odd=odd+i+" ";
    }
 }
 console.log(odd)
//Sum for 1 to 20 numbers
 let sum=0;
 for(i=1;i<=20;i++){
   sum=sum+i
 }
 console.log(sum);
 //Even Sum for 1 to 50 numbers
 let a=0;
 for(i=1;i<=50;i++){
    if(i%2===0){
      a=a+i;

    }
 }
 console.log(a);
 //Count 1 to 100(Total count of even numbers)
 let count=0;
 for(i=1;i<=100;i++){
    if(i%2===0){
        count++
    }
 }
 console.log("Even Number:",count);
 //Find a Number
 for(i=1;i<=100;i++){
    if(i===73){
        console.log("Found:",+i);
        break;
    }
 }
 //Find character
 let text="javascrip";
 let target="s";
 for(let i=0;i<text.length;i++){
      if(text[i]===target){
        console.log(text[i]);
        break;
     }
 }
   
 


 
 

 

