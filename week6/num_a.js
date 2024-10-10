// explain the difference between var,let and const
// var is a function in javascript that enables a user to declare variables such as names numbers etc
var example = 34;
console.log(example)
// this also enables a specified variabl to be used multiple different functions this script

// let is a function in javascript that provised a place to stire elemenyst or varibale for futrue ues
let Name = "Esther";
console.log(Name)

// const is also a functio that allows storing of values but that value cannot be changed once assigned

// what happens if you try to reassign values to variables declared with let or const
let run = 345;
const train = 50;
console.log(run)
//const train = 60; it brings an error since train cannot be reassigned again with another value
console.log(train)

// what will be the output of the following code? Explain your answer.
var x = 10;
let y = 5;
const z = 3;

x = 20;
y = 15;
//z = 7;
console.log(x,y,z);
// there is an error because 