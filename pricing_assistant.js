const productName = "Peanut M&M's"

const costPerUnit = 1.50
const basePrice = 5.00
const discountRate = .15
const salesTaxRate = .07
const fixedMonthlyCosts = 15000.00

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