let score = "true"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

// "33" => 33
// "33bs" => NaN
// true  => 1
// False => 0
//"Satish" => true


let isLoggedIn = "Satish"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);


let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof(stringNumber));


//******************operation************ *

let value = 3
let negValue = -value
//console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2/3);
//console.log(2*2);
//console.log(2+2);
//console.log(2%2);

let str1 = "Hello"
let str2 = "Satish"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log(1 + 2 + "2");
// console.log(3+2*5-9/2);

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // this is not good to deifne multile variables with same vale

let gameCounter = 100
gameCounter++;
//console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


