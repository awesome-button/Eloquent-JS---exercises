function evenOdd(num) {
    if (num === 0) return "even";
    if (num === 1) return "odd";

    if (num > 1) {
        return evenOdd(num-2);
    } else {
        return evenOdd(num+2);
    }
}

evenOdd(75);