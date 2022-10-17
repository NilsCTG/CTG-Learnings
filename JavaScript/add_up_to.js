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
console.log(addUpTo(1000000000))
//console.log(addUpToFast(1000000000))


