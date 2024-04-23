"use strict"

//sample input + known values

var roomLength = 8;
var roomWidth = 10;
var boxesOfTilesNeeded;
var amountOfTiles = 12;
var percentageMo = .10;
var boxesOfTilesNeededPlus10;
var area;

// calculation

area = roomLength * roomWidth;
boxesOfTilesNeeded = ( area ) / amountOfTiles;
boxesOfTilesNeededPlus10 = ( area * percentageMo / boxesOfTilesNeeded) + Math.ceil(boxesOfTilesNeeded) ;

// sample output

console.log(" I would need " + Math.round(boxesOfTilesNeeded) + " boxes but, im going to buy " + boxesOfTilesNeededPlus10.toFixed(1))

//console.log(area)