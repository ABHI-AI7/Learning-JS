// "use strict"; /* Treat all JS code as newer version */
// alert("hello"); /* alert statement, but we have a different syntax for this in Node.js, it can easily run on browser */
  

/*Primitve datatypes*/

// number => 5,6,7,9.4 ==> represents both floating point and integer numbers.
//BigInt => represents big numbers => 2^33
//strings => let name = "Abhi"
//Boolean => True/False
//Null => represents the intentional absence of an object

/*undefined => represents a variable that is not initialized. variable declared but not assigned any value
let x;
console.log(x)==>undefined*/

/* NaN ==> not a number, represents a computational error
*/

// Infinity and -infinity//

//Symbol => immutable, uniqueness//

/* -------***************###################################################################################*****************------- */

//Non-Primitive Datatypes//


/*Object => A collection of properties where each property is a combination of  key value pair

eg--   let person = {firstname: "John", lastname:"Doe", age:30} */

/*Array => special object used to store list of values.

eg--- let num = [2,3,4,5]

let mixed = [1, "two", Null, True]   */


/*Function =>  functions are first class objects, meaning they can be stored as variables and passed  
as arguements to other functions.

eg--- function myname() {
return "hello!";
}


let add = function (a,b){

return a+b;
}      */

//Date=> a built in object that represents a single moment in time let now=new date(); 


//Regexp


//Set


//Map



console.log(typeof null)   /* object */
console.log(typeof undefined)   //undefined



/* $$$$$$$$$$$$$$$$$$#######################$$$$$$$$$$$$$$$$$$$$########################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

/* primitive vs non-primitive data type ----- differentiated on the basis of how are they stored in the memory and 
how can we access our data.

1--> primitive: Number, boolean, string, bigint, symbol, Null, Undefined -- these are call by value. 
2--> non-primitive or reference type: call by reference --- Arrays, sets, function, object, date.


JavaScript is a dynamically typed language, which means that data types of variables are determined by 
the value they hold at runtime and can change throughout the program as we assign different values to them.


*/

/* const id=Symbol("123")
const anotherId=Symbol("22")

object
undefined   */

/* ###############################################################################################*/
// Stack and Heap Memory
//stack is for primitive data type 
// heap is for non-primitive data type
// stack gives you the copy and heap gives you the reference to the original value

/* eg------ STACK:*/

/*  let userName = "Ankit"
let newName = userName
newName="Raja"
console.log(newName)
console.log(userName)

Raja
Ankit -----*/

/* eg ---- HEAP: */

/* let userfirst = {name:"john", surname:"doe",age: 47,eyecolor: "black" }
console.log(userfirst)

let usersecond=userfirst
usersecond.age=58
console.log(usersecond)
console.log(userfirst)

{ name: 'john', surname: 'doe', age: 47, eyecolor: 'black' }
{ name: 'john', surname: 'doe', age: 58, eyecolor: 'black' }
{ name: 'john', surname: 'doe', age: 58, eyecolor: 'black' } -----*/



