function selectionSort(array) {
    const orderedArray = [];
    const arrayLength = array.length;

    for(let i = 0; i < arrayLength; i++){
        let smallest = array[0];
        let index = 0;
        for(let j = 0; j < array.length; j++){
            if(array[j] < smallest){
                smallest = array[j];
                index = j;
            }
        }
        
        array.splice(index, 1);
        orderedArray.push(smallest);

        console.log("Ordered array " + orderedArray);
    }

    return orderedArray;
  }

  selectionSort([5, 3, 6, 1, 8, 7, 2, 4]);

// Selection Sort is one of the easier sorting algorithm to understand and implement.
// This algorithm splits the array in two parts:
    // Sorted
    // Unsorted
// The Sorted part is at the beginning of the array and Unsorted part afterwards.
// Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element. At the end of the pass we swap smallest element to the sorted array.
// It has O(n2) time complexity.