# Why use recursion?

- sometimes recursion is a better alternative to iteration
- sometimes it's more readable
- often used when traversing objects
- often used with more complex data structures

## Definition

A **process** (a function) that **calls itself**.

## Why is this important?

- When we write recursive functions, we keep pushing new functions to the call stack.

**How recursive functions work**

Invoke the **same** function with a different input until you reach your base case.

Two essential parts:
- Base case (when the function ends)
- different input

```js
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return
    }
    console.log(num);
    num--;
    countDown(num);
}
```

## Where things go wrong

- no base case
- forgetting to return or returning the wrong thing
- stack overflow

## Helper method recursion

This method is used by defining an outer function which calls the recursive function inside. This can help fetching returned Values of the recursive function.

```js
function outer(input) {
    let outerScopedVariable = [];

    function helper(helperinput) {
        //modify the outer scoped variable
        helperinput--;
        helper(helperinput);
    }

    helper(input);
    return outerScopedVariable
}
```