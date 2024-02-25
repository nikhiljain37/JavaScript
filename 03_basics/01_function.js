function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName  --- > refrence

// sayMyName()  // --->execution 

// function add( num1 , num2){ //num1 , num2 is parameters

//     console.log(num1 + num2 ) ;
// }
// add(3,4)  // in this it is arguments

function add( num1 , num2){ //num1 , num2 is parameters

    // let result = num1 + num2
    // return result;
    return num1 + num2 ;
}

const result  = add(3,4);
// console.log("Result : " ,result);

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("nikhil"));
// console.log(loginUserMessage());  // undefined

function loginUserMessage2(username){
    // if(username === undefined) {
    if(!username) {
        console.log("Please ennter a username ");
    }else{
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage2("nikhil"));
// console.log(loginUserMessage2());


// ...num is a rest operator when we don't know how much data will come than we use it , it store all data  in array 
function calculateCartPrice(val1,...num1){
    return  num1;
}

// console.log(calculateCartPrice(200,1000,2000)); //[ 200, 1000, 2000 ]
// console.log(calculateCartPrice(200,1000,2000,3000)); 



const user = {
    name:"nikhil",
    age: 21
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObject(user); //create object 

//create object in function itself
handleObject({
    name: "nik",
    age: "20"
})



const myArr = [2,3,4,5]

function returnSecond(getarray){
    return getarray[1]
}
// console.log(returnSecond(myArr));
console.log(returnSecond([2,3,4,5]));

