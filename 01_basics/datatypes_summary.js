// Primitive

// 7 :string,Number,Boolean,Null,Undfined, Symbol, BigInt


const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id=== anotherId);

//const bigNumber=343536556335n



//Reference (Non Primitive)

//Array,Object, Function

const heros=["Shaktiman","Naagraj","doga"]
let myobj={
    name: "Edison",
    Age: 22,
}

const myFunction=function(){
    console.log("Hello");
}

console.log(typeof myFunction);


//**********************************************

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename="edison.com"

let anothername= myYoutubename
anothername="edi"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@yvl"

}

let userTwo=userOne

userTwo.email="edison@google.com"
console.log(userOne.email);
console.log(userTwo.email);

