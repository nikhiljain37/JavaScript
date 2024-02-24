// singleton --- literals ki tarah create krte th singleton nhi bnta hai 
// constructor bnega th singleton bnega 
// Object.create --- constructor method 


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Jain", // we cant use dot properties with this
    [mySym]: "mykey1", // we create symbol like this to use as symbol else it use as string
    age: 20,
    location: "Bhopal",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
 // we can acces dot case but there may be some case than we have to 
 // access in d/f way [""] ,

// console.log(JsUser.email)
// console.log(JsUser["email"]) 
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym])

JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser) //changes not propagate 
JsUser.email = "nikhil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());