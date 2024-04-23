"use strict"

//sample input

var taxes = .23;
var grossIncome = 1700
var taxedAmount
var netIncome 

// calculation

var taxedAmount = taxes * grossIncome
var netIncome = grossIncome - taxedAmount

// output sample

console.log( taxedAmount.toFixed(2) + " is how much money that is withheld after " + taxes + " is taken out of " + grossIncome)
console.log(" After " + taxedAmount.toFixed(2) + " is taken out. You are left with " + netIncome + " as your monthly income ")