function convert(num, base) {
    let digits = '0123456789ABCDEF';
    let stack = [];

    while (num > 0) {
        let rem = num % base;
        stack.push(rem);
        num = Math.floor(num/base);
    }
    
    let reversed = [];

    for (let j = stack.length - 1; j >= 0; j--) {
        reversed.push(digits[stack[j]]);
    }

    console.log(reversed.join(""));
}

convert(115, 16);