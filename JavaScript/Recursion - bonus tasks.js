/**
 * Write a function called power which accepts a base and an exponent. 
 * The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
 * 
 * @param {num} base 
 * @param {num} exponent 
 * @returns 
 */
function power(base,exponent){
    if (exponent === 0) return 1;

    return base*power(base,exponent-1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

/**
 * Write a function factorial which accepts a number and returns the factorial of that number.
 * @param {num} num 
 * @returns 
 */
function factorial(num){
    if(num===0) return 1;
   
   return num*factorial(num-1);
}
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 * @param {Array} arr 
 * @returns 
 */
function productOfArray(arr){
    if(arr.length===1) return arr[0];
    
    return arr[0]*productOfArray(arr.slice(1));
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
 * @param {num} num 
 * @returns 
 */
function recursiveRange(num){
    if(num===0) return 0;
    return num+recursiveRange(num-1);
 }
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
 * and where every number thereafter is equal to the sum of the previous two numbers.
 * @param {num} n 
 * @returns 
 */
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// ib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


//Challenging Problems

/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * @param {str} str 
 * @returns 
 */
function reverse(str){
    if(str.length===1) return str[0];
    let end = str.length-1;
    return str[end] + reverse(str.slice(0,end));
}
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


function isPalindrome(str){
    function reverse(input){
    if(input.length===1) return input[0];
    let end = input.length-1;
    return input[end] + reverse(input.slice(0,end));
    }
    if(reverse(str) == str){
        return true;
    } else {
        return false;
    }
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 * @param {Array} arr 
 * @param {function} callBack 
 * @returns 
 */
function someRecursive(arr,callBack){
    if (arr.length===0) return false;
    let val = arr.pop();

    if(callBack(val) === true){
        return true;
    } else {
        return someRecursive(arr,callBack);
    }
}
//const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * @param {Array} arr 
 * @returns 
 */
function flatten(arr){
    let flattened = [];
    function flattenInner(input){
        console.log(input);
        if(input.length === 0) return;
        if(!Array.isArray(input[0])){
            flattened.push(input[0]);
            flattenInner(input.slice(1));
        } else {
            flattenInner(input[0]);
            flattenInner(input.slice(1));
        }
    }
    flattenInner(arr);
    return flattened;

}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 * @param {Arr} arr 
 * @returns 
 */
function capitalizeFirst (arr) {
    let newArr = [];
    function capitalizeWords(input){
        if (input.length === 0) return;
        let str = input[0][0].toUpperCase();
        str += input[0].slice(1);
        newArr.push(str);
        capitalizeWords(input.slice(1));
    }
    capitalizeWords(arr);
    return newArr;
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/**
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 * @param {Object} obj 
 * @returns 
 */
function nestedEvenSum (obj) {
    let sum = 0;
    function evenSumInnerFunction(input){
    for (const key of Object.keys(input)){
        if(typeof(input[key])==='object' && input[key] !== null){
            evenSumInnerFunction(input[key]);
        }
        if(!Number.isNaN(input[key]) && input[key] % 2 === 0){
            sum += input[key];
        }
    }
    }
    evenSumInnerFunction(obj);
    return sum;
}

// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }

//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10

/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 * @param {Array} arr 
 * @returns 
 */
function capitalizeWords (arr) {
    let newArr = [];
    function capitalizeWordsInner(input){
        if(input.length===0) return;
        newArr.push(input[0].toUpperCase());
        capitalizeWordsInner(input.slice(1));
    }
    capitalizeWordsInner(arr);
    return newArr;
  }

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/**
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
 * @param {Object} obj 
 * @returns 
 */
function collectStrings (obj) {
    let strings = [];
    function collectStringsInner(input){
        for(const [key,val] of Object.entries(input)){
            if(typeof(val)==='object' && !Array.isArray(val)){
                collectStringsInner(val);
            } else if (typeof(val)==='string'){
                strings.push(val);
            }
        }
    }
    collectStringsInner(obj);
    return strings;
}

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
 * @param {*} obj 
 * @returns 
 */
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }