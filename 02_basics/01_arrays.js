// array 

// allowed  mixing 
// can change size 
// shallow copy

const myArr = [ 0,1,2,3,4,5]
// const myArr = [ 0,1,2,3,4,5 , true, "hitesh"] 
const heroes = [ "spiderman" , "shaktiman"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);

// array methods 

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // add in a[0]
// console.log(myArr);
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //it add in the new array and change it to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//************************************************************ */
//slice, splice

console.log("Before Slice : " , myArr);

const myn1 = myArr.slice(1,3)
console.log("Slice : " , myn1);
console.log("After Slice : " , myArr); 

const myn2 = myArr.splice(1,3)
console.log("Splice :",myn2);
console.log("After Splice : " , myArr); // manipulate the array 