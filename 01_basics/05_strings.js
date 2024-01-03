const name="Edison"
const repoCount=50

//console.log( name + repoCount+"value");

console.log('Hello my name is ${name} and my repo Count is ${repoCount}');
const gameName = new String('Edi')

// console.log(gameName[0]);
// console.log(gameName. __proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));



const newString = gameName.substring(0,2)
console.log(newString);

const anotherString= gameName.anotherString(-2,3)
console.log(anotherString);

// const newStringOne = "   edi   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://edison.com/edison%20edi"
console.log(url.replace('%20', '-'));   

