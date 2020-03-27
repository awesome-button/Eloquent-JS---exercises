function range (start, end, step = 1) {
    let result = [];

    for (let i = start; i != end; i+=step) {
        result.push(i);
        
    }
    result.push(end);
    console.log(result);
}

range(5, 2, -1);
range(2, 6, 1);