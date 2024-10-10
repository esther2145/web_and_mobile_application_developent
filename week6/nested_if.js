// nested if statements and logigiacl operators
let age = 18;
if (age>=18){
     if (age<65){
         console.log("you are eligible to work")
         } else{
         console.log("you are of retirement age")
     }
    
} else {
     console.log("you are too young to work")
}

if (age >65){
    console.log("You are of retirement age");
} else if (age >= 18 && age <65){
    console.log("you are eligible");
} else {
    console.log("you are too young to work");
}
