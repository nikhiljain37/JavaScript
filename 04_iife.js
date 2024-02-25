// Immediately Invoked Function Expressions
//global scope se pollution hoti hai kai baar toh uss pollution ko hatane kai liye iife use kiya

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // in this we needed semi colon to write two iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('nikhil');

// ( function )(); ---> iife