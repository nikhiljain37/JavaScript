
//var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //block scope
    
}


// console.log(a); //global scope
// console.log(b);
// console.log(c);


function one(){
    const username = "nikhil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // line by line error-- & it will never run 
     two() // nikhil
}

// one() 

if (true) {
    const username = "nikhil"
    if (username === "nikhil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error due to scope
}

// console.log(username); // error 


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // it can easilty run due to hoisting

function addone(num){
    return num + 1
}



// addTwo(5)  // it will give error because we store it in 
const addTwo = function(num){  //can be called expression
    return num + 2
}