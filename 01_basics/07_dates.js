// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof Date);


// let myCreatedDate = new Date(2023, 0 , 23)
// let myCreatedDate = new Date(2023, 0 , 23 , 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // 1708764187866
// console.log(myCreatedDate.getTime());  // 1673654400000
// console.log(Math.floor(Date.now()/1000));  // 1708764268


let newDate = new Date()
// console.log(newDate.getDay());

// `${newDate.getMonth()} and the time is ...`



//#####################################33
newDate.toLocaleString('default',{
    weekday: "long",
})