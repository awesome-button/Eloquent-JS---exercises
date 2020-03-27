function parChecker(symbolString) {
    var s = [];
    var index = 0;
    let openingSymbols = ['(', '[', '{'];
    let closingSymbols = [')', ']', '}'];

    while (index < symbolString.length) {
        var symbol = symbolString[index];
        if (openingSymbols.includes(symbol)) {
            s.push(symbol);
        }
        else {
            if (s.length === 0) {
                return false;
            } else if (openingSymbols.indexOf(s[s.length-1]) === closingSymbols.indexOf(symbol)) {
                s.pop();
            } else {
                return false;
            }
        }
        index = index + 1;
    }

    if (s.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(parChecker('[{{}()}]'));