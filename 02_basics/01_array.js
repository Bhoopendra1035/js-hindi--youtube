// array 

// const myArr = ["narayan",1,2,3,4,5]
// console.log(myArr[0]);


// shallow copy = original array change .
// deep copy = original array dont change; 

// const myArr2 = new Array(1,2,3,4,5,6,7,)
// console.log(myArr2);

// array method***************************************************

// const myArr3 = new Array(1,2,3,4,5,6,7,);
// console.log(myArr3);
// method 1 (push()) = the value add at end of the array.
// myArr3.push(3);
// console.log(myArr3);


/*//method 2 (pop()) = the value delete at end of the array. 
const myArr3 = new Array(1,2,3,4,5,6,7,);
myArr3.pop(); // no argumnet pass,it is delete the last value of array.
console.log(myArr3);*/

/*// method 3 (unshift()) = add value starting to the array.
const myArr3 = new Array(1,2,3,4,5,6,7,);
myArr3.unshift(2);
console.log(myArr3);*/

/*// method 4 (shift()) = delete value starting to the array.
const myArr3 = new Array(1,2,3,4,5,6,7,);
myArr3.shift(); //no argument pass
console.log(myArr3);*/

// method 5 (.include()) // it show the value true/false and check the value exist in the array.

// const myArr3 = new Array(1,2,3,4,5,6,7,);
// console.log(myArr3.includes(3));//true

//method 6 (.indexOf()) it show the index of the value and check the index exist in the Array if not show -1.
// const myArr3 = new Array(1,2,3,4,5,6,7,);
// console.log(myArr3.indexOf(3)); //2
// console.log(myArr3.indexOf(12));//-1

//6 (join()) isse sabhi ke bich me * join ho jayeha  
/*const myArr3 = new Array(1,2,3,4,5,6,7,);
const newArr = myArr3.join('*')
console.log(newArr);
console.log(typeof(newArr));//string */

// ***************SLICE AND SPLICE*******************

// 7.SLICE()************ initialization in original array.
/*const myn1 = new Array(1,2,3,4,5,6,7);
newN2 = myn1.splice(2,5,8); // arr.aplice(kaha se start krna he , kitna delete krna he , kya new add krna he )
console.log(newN2);
console.log(myn1);*/

// 9. sort() = sort the array alphabetly

/*const fruits =["bananan","apple", "lichi", "orange", "mango"]

console.log(fruits.sort());*/

// 10. reverse() = reverse the array value
/*const num = [1,2,3,4,5]
console.log(num.reverse());*/

//  11.tostring() = array convert in string

/*const color = ["red","black", "white","green"];
console.log(color.toString());*/

// 12.filter = perform operation or filter the array value

/* const number = [10,20,30,40,50];
 let result = number.filter(num => num>25)
 console.log(result);
 */

 // 13.reduce() =take all value of array and combined in single value..

/* const run = [1,2,3,4,6,];
 let sum = run.reduce((a,b) => a+b);
 console.log(sum); //16*/


 //14. forEach() = The forEach() method is used to run a function on each element of an array.
  
 /*const number = [1,2,3,4,5]

  let double = number.forEach(a=>{
    console.log(a);
    
  })*/

  //15. map() = method is used to create a new array by doing something with each element.

  const pet = [ 'dog','cat','rabit','rat']

   let cute = pet.map(a=>a+" is cute")
   console.log(cute);
   


  


 

































