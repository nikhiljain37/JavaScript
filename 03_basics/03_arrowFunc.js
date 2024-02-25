const user ={
    name: "nikhil",
    age: 21,

    welcomeMessage: function(){
        console.log(`${this.name} , welcome to website`); //this is used to get current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "nik"
// user.welcomeMessage()

// console.log(this);  // {} --> empty object (in brower it show window object )


/**
 * 
function chai(){
    // console.log(this); //many output occur
    let username = "nikhil"
    console.log(this.username); // undefined -- we can't use this 
}
chai()
*/


/**
 * 
const chai = function(){
    let username = "nikhil"
    console.log(this.username); //undefined
}
chai()
*/

////////////////////////Arrow Function ????????????????????

const chai = () => {
    let username = "nikhil"
    console.log(this); //{} 
    console.log(this.username); //undefined
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return -- parenthesis may be needed 
// const addTwo = (num1, num2) =>  num1 + num2  //not needed
// const addTwo = (num1, num2) => ( num1 + num2 ) 

// const addTwo = (num1, num2) => {username: "nikhil"} // undefined
const addTwo = (num1, num2) => ({username: "nikhil"}) //parenthesis needed


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()