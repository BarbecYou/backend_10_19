"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const football_1 = require("./football");
const marathon_1 = require("./marathon");
const calvinball_1 = require("./calvinball");
let results = [
    new football_1.Football("magyarország", new Date(), 6, 1),
    new football_1.Football("németország", new Date(), 10, 9),
    new marathon_1.Marathon("kecske", new Date(), 250),
    new marathon_1.Marathon("medve", new Date('1995-12-17'), 310),
    new calvinball_1.Calvinball("Hobbes", new Date()),
    new calvinball_1.Calvinball("Calvin", new Date()),
];
for (let r of results) {
    if (r.winner == "Calvin") {
        console.log(r.result());
    }
}
results.sort((a, b) => (a.date > b.date) ? 1 : -1);
for (let r of results) {
    console.log(r.result());
}
// document.addEventListener('DOMContentLoaded', init);
// function init(){
//     document.getElementById('footballHozzaad')!.addEventListener('click', {
//     });
// }
