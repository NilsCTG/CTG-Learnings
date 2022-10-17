# Big O Notations
## The main question of big O:

How can I determine, which algorithm is best for solving a problem? 
## What is big O used for?

- It is used for comparing algorithms and their tradeoffs facing a specific problem.
- It helps understanding and identifying problems in the code (which are slowing down or crashing the program)

## What does "better" mean?

- faster?
- less memory usage?
- more readable?

In practice, it is mostly focused on the speed of execution and memory usage. Readability is important, but optimizing an algorithm for speed and memory usage often comes at the expense of readability.

## The problem with time

- taking time as a measure is not suitable to compare algorithms
    - instead: number of simple operations a system must perform (this is constant)

```js
function addUpTo(n) {
   return n*(n+1)/2
}
```
*, + and / are single operations executed in this example. </br>
Big O allows us to formally talk about how the runtime of an algorithm grows as the inputs grow. Details don't matter here, its more about general trends.

## Big O Definition: 

We say that an algorithm is **O(f(n))** if the number of simple operation the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.
</br>
</br>
An algorithm which will always have the same amount of operations, no matter how the input increases can be described as **O(1)**. One where the amount scales with the input size would be described as **O(n)**.

### Nested operations

When an O(n) operation is nested inside of a O(n) operation it results in O(n<sup>2</sup>).
## Simplifying Big O Expressions:

**Constants don't matter!**</br>
O(50n)&nbsp;&nbsp;&rarr; O(n)</br>
O(500)&nbsp;&nbsp;&rarr; O(1)</br>
O(5n<sup>2</sup>)&nbsp;&nbsp;&nbsp;&rarr; O(n<sup>2</sup>)</br>
</br>
**Smaller terms don't matter!**</br>
O(n + 10) &rarr; O(n) </br>
O(1000n + 50) &rarr; O(n)</br>
O(n<sup>2</sup> + 5n + 8) &rarr; O(n<sup>2</sup>)

## Big O rules:

1. Arithmetic operations are constant.
2. Variable assignments are constant.
3. Accessing elements in an array (by index) or object (by key) is constant.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.
