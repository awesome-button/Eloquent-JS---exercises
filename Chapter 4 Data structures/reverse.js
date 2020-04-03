//the original array is not mutated, a new array is created
function reverse(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0 ; i--) {
        result.push(array[i]);
    }
    console.log(result);
}
reverse([1, 2, 3, 4, 5]);

//the original array is mutated
function reverse(array) {
    let step = 0;
    for (let i = 0; i < array.length/2; i++) {
        for (let j = array.length - 1 - step; j >= array.length/2;) {
            [array[i], array[j]] = [array[j], array[i]];
            step++;
            break;
        }
    }
    console.log(array);
}

reverse([1, 2, 3, 4, 5, 6]);

//the original array is mutated, a smarter one without nested loops
function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    }
    console.log(array);
}

reverse([1, 2, 3, 4, 5, 6]);