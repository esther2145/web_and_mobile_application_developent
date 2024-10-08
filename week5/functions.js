//life before functions
var num = 23;
var num_two = 2;
var sum = num+num_two;
console.log('sum: ',sum)

var num_three = 40;
var num_four = 10;
var sum_two = num_three + num_four;
console.log('sum two: ',sum_two)

//functions without parameters
function summation(){
    var num_five = 40;
    var num_six = 10;
    var sum_three = num_five + num_six;
    console.log("Sum three: ",sum_three);

}
summation()

// returning function
function summation_two(){
    var num_five = 40;
    var num_six = 10;
    var sum_three = num_five + num_six;
    return sum_three;
}
// use it by printing the value directly on the terminal
console.log("Sum four: ",summation_two());

// assigning the value to a variable
var sum_four = summation_two();// can allow calling of function at any time or code

// void functions with parameters
function summation_three(one,two){
    
    var sum_six = one + two;
    console.log("Sum six: ",sum_six);

}
summation_three(23,50);

summation_three(40,40);

// returning functionss with parameters
function summation_four(three,four){
    return three + four;
}
//use it by printing the value directly
console.log("Sum five: ",summation_four(4,6));

//assigning the value to a variable
var sum_five = summation_four(20,20);