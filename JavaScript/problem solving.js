function addUpTo(n) {
    let total = 0;
    for (let i = 1; i<=n; i++){
        total +=i;
    }
    return total
}


function addUpToFast(n){
    return n*(n+1)/2
}


/**
 * Task: create a O(n) function which tests, whether two strings are an anagram of each other.
 * @param {string} str1 
 * @param {string} str2 
 * @returns true or false, depending on if str2 is an anagram of str1
 */
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
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


