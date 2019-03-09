'use strict'


let myNumber = 10;
myNumber = 10e-1;
myNumber = 0x00F;
myNumber = 0o007;
myNumber = Infinity;

let myFirstName = "Boykin";
let myLastName = "Boykin";
let myFullName = "FirstName:\t${myFirstName} \nLast name:\t${myLastName}";

let fullName = myFirstName + " " + myLastName;

console.log(myFullName);

