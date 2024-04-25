"use strict"




// Define variables

var payrate = 10;
var stat;
var tax;
var annual;
var hoursWorked = 45;
var grosspay;
var netpay;
var 

grosspay = payrate * hoursWorked
netpay = grosspay - annual
 
annual = 821.75;


// if Statements and conditions

if (annual < 12000 && stat == "single" ) {
    tax = annual * 0.05
}

else if (annual >= 12000 && 12000<=24999 && stat == "single") {
    tax = annual * 0.1 
}

else if (annual >= 25000 && 25000<=74999 && stat == "single") {
    tax = annual * 0.15
}
else if (annual >= 75000 && stat == "single") {
    tax = annual * 0.2
}

// Joint

else if (annual >= 12000 && 12000<=24999 && stat == "joint") {
    tax = annual
}
else if (annual >= 12000 && 12000<=24999 && stat == "joint") {
    tax = annual * 0.06
}

else if (annual >= 25000 && 25000<=74999 && stat == "joint") {
    tax = annual * 0.11
}
else if (annual >= 75000 && stat == "joint") {
    tax = annual * 0.2
}



// Output

message = "You worked" + hoursWorked + "hours this period. Because you earn " + payrate + " per hour, your gross pay is " + grosspay + ". Your filing status is " + stat + ".your tax withholdings is " + tax + ". Your net pay is " + 


console.log(message)