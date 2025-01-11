// premitive datatyes

// 7 types: String, Number, Boolean, null (empty), undefined, Symbol, BigInt


const score = 100 // JS consider as it given type
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail; // this will be undefined

// defining symbol
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 1545484465456n







// Referance: Non Premitive

// Arrays, Objects, Functions

const heros = ["shaktimaan", "Hanuman", "doga"];
let myObj = {
    name: "Satish",
    age: 25,
    
}

//console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}


//console.log(typeof anotherId);


//***************Type of Memory******** *//

// Stack memory: for premitive type data
//Heap memory   : for non premitive data

let myYoutubename = "satishmestry"
let anothername = myYoutubename
anothername = "satsmicky"

// console.log(anothername);
// console.log(myYoutubename);


let userOne = {
    email: "satish@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mestry2@google.com"

console.log(userOne.email);

console.log(userTwo.email);

