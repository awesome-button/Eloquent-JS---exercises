let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((flat, curr) => flat.concat(curr));
console.log(flattened);