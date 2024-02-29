// PROMISE MDN 

const promiseOne =  new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cryptograohy ,network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve() //to connect to then
    }, 1000);
})
promiseOne.then(function(){ //for calling promise
    console.log("promise consumed");
})

// d/f way to create and call promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved ");
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "chai", email: "chai@example.com"})
    }, 3000);
})
PromiseThree.then(function(user){
    console.log(user);
})

const promisefour =new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =true;
        // let error =false;
        if(!error){
            resolve({username: "chai", email: "chai@example.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 4000);
})

//Code format which is recommende
promisefour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected!.."))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error =true;
        // let error =false;
        if(!error){
            resolve({username: "JS", password: "1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 5000);
})

//async await is a other method to call promise but it will not directly error  handling   so we have to use try catch method for no error
async function consumePRomiseFive(){
    try {
        const  response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}
consumePRomiseFive();

//

// async function getAllUsers(){
//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             // respnse - string  convert in json and it take time that's why we have to use await also
//             const data = await response.json() 
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
// }
// getAllUsers();


fetch('https://api.github.com/users/nikhiljain37')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all

// yes this is also available, kuch reading aap b kro.
