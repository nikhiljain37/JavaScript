const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) 
//---> foreach required a call back function it means there is no name of that function


// coding.forEach( (item) => {
//     console.log(item);
// } )  
//--> with arrow function


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) 
// refrence dena hah that's why we didn't use { -- () -- }


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } ) 
//--> o/p - > item index array


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )