//void function
function NAME(you){
    var mine = you
    console.log("copa ngo",mine);
}
NAME("esther");

//return function
function your(one){
     return one;
}
console.log("how are you: ",your("esther"));

//function for calculating profit
function calculateProfit(selling_price,cost_price,units_sold){
    var profit = selling_price-cost_price;
    console.log("the number of units of maize flour sold were",units_sold,"and the profit gotten was",profit,'shs')
}
calculateProfit(6000,4800,2);
