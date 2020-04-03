require('./scripts.js');

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

console.log(charScript("؂"));