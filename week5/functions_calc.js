// function that carries out basic mathematicall operation
function operations(one,two){
    var addition = one + two;
    var division = one / two;
    var subtraction =  one - two;
    var multiplication = one * two;

    console.log('the sum of ',one,"+",two,"is: ",addition);
    console.log('the division of ',one,"/",two,"is: ",division);
    console.log('the subtraction of ',one,"-",two,"is: ",subtraction);
    console.log('the multiple of ',one,"x",two,"is: ",multiplication);
}
operations(20,10)