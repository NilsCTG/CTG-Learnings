
/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have O(n) time complexity.
 * @param {integer} numOne 
 * @param {integer} numTwo 
 * @returns 
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
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

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

areThereDuplicates(1,2,2); // true 
areThereDuplicates('a','b',1,'b');//true
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
function averagePair(arr, avg){
    if (arr.length < 1) return false;
    let i = 0;
    let j = 1;
    let lastPair = 0;
    while (j < arr.length) {
        let numAvg = (arr[i]+arr[j])/2;
        if (numAvg == avg) {
            return true;
        } else if (numAvg < avg) {
            if (lastPair > avg){
                return false;
            }
            i++;
            j++;
            lastPair = numAvg;
        } else if (numAvg > avg){
            i--;
            lastPair = numAvg;
        }
    }
}