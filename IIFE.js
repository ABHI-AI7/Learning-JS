// IIFE -- Immediately Invoked Function Expression

// Syntax

(function myOne(){
    console.log("DB CONNECTED");
    
})();                 // This is the syntax 


(()=>{
    console.log("DB CONNECTED TWO");
    
})()            // For arrow function 



// JAVASCRIPT EXECUTION CONTEXT

/* 1. Global execution context
   2. Function execution context




   program executes in two phases in JS:
   Memory creation phase - Memory alocation
   execution phase
   */


// Example

let val1=10
let val2=7
function addnum(num1,num2){
    let total = num1+num2
    return total
}

let result_1=addnum(val1,val2)
let result_2=addnum(10,44)
console.log(result_1);



// Let's Understand how the above program will be executed:

/* 

1. Global execution - First it is allocated to "this"
2. Memory creation phase - collect all the variables at one place
3. Execution phase - 





*/