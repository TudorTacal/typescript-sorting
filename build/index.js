"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const collection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(sorter.collection);
var charactersCollection = new CharactersCollection_1.CharactersCollection('dcba');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
