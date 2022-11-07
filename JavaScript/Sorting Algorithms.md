# Sorting Algorithms

There are many different sorting algorithms around. Some algorithms can be very slow compared to others, but are exceptionally fast in a special scenario.

## Bubble Sort
- start looping an array with a variable called i at from the end to the beginning
- create an inner loop comparing and exchanging two values, if the right one is smaller

```js
function bubbleSort (arr){
    for(let i = arr.length-1; i > 0; i-- ){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
```

A short circuit can be implemented into this function to prevent it from looping over a sorted array until **i** meets the condition for the loop to stop. </br>
This comes in handy when the array input is already sorted in some way.

```js
function bubbleSort (arr){
    let swapped;
    for(let i = arr.length-1; i > 0; i-- ){
        swapped = false;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (swapped === true) {
            break;
        }
    }
    return arr
}
// console.log(bubbleSort([5,2,2,2,2,2,2]));
```

## Selection Sort

This is similar to Bubble Sort, but instead of first placing large values into sorted positions, it places small values into sorted positions. (This time with sorting function).

```js
function selectionSort (arr){
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallest]) smallest = j;
        }
        if (i !== smallest) {
            console.log("Swapping "+arr[i]+" and "+arr[smallest]);
            swap(arr,i,smallest);
        }
        }
    return arr;
}
// console.log(selectionSort([2,3,1,5,4,1,23,1555,123,32,65,3]));
```

## Insertion Sort

This algorithm building up a sorted side of the array, taking one value by one and putting it in the correct place on the sorted part. </br>
It comes in handy when executing a live algorithm which waits for further input and sorts it.

```js
function insertionSort (arr){
    const sort = (arr,idx1,idx2) =>
    ([arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]);

    for(let i = 1; i < arr.length; i++){
        for(let j = i-1; j>=0 && arr[j+1] < arr[j]; j--){
            sort(arr,j,j+1);
        }
    }
    return arr
}
// console.log(insertionSort([33,12,1,4,54,12]));
```

## Big O of the three Sorting Algorithms

| Algorithm | **Time </br> Complexity </br> (Best)** | **Time </br> Complexity </br> (Average)** | **Time </br> Complexity </br> (Worst)** | **Space </br> Complexity** |
| --- | --- | --- | --- | --- |
| Bubble Sort | O(*n*) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) |
| Insertion Sort | O(*n*) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) |
| Selection Sort | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) | 