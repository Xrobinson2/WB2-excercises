"use strict"


// Define the Variables

var hourOfDay = -1;
var greeting;

// If Statement

if ( hourOfDay < 0 ) {
    greeting = " ERROR INVALID TIME "
}

else if (hourOfDay < 10 ) {
     greeting = " Good Morning! "
}

else if ( hourOfDay <= 17 ) {
     greeting = " Good Day! "
}

else if ( hourOfDay <= 23) {
    greeting = " Good Evening! "
}

else {
    greeting = " ERROR INVALID TIME "
}

// Output

console.log(greeting)