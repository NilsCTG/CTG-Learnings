// Frequency counters_________________________
/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have O(n) time complexity.
 * @param {integer} numOne 
 * @param {integer} numTwo 
 * @returns true if the frequency is the same
 */
function sameFrequency(numOne, numTwo){
    numOne = numOne.toString();
    numTwo = numTwo.toString();
    let control = {};
    if (numOne.length !== numOne.length){
        return false;
    }
    for (const l of numOne) {
        console.log(l)
        control[l] = (control[l] || 0)+1;
    }
    console.log(control)
    for (let l of numTwo) {
        if (!control[l]){
            return false
        }
        if (control[l]===0){
            return false
        } else {
            control[l]--;
        }
    }
    return true
}
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * Restrictions: Time O(n)
 * @returns true when there are duplicates
 */
function areThereDuplicates() {
    if (arguments.length <= 1) {
        return false;
    }
    let count = {};
    for (let i=0; i < arguments.length; i++) {
        count[arguments[i]] = (count[arguments[i]]|| 0)+1;
        if (count[arguments[i]]>1){
            return true;
        }
    }
    return false;
}

//areThereDuplicates(1,2,2); // true 
//areThereDuplicates('a','b',1,'b');//true



//Multiple Pointers_________________________
/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 * 
 * Targe:
 * Time O(n);
 * Space O(1);
 * @param {array} arr 
 * @param {int} avg 
 * @returns 
 */
 function averagePair(arr,avg){
    let i = 0;
    let j = arr.length-1;
    while (i < j) {
        let numAvg = (arr[i]+arr[j])/2;
        if (numAvg == avg){
            return true;
        }
        if (numAvg < avg){
            i++;
        } else if (numAvg){
            j--;
        }
    }
    return false;
}

//averagePair([1,3,3,5,7,10,12,15,19],8)

/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * Constraints: time O(n) Space O(1)
 * @param {string} str1 
 * @param {string} str2 
 * @returns true if every letter appears in order
 */
 function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (i<str1.length){
        if(str1[i]==str2[j]){
            i++;
            j++;
        } else {
            j++;
        }
        if (j > str2.length){
            return false;
        }
    }
    return true;
}
/*isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)*/


//Sliding Window_________________________
/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * Constraints: time O(n+m), space O(1)
 * @param {array} arr 
 * @param {int} subSize 
 * @returns 
 */
function maxSubarraySum(arr,subSize){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < subSize) return null
    for (let i=0; i < subSize; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i = subSize; i < arr.length; i++){
        tempSum = tempSum - arr[i - subSize] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}
/*maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null */

/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {array} arr 
 * @param {int} num 
 * @returns the smallest contigous subarray which sums u to greater than or equal to a given number if found, otherwise 0
 */
function minSubArrayLen(arr,num){
    let i = 0;
    let j = 1;
    let window = 0;
    let minLen = 0;
    if (arr.length < 1) return 0;
    if (arr[i] >= num) return 1;
    window = arr[i]+arr[j];
    while (j < arr.length) {
        if(window >= num) {
            if (minLen !== 0){
                minLen = Math.min(minLen,j-i+1);
            } else {
                minLen = j-i+1;
            }
            window -= arr[i];
            i++;
        } else {
            j++;
            window += arr[j];
        }
    }
    if (minLen === null) return 0;
    return minLen
}
//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray

/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 * Time complexity: O(n)
 * @param {string} str 
 * @returns longest substring
 */
function findLongestSubstring(str){
    let count ={};
    let start = 0;
    let end = 0;
    let next = 1;
    let maxLength = 1;
    let currLength = 1;
    if (str.length < 1) return 0;
    if (str.length === 1) return 1;
    
    count[str[start]] = 0;
    
    while (next < str.length){
        if(count[str[next]]!== undefined && count[str[next]] >= start){
            maxLength = Math.max(maxLength,currLength);
            start = count[str[next]]+1;
            end++;
            currLength = end-start+1;
            count[str[end]]= end;
        } else {
            end++;
            currLength++;
            count[str[end]] = end;
        }
        next++;
    }
    maxLength = Math.max(maxLength,currLength);
    return maxLength;
}
//findLongestSubstring('thisisawesome') // 6