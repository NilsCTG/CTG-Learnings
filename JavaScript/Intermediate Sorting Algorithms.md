# Intermediate Sorting Algorithms

There is a family of faster sorting algorithms reduce time complexity to O(n log(n)), but there is a tradeoff between efficiency and complexity.

## Merge Sort

- a combination of splitting up, merging and sorting
- It exploits the fact that an array of 0 or 1 elements are always sorted. 
- works by decomposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array

**Step 1: Create a function for merging sorted arrays!**

- create an empty array, take a look at the smallest values in each input array
- while there are still values to look at...
    - If the value in the **first** array is smaller than the value in the second array, push the value of the first array into the results-array and move on to the next value in the first array.
    - If the value in the **second** array is smaller, do the same for this value.
- once one array is exhausted, push the remaining values from the other array into the results. 



```js
function merge (arr1, arr2) {
let i = 0;
let j = 0;
let result = [];
while (i<arr1.length || j<arr2.length){
    if(i === arr1.length) {
        result.push(arr2[j]);
        j++;
    }else if(j === arr2.length){
        result.push(arr1[i]);
        i++;
    }else if(arr1[i]<arr2[j]){
        result.push(arr1[i]);
        i++;
    } else {
        result.push(arr2[j]);
        j++;
    }
    console.log(i,j)
}
return result
}

// console.log(merge([1,3,5,7,9,11],[2,3,6,7,8,9,12,14,15,16,16,87]));
```

**Step 2: Create a function for breaking up arrays**

- break up the array into halves until you have arrays that are empty or have one element
- with those smaller sorted arrays, merge them with other sorted arrays until you are back at the full length of an array
- once the array has been merged back together, return the merged (and sorted) array

```js
function mergeSort (arr) {
    if(arr.length <=1) return arr;
    let mid = Math.ceil(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

// let data = Array.apply(null,{length:10000}).map(Function.call,Math.random);
// console.log(mergeSort(data));
```

### Big O of Merge Sort

| **Time </br> Complexity </br> (Best)** | **Time </br> Complexity </br> (Average)** | **Time </br> Complexity </br> (Worst)** | **Space </br> Complexity** |
| --- | --- | --- | --- |
| O(*n* log *n*) | O(*n* log *n*) | O(*n* log *n*) | O(*n*) |

## Quick Sort

- Like merge sort it exploits the fact, that arrays of 0 or 1 element are sorted.
- Works by selecting one element (called pivot) and finding the index where the pivot should end up in the sorted array
- once the pivot is positioned correctly, quick sort can be applied on either side of the pivot

### Step 1: Pivot helper

- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to its right
- The order of elements on either side doesn't matter!
- The helper should do this in **place**, it should not create a new array!
- when complete, the function should return the index of the pivot.

**Picking a pivot**</br>
- The runtime of Quick Sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it is roughly the median value in the data set you're sorting.

**Pseudocode** </br>
- Three arguments should be accepted: an array, a start index, and an end index
- Grab the pivot
- Store the current pivot in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start to the end 
    - If the pivot is greater than the current element increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- return the pivot index

```js
function pivot(arr,start,end){
    const swap = (arr,idx1,idx2) =>
    ([arr[idx1],arr[idx2]] =[arr[idx2],arr[idx1]]);
    let pivotIndex = start;
    let storeIndex = start+1;
    
    for (let i = start+1;i<=end;i++) {
        if(arr[i]<=arr[pivotIndex]){
            swap(arr,i,storeIndex);
            storeIndex++
        }
    }
    swap(arr,pivotIndex,storeIndex-1);
    console.log(arr,storeIndex-1)
    return arr[pivotIndex]
}

// console.log(pivot([7,2,5,3,1,11,8,112,32],0,4))
```

**Quick Sort Pseudocode** </br>
- Call the Pivot helper in the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Basecase: When the subarray has less than two elements

```js
function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left,right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

// console.log(quickSort([7,2,5,3,1,11,8,112,32]));
```

### Big O of Quick Sort

| **Time </br> Complexity </br> (Best)** | **Time </br> Complexity </br> (Average)** | **Time </br> Complexity </br> (Worst)** | **Space </br> Complexity** |
| --- | --- | --- | --- |
| O(*n* log *n*) | O(*n* log *n*) | O(*n*<sup>2</sup>)| O(log *n*) |

## Radix Sort

Radix Sort does not work by direct comparisons.</br>
It works on lists of numbers.

- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits mean bigger number
- It Sorts the n'th digit of a number to a base (i.e. base 10: 0-9) into "buckets"
- Then it restores the array by emptying those buckets
- The same process happens to the next digit, until all digits of the longest number have been accounted for

For JavaScript some helper methods need to be created:</br>
getDigit(*num,place*) - returns the digit *num* at the given *place* value.
```js
function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}
console.log(getDigit(1123,4))
// getDigit(12345,0); // 5
// getDigit(12345,1); // 4
// getDigit(12345,2); // 3
```
digitCount(*num*) - returns the number of digits in num
```js

function digitCount (num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// digitCount(3); // 1
// digitCount(113); // 3
```
mostDigits(*nums*) - Given an array of numbers, returns the number of digits in the largest number in the list.
```js
function mostDigits(nums) {
    let max = 0;
    for(let i = 0; i<nums.length; i++){
        max = Math.max(max,digitCount(nums[i]));
    }
    return max
}
// mostDigits(1,22,315,32222); // 5
```

**Radix Sort Pseudocode**
- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 - 9)
    - Place each number in the corresponding bucked based on its kth digit 
- Replace our existing array with values in our buckets starting with 0 and going up to 9
- Return list at the end

```js
function radixSort (nums){
    let maxDigits = mostDigits(nums);
    for (let k=0; k<maxDigits;k++){
        let buckets = Array.from({length: 10}, () => [])
        for (let j=0;j<nums.length;j++){
            buckets[getDigit(nums[j],k)].push(nums[j]);
        }
        nums = [].concat(...buckets)
    }
    return nums
}

// console.log(radixSort([3,22,5,1,2351,32,1235,6,4,16,3]))
```

### Big O of Radix Sort

| **Time </br> Complexity </br> (Best)** | **Time </br> Complexity </br> (Average)** | **Time </br> Complexity </br> (Worst)** | **Space </br> Complexity** |
| --- | --- | --- | --- |
| O(*nk*) | O(*nk*) | O(*nk*)| O(*n + k*) |
n = length of the array </br>k = number of digits (average)
