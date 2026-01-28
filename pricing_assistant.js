let productName = "Peanut M&M's"

let costPerUnit = 1.50
let basePrice = 5.00
let discountRate = .15
let salesTaxRate = .07
let fixedMonthlyCosts = 15000.00

let discountedPrice = basePrice * (1-discountRate)
let finalPriceWithTax = discountedPrice * (1+salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log("Product Name: ", productName)
console.log("Discounted Price (before tax): $", discountedPrice.toFixed(2))
console.log("Final Price (with tax): $", finalPriceWithTax.toFixed(2))
console.log("Profit Per Unit: $", profitPerUnit.toFixed(2))
console.log("Break-Even Units (Monthly): ", breakEvenUnits)
console.log("Is the product profitable per unit? ", isProfitablePerUnit)
