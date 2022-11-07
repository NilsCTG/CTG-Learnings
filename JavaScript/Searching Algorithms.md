# Searching Algorithms

## Linear Search

**How do we search?**

Given an array, the simplest way to search for a value is to look at every element in the array and check if it is the value we want.

## Binary search

Binary search is a much faster sort of search.</br>
It requires a Sorted Array. Rather than eliminating one element at a time, your can eliminate ***half*** of the remaining elements at a time. </br>
It operates on the basis of Divide and Conquer.

**Task:**</br>
Write a function called **binarySearch** which accepts a **sorted** array and a value. It returns the index at which the value exists. Otherwise return -1.

```js
function binarySearch(arr,val){
    let start = 0;
    let end = arr.length-1;
    while(start !== end){
       let pointer = start + Math.ceil((end-start)/2);
       if(arr[pointer] === val) return pointer;
       if(arr[pointer] < val) start = pointer;
       else end = pointer;
    }
    return -1;
}
```

## Naive String Search

**Task:**</br>
Given a longer and a shorter string, loop over the longer string and find out how many times the smaller string appears in the larger one.

```js
  function naiveStringSearch (long,short){
    let maxlength = long.length - short.length
    let count = 0;

    for(let i =0; i <= maxlength; i++){
        if(long[i]===short[0]){
            for(let j = 1; j < short.length;j++){
                if(!short[j]===long[i+j]) break;
                if(j === short.length-1) count++;
            }
        }
    }
    return count;
  }
  ```
