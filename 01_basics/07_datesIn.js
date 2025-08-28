
/* let myDate = new Date()
console.log(myDate);
console.log(typeof myDate) // object
console.log(myDate.toDateString()); // Thu Aug 28 2025
console.log(myDate.getDay());// 4
console.log(myDate.getFullYear());// 2025
console.log(myDate.getHours());//5
console.log(myDate.getMonth())//7 ,because start at 0 index. */


let myCreateDate = new Date(2024,8,5);
// console.log(myCreateDate.toDateString());//Thu Sep 05 2024

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(myCreateDate.getTime()/1000)); // convert milisec to sec.







