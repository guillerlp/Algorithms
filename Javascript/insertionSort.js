function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
      for(let j = i; j > 0; j--){
        if(array[j] < array[j - 1]){
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
    }

    return array;
  }

  console.log(insertionSort([5, 4, 33, 2, 8]))


// Insertion Sort assumes that array is divided in two parts:
    // Sorted (Initially the first element)
    // Unsorted
// Each pass, we select an element, and check it against the sorted array.
// If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to insert the selected element.
// Insertion sort in action - source
// Time comlexity of Insertion sort is of O(n2).
// It’s a stable algorithm.