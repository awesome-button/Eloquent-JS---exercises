require('./scripts.js');

let rtlScripts = SCRIPTS.filter(s => s.direction === "rtl");
let rtlNames = rtlScripts.map(s => s.name);

function average(array) {
    return array.reduce((a, b) => a + b)/array.length;
}

let living = SCRIPTS.filter(s => s.living);
let livingYears = living.map(s => s.year);
console.log(livingYears);
console.log(average(livingYears));

let dead = SCRIPTS.filter(s => !s.living);
let deadYears = dead.map(s => s.year);
console.log(deadYears);
console.log(average(deadYears));