const user = {
    username: "nikhil",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //empty in ide 


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //implicitly define hota hah
}

const userOne = new User("nikhil", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //khud ki refernce hoti
//console.log(userTwo);

// new keyword use krte hai th 
// 1. ek empty object (instance) create hota hah new object is created 
// 2.constructor function call hota hah new keyword kai karan 
// 3. arguments is injected 
// 4. we get all this

//instanceof ? mdn