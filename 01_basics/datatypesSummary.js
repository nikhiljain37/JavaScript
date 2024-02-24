// # primitive
/**
 * 7 types - string number boolean null undefined symbol bigInt
 */

// *****
// JavaScript is a dynamically typed language, which means that data types of variables are determined 
// by the value they hold at runtime and can change throughout the program as we assign
//  different values to them.28 Oct 2021

//*********** */


// reference type -- non primitive
/**
 * array objects functions
 */


const someID = Symbol('123')
const anotherID = Symbol('123')

console.log(someID === anotherID); // false

const heroes = ["a" , "b" , "c"]

let myObj = {
    name: "nikhil",
    age: 21,
}
 
// functiom treat as a object function
const myFun = function(){
    console.log("hello world ");
}

console.log(typeof myFun);


/**
 * interview related questions 

- primitive and non primitive (call by value, call by reference)

- primitive:7 (call by value)

- string, number, bolean, null, undefined, symbol , BigInt

- non primitive:3 (call by reference)

- arrays, object, function 


- dynamically type vs statically type

- js is dynamically typed

- const id = Symbol("123")

- const anotherId = Symbol("123")

- id === anotherId => false

- array, object, function overview 

- typeof datatyped is available on documentation 
 
*/


//33333333333333333333333333333333333333333

/**
 * - Primitive data type goes to Stack we get a copy of that value.
- Non-Primitive data type goes to Heap we get refrence of that value.  
 */

// primitive get stack memory 

let myName = "nikhil" 

let myName2 = myName
// in this copy of myName is asssign to myName2 
// beacause it is in stack 
// it will not change in original myName
myName2 = "nik"

console.log(myName); // nikhil
console.log(myName2); // nik

// non primitve goes to heap memory 
let user1 = {
    name: "nik",
    surname: "jain",
}

let user2 = user1
// it will get same reference of user1
// that means if we change in user2 it will change in user1

user2.name = "nikhil"

console.log(user1.name);
console.log(user2.name);
