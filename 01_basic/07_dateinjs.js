//-****dates stored in miliseconds, and started from 1 Jan 1970 Temporal.api

//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let myCreateDate = new Date (2025,0,-25)
//console.log(myCreateDate.toDateString());

let myTimestamp = (Math.floor(Date.now()/1000))
//console.log(myTimestamp)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());