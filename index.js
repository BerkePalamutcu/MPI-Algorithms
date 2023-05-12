function bubbleSort(array) {
  const length = array.length;
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap two elements if they are in the wrong order
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return array;
}

const randomArray = [];
for (let i = 0; i < 100000; i++) {
  randomArray.push(Math.floor(Math.random() * 100000) + 1);
}

// const sortedArray = bubbleSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function selectionSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

// const sortedArray = selectionSort(randomArray);
// console.log(sortedArray, 'sortedArray');

// function mergeSort(arr) {
//   const dateBefore = new Date();
//   console.log(dateBefore, 'dateBefore');
//   const len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(len / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   const merge = (left, right) => {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//       } else {
//         result.push(right[j]);
//         j++;
//       }
//     }
//     return [...result, ...left.slice(i), ...right.slice(j)];
//   };
//   const dateAfter = new Date();
//   console.log(dateAfter, 'dateAfter');
//   return merge(mergeSort(left), mergeSort(right));
// }

// function mergeSort(arr) {
//   const dateBefore = new Date();
//   console.log(dateBefore, 'dateBefore');
//   const len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }

//   const merge = (left, right) => {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//       } else {
//         result.push(right[j]);
//         j++;
//       }
//     }
//     return [...result, ...left.slice(i), ...right.slice(j)];
//   };

//   let size = 1;
//   while (size < len) {
//     let i = 0;
//     while (i < len - size) {
//       const left = arr.slice(i, i + size);
//       const right = arr.slice(i + size, i + 2 * size);
//       const merged = merge(left, right);
//       arr.splice(i, 2 * size, ...merged);
//       i += 2 * size;
//     }
//     size *= 2;
//   }
//   const dateAfter = new Date();
//   console.log(dateAfter, 'dateAfter');
//   return arr;
// }

function mergeSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  };

  let size = 1;
  while (size < len) {
    let i = 0;
    while (i < len - size) {
      const left = arr.slice(i, i + size);
      const right = arr.slice(i + size, i + 2 * size);
      const merged = merge(left, right);
      for (let j = 0; j < merged.length; j++) {
        arr[i + j] = merged[j];
      }
      i += 2 * size;
    }
    size *= 2;
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

const sortedArray = mergeSort(randomArray).reverse();
console.log(sortedArray, 'sortedArray');
const doubleSortedArr = brickSort(sortedArray);

function insertionSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

// const sortedArray = insertionSort(randomArray);
// console.log(sortedArray, 'insertionSort');

// function quickSort(arr) {
//   const dateBefore = new Date();
//   console.log(dateBefore, 'dateBefore');
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   const dateAfter = new Date();
//   console.log(dateAfter, 'dateAfter');
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  if (arr.length <= 1) {
    return arr;
  }

  const stack = [{ left: 0, right: arr.length - 1 }];
  while (stack.length > 0) {
    const { left, right } = stack.pop();
    if (right - left <= 0) {
      continue;
    }
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    i++;
    [arr[i], arr[right]] = [arr[right], arr[i]];
    stack.push({ left: left, right: i - 1 });
    stack.push({ left: i + 1, right: right });
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

// const sortedArray = quickSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function heapSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  };

  const buildHeap = (arr) => {
    const n = arr.length;
    const start = Math.floor(n / 2) - 1;
    for (let i = start; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}
// const sortedArray = heapSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function radixSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const getMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };

  const countSort = (arr, exp) => {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  };

  const max = getMax(arr);

  for (let exp = 1; max / exp >= 1; exp *= 10) {
    countSort(arr, exp);
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

// const sortedArray = radixSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function gnomeSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  const n = arr.length;
  let i = 1;
  let j = 2;

  while (i < n) {
    if (arr[i - 1] <= arr[i]) {
      i = j;
      j++;
    } else {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i--;
      if (i === 0) {
        i = j;
        j++;
      }
    }
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

// const sortedArray = gnomeSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function pancakeSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  // Loop through the array from the end to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // Find the index of the maximum element in the unsorted part of the array
    let maxIndex = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    // If the maximum element is already at the end of the unsorted part, no need to flip
    if (maxIndex === i) {
      continue;
    }
    // If the maximum element is at the beginning of the unsorted part, flip the whole array
    else if (maxIndex === 0) {
      flip(arr, i);
    }
    // Otherwise, flip the unsorted part to bring the maximum element to the beginning
    else {
      flip(arr, maxIndex);
      flip(arr, i);
    }
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

function flip(arr, k) {
  let i = 0;
  while (i < k) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    i++;
    k--;
  }
}

// const sortedArray = pancakeSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function brickSort(arr) {
  const dateBefore = new Date().getTime();
  console.log(dateBefore, 'dateBefore');
  let sorted = false;
  while (!sorted) {
    sorted = true;
    // Sort even-indexed pairs
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    // Sort odd-indexed pairs
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  }
  const dateAfter = new Date().getTime();
  console.log(dateAfter, 'dateAfter');
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const sortedArray = brickSort(randomArray);
// console.log(sortedArray, 'sortedArray');

function generateNearlySortedArray(length, numSwaps) {
  // Create a sorted array
  let arr = Array.from({ length }, (_, i) => i);

  // Perform the specified number of swaps
  for (let i = 0; i < numSwaps; i++) {
    // Choose two random indices to swap
    let index1 = Math.floor(Math.random() * length);
    let index2 = Math.floor(Math.random() * length);
    // Swap the elements at the chosen indices
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  // Iterate through the array and randomly swap each element with a nearby element
  for (let i = 0; i < length; i++) {
    // Choose a random distance to swap with
    let distance = Math.floor(Math.random() * 5) + 1;
    // Swap the current element with the element at a nearby index
    let j = i + distance;
    if (j < length) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  return arr;
}

let arr = generateNearlySortedArray(100000, 100); // generates a nearly sorted array of length 100,000 with 1,000 swaps
console.log(arr); // prints the nearly sorted array

// For a larger array of 100,000 elements, generating a nearly sorted array with a specified number of swaps can become computationally expensive.
// Here's an implementation that scales
//better for larger arrays by performing a smaller number of swaps and shuffling the array afterwards:
