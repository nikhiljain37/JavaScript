// how to create object using constructor 

// const tinderUser = new Object() // singelton object
const tinderUser = {}  // non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nikhil",
            lastname: "jain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // in array 
// console.log(Object.values(tinderUser)); // in array 
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check value


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor --- 1

// destructuring 

const {courseInstructor: instructor} = course
// if we have to use {1} many times it will decrease code readability
// taht why we destructure the code and assign the key a new name {instructor}

// console.log(courseInstructor); //Hitesh
console.log(instructor); //Hitesh 
 
// ******** JSON **********
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// api's in array format 
[
    {},
    {},
    {}
]


// JSON Formattor  to check the api

