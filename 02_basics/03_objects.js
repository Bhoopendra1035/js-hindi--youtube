// two type se object bnte he

//1. singleton
/* object.create*/

//2.object literals
const mySym = Symbol("key1")

const jsUser = {
    name:"bhupendra",
   [ mySym]:"mykey1",
    age:18,
    location:"harda",
    email:"bhupii.com",
    isLoggedIn : false,
    lastLogindays:["monday","sunday"]
}
// two types of we can get output
/*console .log (jsUser.email);
console.log(jsUser["email"]);*/

/*console.log(jsUser.mySym);//mykey1
console.log(typeof jsUser.mySym);// string ,but ye to symbol he */

/*console.log(jsUser["mySym"]);
console.log(typeof jsUser);// object */

//console.log(typeof jsUser[mySym]);

//how to change object value...

/*jsUser.email =" bhupendra.com"
console.log(jsUser["email"]);// bhupendra.com*/

// how can lock the key value

/*Object.freeze(jsUser)
jsUser.age = 12;
console.log(jsUser.age);//18 hi btyega

console.log(jsUser);*/

// how to add function in 

 jsUser.greeting = function(){
    console.log("hello!user");
    
 }
 jsUser.greetingtwo = function(){
    console.log(`hello, ${this.name}`); // object ki key value acces kr skte he  
    
 }


 console.log(jsUser.greeting());
 console.log(jsUser.greetingtwo());
 
 













