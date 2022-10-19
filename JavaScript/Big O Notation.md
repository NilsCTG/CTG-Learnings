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

## Space Complexity

### Rules of thumb

- Most primitives (booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (n is the string length).
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

### Examples

```js
function um(arr) {
   let total = 0;
   for (let i =0; i<arr.length;i++){
    total += arr[i];
   }
   return total
}
```
In this function, no matter how big *arr* is, there are only two numbers: *total* and *i*. </br>
&rarr; O(1) space is needed for this function.

```js
function double(arr) {
   let newArr = [];
   for (let i =0; i<arr.length;i++){
    newArr.push(2*arr[i]);
   }
   return newArr
}
```
In this function the *newArr* grows in proportion to the input. </br>
&rarr; O(n) space is needed for this function.

## Big O and logarithms

Sometimes big O expressions involve more complex mathematical expressions, one of which are logarithms.</br>
log<sub>2</sub>(8) = 3 </br>
2<sup>3</sup> = 8 </br>
Logarithmic time complexities, for example **O(log(n))** are way more favorable than **O(n)** because of their behavior when n increases.

## But why should I care?
- Some searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Sometimes Recursion involves logarithmic space complexity.

## Big O of objects

| Operation | Time complexity |
| --- | --- |
| insertion | O(1) |
| removal | O(1) |
| searching | O(n) |
| access | O(1) |

Objects are a good choice, when you don't need ordering. 

### Big O of object methods

| Method | Time complexity |
| --- | --- |
| Object.**keys** | O(n) |
| Object.**values** | O(n) |
| Object.**entries** | O(n) |
| **hasOwnProperty** | O(1) |

## Big O of arrays

### When should I use an array?

- when you need an order in your data
- when you need fast insertion/removal (sort of..)

| Operation | Time complexity |
| --- | --- |
| insertion | It depends... |
| removal | It depends... |
| searching | O(n) |
| access | O(1) |

**Insertions:**</br>
When *adding* an element...</br>
&nbsp;&nbsp;&nbsp;&nbsp;...to the **end** of an array, time complexity is **O(1)**.</br>
&nbsp;&nbsp;&nbsp;&nbsp;...to the **beginning** of an array, time complexity is **O(n)**.</br>

When *removing* an element...</br>
&nbsp;&nbsp;&nbsp;&nbsp;...from the **beginning** of an array, time complexitxy is **O(n)**.</br>
&nbsp;&nbsp;&nbsp;&nbsp;...from the **end** of an array, time complexity is **O(1)**.

### Big O of array methods

| Method | Time complexity |
| --- | --- |
| pop | O(1) |
| push | O(1) |
| shift | O(n) |
| unshift | O(n) |
| concat | O(n) |
| slice | O(n) |
| splice | O(n) |
| sort | O(n*log(n)) |
| forEach/map/reduce/filter etc. | O(n) |