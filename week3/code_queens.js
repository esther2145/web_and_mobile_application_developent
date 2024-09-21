
let queenName = "Anitah";
let completedChallenges = 0;
let increment = completedChallenges + 1;

function celebrateWin() {
    console.log("You did it Queen")
}
celebrateWin();
function celebrateWin(ChallengeName){
    console.log(`Challenge ${ChallengeName} completed!`)
    console.log("Time to take on the next challege")
}
celebrateWin("esther");

for (let x =1; x <= 3; x++) {
    console.log(`Challenge ${x} solved`);
}

for (let x =1; x <= 3; x++) {
    console.log(`The Tech Queens have solved Challenge ${x}!`);
}

let nextChallenge = "Loops"
if (nextChallenge = "Loops"){
    console.log("Time to practice loops")
} else if (nextChallenge = "functions"){
    console.log("Time to master functions")

} else{
    console.log("On to the next Challenge!")
}