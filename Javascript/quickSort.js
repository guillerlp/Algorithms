function quickSort(array) {

    if(array.length <= 1){
        return array;
    }

    const pivotIndex = getRandomPivotIndex(array);
    const pivot = array[pivotIndex];
    const leftArray = [];
    const rightArray = [];

    for (let i=0; i<array.length; i++){
        if (i === pivotIndex) continue;
        if(array[i] < pivot){
            leftArray.push(array[i]);
        }else{
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function getRandomPivotIndex(array){
    return Math.floor(Math.random() * array.length);
}

console.log(quickSort([5, 3, 6, 1, 8, 7, 2, 4]));

// Quick sort is an efficient sorting algorithm. It’s an in-place algorithm so it doesn’t take any auxilary space.
// First pick a random pivot point around which move all the smaller elements to it to the left of it and the bigger elements to the right of it.
// After getting the pivotIndex which is essentially the fixed position of that element, we find other pivotIndex by recusirvely calling this function.
// Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point, so that way it’s big O is O(nlogn).
// It’s space complexity is O(logn).
// It’s an unstable algorithm.