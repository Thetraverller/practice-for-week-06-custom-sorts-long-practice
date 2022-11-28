function frequencySort(arr) {
    // Your code here
    let frequencyMap = new Object();
    for (let i = 0; i < arr.length; i++) {
      frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
    };
    return arr.sort((a, b) => frequencyMap[a] - frequencyMap[b] || b - a);
  } 


const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
frequencySort(arr2);        // => [1, 3, 3, 2, 2]
frequencySort(arr3);        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]
