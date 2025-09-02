 const marvel_heros = ["thor","Ironman", "spiderman"];
 const dc_heros = ["superman","batman", "flash"] 

//  marvel_heros.push(dc_heros);// array ke andar array =[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
//  console.log(marvel_heros);

/*const all_heros = marvel_heros.concat(dc_heros) // concate add the two array value.
  console.log(all_heros);*/

  // another trick for concat array(spread ....arr....arr)

/* const allHeros = [...marvel_heros,...dc_heros]
 console.log (allHeros);*/

 //flat = array ke andar array ki value ko ek array me orgenize kr deta he
/*const another_array = [1,2,3,[4,5,6],7,[6,7,[2,3,4]]];
 const real_Arr = another_array.flat(Infinity) // () iske ander itne deep tak solve krna he vo likte he 

 console.log(another_array.length);
 console.log(real_Arr);*/


 // check or convert in array



/* console.log(Array.isArray("bhupendra")); // false 

 console.log(Array.from("bhupendra"));// ['b', 'h', 'u','p', 'e', 'n','d', 'r', 'a']*/

// console.log(Array.from({name:"bhuprndra"})); // interesting
 
/*
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;
 let score4 = 400;

 console.log(Array.of(score1,score2,score3,score4));*/
 

 
 
 
 
