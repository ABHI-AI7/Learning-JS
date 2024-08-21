/* String Interpolation */

/*   let name="abhi"
let age=23
console.log(name+age+" repocount")
console.log(`hello my name is ${name} and my age is ${age}`)

abhi23 repocount
hello my name is abhi and my age is 23  ------*/


/*  const gameName = String('abhishek') --- run this on console on browser to understand the below statement MediaQueryListEvent.
console.log(gameName)

basically string is a object type in JS, it is in key value pair, 0:a; 1:b and so on and it has a property length as
 well and several methods. ------*/

/* const gameName=String('abhishek')
console.log(gameName[0]) 
console.log(gameName[1]) 

a
b ----*/


/* const gameName=String('abhishek')
console.log(gameName.__proto__) => {}  ----*/


 /* const gameName=String('abhishek')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.trim());
console.log(gameName.strike());
console.log(gameName.startsWith("a"));

8
ABHISHEK
abhishek
<strike>abhishek</strike>
true  -----*/


const url = "hhtps://abhi.com/abhi%20sahlot//"
console.log(url.replace('%20', '-'))


