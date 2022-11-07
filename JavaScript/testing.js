// let data = Array.apply(null,{length:10000}).map(Function.call,Math.random);

function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function digitCount (num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;
    for(let i = 0; i<nums.length; i++){
        max = Math.max(max,digitCount(nums[i]));
    }
    return max
}

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

console.log(radixSort([3,22,5,1,2351,32,1235,6,4,16,3]))