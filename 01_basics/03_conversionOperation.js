// let score = 33
let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score) //input is partial number

// console.log(typeof valueInNumber); // but it will change in number 
// console.log(valueInNumber); //NaN

// if there is null it change to 0;
// undefined -- > NaN not an number
// true --> 1 false -- > 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn) 
// 1 -- true 
// 0 -- false
// "" -- false
// "nikhil" -- true 

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********** Operations ****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //ratio
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " nikhil"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // string <-- num 
// console.log(1 + 2 + "2"); // num + string 

console.log(true);
console.log(+true);
console.log(+"");