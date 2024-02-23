const accountId = 145788;
let accountEmail = "abc@gmail.com"
var accountPassword = "122345"
/*
prefer not to use var
because of issue  in block space and functional space
*/
accountCity = "Bhopal"
let accountState; //undefined


// accountId =2  ---- not allowed 

accountEmail  = "nikhil@gmail.com"
accountPassword = "12345"
accountCity = "Morena" // not good for used 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); 
// it will print all the element in table 
