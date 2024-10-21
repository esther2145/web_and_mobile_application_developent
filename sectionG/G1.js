// function that calculates tax
function calculateTax(income){
    var payable= income*0.15
    var income_payable = income-payable
    console.log("the tax payable is",income_payable)
}

calculateTax(300000)