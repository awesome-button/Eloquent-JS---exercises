

// function arrayToList(values) {
//     if (values.length === 1) {
//         return {
//             value: values[0],
//             rest: null
//         }
//     }
//     return {
//         value: values[0],
//         rest: arrayToList(values.slice(1))
//         }
// }
// arrayToList([1, 2, 3]);

// function listToArray(list) {
//     if (list.rest === null) return [list.value];
//     return [list.value, ...listToArray(list.rest)];
// }


// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
// listToArray(list);

function addEle(ele, list) {
    if (list.rest === null) {
        return {
            value: ele, 
            rest: null
        }
    }
    return {
        value: ele,
        rest: addEle(list.value, list.rest)
    }
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

addEle(10, list);