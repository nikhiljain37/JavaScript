const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // add decimal point 

// const otherNum = 23.896  // -- 23.9
// const otherNum = 123.896  // --  124
// const otherNum = 1123.896    // -- 1.12e+3
// console.log(otherNum.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // -- 1,000,000 us
// console.log(hundreds.toLocaleString('en-IN')); // -- 10,00,000 india

// ^^^^^^^^^^^^^^^^^Maths^^^^^^^^^^^^^^^^^^^^^^^66

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.sqrt(4));
// console.log(Math.round(4.23));
// console.log(Math.ceil(4.23));
// console.log(Math.floor(4.93));
// console.log(Math.min(4,3,5,6));
// console.log(Math.max(4,3,5,6));

// console.log(Math.random()); // 0 --- 1
// console.log(Math.floor(Math.random() * 10 + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// +1 to avoid 0 case
