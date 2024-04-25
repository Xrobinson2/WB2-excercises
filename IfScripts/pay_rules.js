"use strict";

// declared variables

var payRate = 12.50;
var hoursWorked = 20;
var overTimePay = payRate * 1.5;
var overHoursPay;
var pay;

//if statement

if ( hoursWorked > 40  ) {
     overHoursPay = hoursWorked - 40
     pay = payRate * 40 + overHoursPay * overTimePay

   }
else if ( hoursWorked <= 40 ) {

    pay = payRate * hoursWorked
}

else {
    console.log(" other ")
}

   console.log(" the gross pay is " + pay)