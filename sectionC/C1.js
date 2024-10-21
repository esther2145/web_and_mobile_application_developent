function discount() {
    var rice = 20000;
    var posho = 30000;
    var meat = 50000;
    var total = rice + posho+ meat
    return total
}
console.log("the total price of products is ",discount());
var total_discount = discount();

if (total_discount == 100000) {
    console.log("the discount has been given");
} else {
    console.log("the discount is not applicable");
}