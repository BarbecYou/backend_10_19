import {Results} from './results';
import {Football} from './football';
import {Marathon} from './marathon';
import {Calvinball} from './calvinball';

let results: Results[] = [
    new Football("magyarország", new Date(), 6, 1),
    new Football("németország", new Date(), 10, 9),
    new Marathon("kecske", new Date(), 250),
    new Marathon("medve", new Date('1995-12-17'), 310),
    new Calvinball("Hobbes", new Date()),
    new Calvinball("Calvin", new Date()),
]


for (let r of results){
    if (r.winner == "Calvin"){
        console.log(r.result());
    }
} 

results.sort((a, b) => (a.date > b.date) ? 1 : -1);

for (let r of results){
    console.log(r.result());
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    document.getElementById('footballHozzaad')!.addEventListener('click', hozzaad);
    document.getElementById('marathonHozzaad')!.addEventListener('click', hozzaad);
    document.getElementById('calvinballHozzaad')!.addEventListener('click', hozzaad)
}

function hozzaad(){
    
}