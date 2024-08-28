/* syntax ---

function myFun(){}

*/


/* function sayMyname(){
console.log("A")
console.log("B")
console.log("C")
console.log("D")
console.log("E")
console.log("F")

}


sayMyname() */



/* function numAdd(a,b){
    a+b
    console.log(a+b)
}

numAdd(6,"4") */


/* function loggedInMessage(username){
    return `${username}, just logged In`
}

loggedInMessage("Abhishek")
console.log(loggedInMessage("Abhishek")) =>Abhishek, just logged In
console.log(loggedInMessage()); => undefined, just logged In

console.log(loggedInMessage("")); => , just logged In  */


/* function loggedInMessage(username){
    if (username===undefined){
        console.log("Please enter username");
        return
        
    }
    return `${username}, just logged In`
}

loggedInMessage("Abhishek")
console.log(loggedInMessage())

Please enter username
undefined   */

/* When you have to pass undefined number of parameters, when you add item into cart this logic can be used because you don't know how 
many items will the client add into the cart */

function calculateCartPrice(...num){
    return num
}      /* using (...) rest operator, these three dots are used as spread and rest both */

console.log(calculateCartPrice(200,300,500));

const total =  function (sum){
    for (value in calculateCartPrice){}
}



//SCOPE:_________


