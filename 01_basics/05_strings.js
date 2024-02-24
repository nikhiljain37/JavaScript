 const name = "nikhil"
 const num = 7746

//  console.log(name + num + " value");
// avoid this 

console.log(`Hello my name is ${name} and my num is ${num}`);
// used in modern day and as well as in backend

// another way to assign string 
// it is in on=bject type
const gameName = new String('Nikhil');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

console.log(gameName.substring(0,3));
console.log(gameName.slice(0,3));
console.log(gameName.slice(-9,3));

console.log(gameName.trim()); // delete the extra space


let url = "https://nikhil.com//nikhil%20jain"

url.replace('%20', '-')
console.log(url);

 