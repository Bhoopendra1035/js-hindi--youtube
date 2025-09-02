//singleton obj = const tinderuser = new object()

/*const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samat raina"
tinderUser.isLoggedIn = false

console.log(tinderUser);*/

/*const regularUser = {

    email:"bhai.com",

    fullName:{

        userfullName:{

            firstname:"bhupuu",
            lastName: "TAle"
        }

    }

}
console.log(regularUser.fullName.userfullName.firstname);*/


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

/*const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);*/

// another way for join two object

/*const obj3 = {...obj1,...obj2}
console.log(obj3);*/

// how to access datbase user data

/*const user = [{
    email:"bhupe.com",
    name:"bhupp"
},{
    name:"bhupendra",
}
,{
    id:"bhup123",
}
]
console.log(user[0]);
console.log(user[1].name);*/

// kuch method of object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samat raina"
tinderUser.isLoggedIn = false

/* 
console.log(tinderUser);
console.log(Object.keys(tinderUser));// all keys of object access in array datatype
console.log(Object.values(tinderUser));// all values of object access in array datatype
console.log(Object.entries(tinderUser));// each key and value seprated in array fron 
console.log(Object.length);//1
*/

// check the value exist in object = true/false

console.log(tinderUser.hasOwnProperty("isLoggedIn"));// true
console.log(tinderUser.hasOwnProperty("324"));//false
console.log(tinderUser.hasOwnProperty("id"));//true










 







