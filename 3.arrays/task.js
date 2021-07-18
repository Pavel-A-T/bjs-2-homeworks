function compareArrays(arr1, arr2) {
    let result = false;
    if (arr1.length !== arr2.length) {
        return result;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return result;
        }
    }

    result = true;
    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr.filter(isPositiveAndSplit).map(mult);

    return resultArr; // array
}

function isPositiveAndSplit(value) {
    return (value > 0 && value % 3 === 0);
}

function mult(value) {
    return value * 10;
}
