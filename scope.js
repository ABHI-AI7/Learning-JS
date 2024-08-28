// { }  --- We call this as scope, like  you can see this in a function.

// eg -- function myfunc(){ } --these curly braces are the scope of this function, this function works for this scope only

// GLobal and Block Scope


/* console.log("1000".split(""));  // split method is used to convert string into an array


n=1000;
n=n+""
console.log(n);
console.log(typeof n); */


/* function revMy(n){
    n=n+""
    return n.split("").reverse().join("")
}

res= console.log(revMy(23456));
console.log(typeof res)  */


function myFirst(num1, num2){
    return num1+num2
}

console.log(myFirst);

const square = function (number) {
    return number * number;
};
let x = square(4); // x gets the value 16
console.log((x));
console.log(typeof square);
x=square(9)
console.log(x)


const y=(...s ) => {return s*s}
console.log(y([4,7,8,9,5]));

const a=[6,7,8,9]
const b=a.map(num=>num)
console.log(b);

/* 'use strict';
function showThis() {
    console.log(this);
}
showThis();
*/

//Nested Scope

/* function userName(){

    const name1="Abhishek"
    function US (){
        const webSite ="youtube"
        console.log(name1);
        
    }
    //console.log(webSite);

    US()
    

}

userName()  */

// Arrow function

// This: keyword, usage defined below

const User = {
    name: "Abhishek",
    Price: 999, 
    Welcome: function(){
        console.log(`${this.name}, Welcome to Youtube`); 
        console.log(this); // this is a method
        
    }
    
   

}
User.Welcome()
User.name="Abhi"
User.Welcome()

console.log(User.Welcome)




/* const i = {1:"Tt", 2:"Rver", 3:"ee"}

console.log(i);
console.log(i[2])  // When keys are number u need to access that with square bracket // */


/*  function chai(){
let uuser="abhishek"
console.log(this.user);

}

chai()   */











