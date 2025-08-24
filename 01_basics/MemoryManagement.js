 //premitive---stack
 //non-preitive/reference/object---heap

 //exaple

//  premitive - stack
//  let myYoutubename = "bhupendra.com"
//  let anothername = myYoutubename
//  anothername = "chotu.com"
//  console.log(anothername);
//  console.log(myYoutubename);

 //reference -heap

 let userOne = {
    name:"bhupendra",
    age:18

 }

 let userTwo = userOne
 
 userTwo.name = "chotu"
 
 console.log(userOne.name);
 console.log(userTwo.name);
 
 
 
