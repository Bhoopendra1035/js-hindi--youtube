/*const name = "bhupendra"
const age  = 18;
// console.log( name  +  age  + " good"); //old way of desclure Strings.

console.log(`hellow ${name} your age is ${age} `) // NEw way of declure Strings.*/

const gameName = new String('bhupe_ndra')
// console.log(gameName); // write this code on browser inspact-console and find the different types of string method

console.log(gameName.length); // find strings lengh

console.log(gameName.indexOf('p')); // find the insex of letter in the strings.

console.log(gameName.charAt(5));// find the character according to the index Number. 

console.log(gameName.toUpperCase()); // change strings in capital letter

console.log(gameName.concat(" tale" , " gurjar")) // attached new words in strings

console.log(gameName.slice(2,6)) // slice the strings according to your argumrnt but last argument not add (in this exp 2-6 , 6 are not add)

console.log(gameName.split("_")); // Syntex: string.split(saparator,limit)
console.log(gameName.split('',4)); // limit show  how far do you split.

console.log(gameName.replace("bhupe_ndra", "bhupendra")); // resplace the string

let text = "bhupendra wear blue color shirt and his house Color is also blue";

let res = text.replace(/blue/g,"red");// /blue/g , use when two or more same name replace in the strings but case sensitive.
console.log(res);

let anotherRes = text.replace(/color/gi, "rang"); // /gi , ingnore small letter/capita lletter resplace both. 
console.log(anotherRes);













