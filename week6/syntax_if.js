// Explain the syntax of an if statement in javascript. what is the purpose of using if staements in a program
// the syntax of of if statements is that a varible is declared using let then the if statement is iniatlised with the comparision being in brackets and the print statement being in Curly brackets {}. 

let her = 45;
if (her ===45) {
    console.log("hheeeee")
}

// this is used when a user would like to make conditions and if the conditions are not meet it will terminate or an alternative is given

// given the following code what will be the output and why?
let temperature = 30;
if (temperature>25){
    console.log("its hot!");
} else {
    console.log("its cold")
}
// modifications of the program
let temp = 20;
if (temp> 25){
    console.log("its hot!")
} 
else if (temp <25 && temp>15){
    console.log("its moderate");
} 
else {
    console.log("its cool")
}


// true && true = true
// false && true = true
// false && false= false

// true || true = true
// false || true = false
// false || false = false