// one time write and use multiple time


/*function sayMyName(){
    console.log("b")
    console.log("h")
    console.log("u")
    console.log("p")
    console.log("u")
             
}
sayMyName()*/


// add two number

// function addNumber(num1,num2){
//     console.log(num1+num2);
    
// } addNumber(3,4)

// how to store output in the function
/*function addNumber(num1,num2){
   // let result = num1+num2;
   // return result;
   return num1+num2;
    
} const result = addNumber(3,4)
console.log("result:",result);*/


/*function user (username){
    return `${username} just logged in` 
}
console.log(user("hitesh"));*/


/*function userLoggedIn (username){

    if(!username){
        console.log("user undifined");
        return;
    }
     return `${username} just logged in`    

}
console.log(userLoggedIn("hitesh"));*/

// calculate add price

//...num1 = rest operator

/*function calculatCartprice(...num1){
    return num1;
}
console.log (calculatCartprice(200,300,200))*/

//object

const user={
    name:"bhupiu",
    price: 200

}
function handleObj(otherobject){
    console.log(`username is ${otherobject.name} and price is ${otherobject.price}`);
    
}
handleObj(user)




