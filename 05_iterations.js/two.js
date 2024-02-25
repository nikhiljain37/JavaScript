//  -----for-of loops ------

//  ["","",""]
//  [{},{},{}]

//array
const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

//string
const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps -- hashset in java --> store  unique value
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);
// for (const key of map) {
//     console.log(key);
// } ---> it will print array of key,value

for (const [key, value] of map) {
    // console.log(key, ':-', value);
} 


//Objects
const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   
// } 
//---> but in this it will not work  that's why for object we use for in loops 


// --------------- FOR IN LOOPS---------------
 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


//Arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); //--> 0 1 2 3 4 
    //console.log(programming[key]); //--> js , 
}


//Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); 
// }
//--> not print 
// not iterable