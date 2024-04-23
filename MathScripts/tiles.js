"use strict"

//sample input

var length = 8;
var width = 10;
var boxesOfTilesNeeded;
var amountOfTiles = 12;
var percentageMo = .10;
var boxesOfTilesNeededPlus10;
var area;

// calculation

area = length * width;
boxesOfTilesNeeded = ( area ) / amountOfTiles;
boxesOfTilesNeededPlus10 = ( boxesOfTilesNeeded * percentageMo ) / amountOfTiles;

// sample output

console.log(" I would need " + Math.round(boxesOfTilesNeeded) + " boxes but, im going to buy " + boxesOfTilesNeededPlus10)

//console.log(area)