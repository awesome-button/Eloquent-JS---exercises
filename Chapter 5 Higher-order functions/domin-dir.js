require('./scripts.js');

function dominantDirection(text) {
    let domScript = SCRIPTS.filter(s => s.name == dominantScript(text));
    return `Dominant script - ${domScript[0].name}, dominant direction - ${domScript[0].direction}`;
}

function dominantScript(text) {
    let usedScripts = {};
    for (let i = 0; i < text.length; i++) {
        let script = charScript(text[i]);
        usedScripts[script] === undefined ?
            usedScripts[script] = 1 :
            usedScripts[script]++;
    }
    let max = Math.max.apply(null, Object.values(usedScripts));
    let keys = Object.keys(usedScripts);
    return keys.filter(key => usedScripts[key] === max);
}

function charScript(char) {
    let code = char.charCodeAt(0);
    return SCRIPTS
        .filter(s => {
            return s.ranges.some(r => {
                return code > r[0] && code < r[1];
            })
        })
        .map(s => s.name)[0];
}

// console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, لخير"));
