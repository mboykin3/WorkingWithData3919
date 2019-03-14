'use strict'


let myNumber = 10;
myNumber = 10e-1;
myNumber = 0x00F;
myNumber = 0o007;
myNumber = Infinity;

let myFirstName = "Melissa";
let myLastName = "Boykin";
let myFullName = "FirstName:\t${myFirstName} \nLast name:\t${myLastName}";

let fullName = `${myFirstName} ${myLastName}`;

console.log(myFullName);

'strict'
const RED = Symbol();
const ORANGE = Symbol();

console.log('Value of RED is' + RED.valueOf().toString());
console.log(RED === ORANGE);

var name = `Melissa Boykin`;
console.log(`Hello, ${name}!`);

console.log('5 is equal to "5"');
console.log( 5 == "5");

console.log('5 is equal to "5"?');
console.log(5 === "5");


let obj1 = {};

obj1.firstName = `Melissa`;
obj1.fullName = fullName;

let obj2 = { firstname: "Melissa", lastName: "Boykin"};

obj2.fullName = function () {
    return this.firstName + '' + this.lastName;
}

console.log(obj2.fullName());

console.log(obj1);

let myArray = []
myArray.push("Melissa Boykin");
myArray.push(47);

let myArray2 = ['Boykin', 45];
console.log(myArray[0]);
console.log(obj1['firstName']);
console.log(obj1.fullName);

let myBirthday = new Date(1977,2,22);
console.log(myBirthday.toJSON());

var myObj = {name: "Melissa", age: 41, city: "Charlotte"};
var myJSON = JSON.stringify(myObj);

