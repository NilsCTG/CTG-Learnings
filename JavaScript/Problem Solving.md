# Problem Solving

## Problem solving approaches 

### What is an algorithm? 

A **process** or **set of steps** to accomplish a certain task. 

### What is problem solving all about?

1. Understand the problem.
2. Explore concrete examples.
3. Break it down.
4. Solve/simplify
5. Look back and refactor
</br>

### 1. Understand the problem

In order to determine, whether you have understood a problem, be sure you can answer the following questions: 

1. Can i restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution of the problem?
4. Can the outputs be determined from the inputs? Meaning: Do I have enough information to solve the problem? 
5. How should I label the important pieces of data that are a part of the problem? 

### 2. Explore examples

- start with simple examples
- progress to more complex examples
- explore examples with empty input
- explore examples with invalid input

### 3. Break it down

- Explicitly write down the steps you need to take.
- when starting to write code, write down each step you want to implement
- this will help identifying gaps or misscoceptions in the approach

### 4. Solve/simplify

**Solve**</br>
If you can't solve a problem, solve a simplified version</br>
&rarr; try to ignore the part you cannot solve

**Simplify**
- find the core difficulty in what you're trying to do
- temporarily ignore that difficulty
- write a simplified solution
- then incorporate that difficulty back in

### 5. Look back and refactor

**Refactoring Questions:**
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the solution of your problem?
- Can you think of other ways to refactor?
- How have other people solved this problem? 

## Problem solving patterns

Some patterns:
- Frequency Counter
    - uses objects or sets to collect values/frequencies of values
    - can avoid the need for nested loops or O(n<sup>2</sup>) operations with array/strings
- Multiple Pointers

- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- **Many more**

### Frequency Counter

- counts a frequency of a specific input
- aims at an **O(n)** complexity

**Example task:**
Create an O(n) function which tests, whether two strings are an anagram of each other.
```js
/**
 * @param {string} str1 
 * @param {string} str2 
 * @returns true or false, depending on if str2 is an anagram of str1
 */
function validAnagram(str1, str2){
    if (str1.length != str2.length) {
        return false
    }
    let countOne = {};
    let countTwo = {};
    for (const letter of str1) {
        countOne[letter] = (countOne[letter] || 0)+1;
    }
    for (const letter of str2) {
        countTwo[letter] = (countTwo[letter] || 0)+1;
    }
    console.log(Object.keys(str1))
    for (const num of Object.keys(str1)){
        console.log(num)
        if (!countTwo[num]){
            return false
        }
        if(countTwo[num]!=countOne[num]){
            return false
        }
    }
    return true
  }

  console.log(validAnagram("add","dda"))
```

### Multiple Pointers

- creating **pointers** or values that correspond to an index or position and move towards the ending, beginning or middle based on a certain condition
- **very** efficient for solving problems with minimal space complexity

**Example task:**
Create an O(n) function that accepts a sorted array and counts unique values in it.
```js
/**
 * @param {array} arr
 * @returns the number of unique values in the array. Returns 0 if array is empty.
 */
function countUniqueValues(arr){
  let i = 0;
  let j = 1;
  let count = 0
  if (arr.length>0){
      count = 1;
  } else {
      return 0
  }
  while (j<arr.length) {
      if (arr[i]==arr[j]) {
          j++;
      } else {
          count++;
          i=j;
          j++;
      }
  }
  return count// add whatever parameters you deem necessary - good luck!
}
```

### Sliding Window

- This pattern involves creating a **window** which can either be an array or a number between one position and another.
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- very useful for keeping track of a subset of data in an array or string etc.

**Example task:**
Write a function that is called maxSubarraySum which accepts an array of integers and a number calles **n**. The function should calculate the sum of **n** consecutive elements in the array
```js
function maxSubarraySum (arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num ) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum
}
```

### Divide and Conquer

- This pattern involves dividing a data set into smaller chunks then repeating a process with a subset of data.
- This pattern can tremendously **decrease time complexity**.

**An example:**

Given a **sorted** array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

Divide and Conquer method: Divide the Array (e.g. [1,3,5,9,11,16,20,21,22,25]) in half and pick a value.
- compare the picked value to the searched one: is ist smaller, bigger or equal?
- if smaller or bigger, ignore the rest of the array and look at the part, in which the searched value might appear (divide and conquer again)
- repeat until finished

&rarr; this binary search has a time complexity of log (n)!