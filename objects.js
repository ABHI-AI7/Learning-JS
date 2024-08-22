//Singleton object

//Object literals

// object.create - way to create an object, this is what we call constructor method and singleton is formed in this method only

const sym=Symbol("Key1")

const jsuser = {
name:"Abhi",
"Full Name":"Abhishek Sahlot",
[sym]:"myKey1",  /*Syntax to use symbol in object*/
age:23,
location:"Ghazibad",
isLoggedIn: false,
lastLoginDays:["Monday","Wednesday"]

}  

/*object.freeze(jsuser)  -- to freeze so that no one can edit the object */

console.log(jsuser["Full Name"]) /* you can not access full name using 1st way */

jsuser.greeting=function(){
    console.log("hello JS User");   /* Here we are learning how to add function to an object, like we have added the function greeting */
    
}

console.log(jsuser.greeting());


jsuser.greetingtwo=function(){
    console.log(`hello JS User, ${this["Full Name"]}`);  /* here we are refering to the property of the object directly using string
    interpolation  */
    
}

console.log(jsuser.greetingtwo());




/* How to access elements in object --- 

console.log(jsuser.age)  -- this is 1 way
console.log(jsuser["location"]) --2nd way */



/* Singleton object 

const obj = new object()  */

/* const obj1={1:"a",2:"b"}
const obj2={3:"d",4:"f"}
const obj3= Object.assign({},obj1,obj2)

console.log(obj3); =>{ '1': 'a', '2': 'b', '3': 'd', '4': 'f' }  ----*/


/* const obj1={1:"a",2:"b"}
const obj2={3:"d",4:"f"}

const obj5={...obj1,...obj2}
console.log(obj5);   ==> { '1': 'a', '2': 'b', '3': 'd', '4': 'f' }  */


const user={name:"abhi", IsloggedIn:false, lastLogin:"07 22 2024",email:"xyz@gmail.com"}
mydate= new Date(user.lastLogin)
console.log(mydate);
console.log(typeof mydate);
console.log(mydate.toDateString());
console.log(mydate.toUTCString());


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("lastLogin"));


const {email} = user   // one more way to access elements in object, destructure the object
console.log(email);
















