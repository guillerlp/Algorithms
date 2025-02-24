function merge(array1, array2) {
    let merged = [];

    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            merged.push(array1.shift());
        } else if (array2[0] < array1[0]) {
            merged.push(array2.shift());
        } else {
            merged.push(array1.shift(), array2.shift())
        }
    }

    return [...merged, ...array1, ...array2];
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }else{
        let middle = Math.floor(array.length / 2);
        return merge(
            mergeSort(array.slice(0, middle)),
            mergeSort(array.slice(middle))
        )
    }
}

console.log(mergeSort([5, 3, 6, 1, 8, 7, 2, 4]))