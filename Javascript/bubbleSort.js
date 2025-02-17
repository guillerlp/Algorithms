function bubbleSort(array) {
    for(let i = 0; i < array.length ; i++){
      for(let j = 0; j < array.length - 1 - i; j++){
        if(array[j] > array[j + 1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
      }
    }

    return array;
  }

console.log(bubbleSort([5, 3, 6, 1, 8, 7, 2, 4]));


// Bubble Sort is a sorting algorithm which sorts or bubbles the largest number as last element at the end of each pass.
// We compare each element to the one ahead of it, if the element before is smaller, we swap their places.
// Bubble Sort’s time complexity is O(n2).
// It’s a stable algorithm.
