function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every((item, ind) => item === arr2[ind]));
}

function advancedFilter(arr) {
    return  arr.filter(item => item > 0 && item % 3 === 0).map(item => item * 10);
}
