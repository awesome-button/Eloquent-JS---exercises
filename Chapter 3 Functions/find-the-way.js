// Consider this puzzle: by starting from the number 1 and repeatedly 
// either adding 5 or multiplying by 3, an infinite set of numbers can be 
// produced. How would you write a function that, given a number, tries to 
// find a sequence of such additions and multiplications that produces that number?

function findSolution(num) {
    function find(cur, history) {
        console.log(`too big ${cur}`);
        console.log(history);
        if (cur === num) return history;
        if (cur > num) return null;
        
        return find(cur * 2, `${history} * 2`) ||
        find(cur * 3, `${history} * 3`) ||
        find(cur * 5, `${history} * 5`) ||
        find(cur * 7, `${history} * 7`);
        
    }
    return find(1, "1");
}

findSolution(45);