# DSA-ts

Hello and welcome to my Data Structures & Algorithms in TypeScript repository. 

This repository will be home to all of my code submissions for the course on Data Structures and Algorithms by the IEEE SusTech SB Programming Team

<ul>
  <li> <a href="https://github.com/ib-bib/DSA-ts#task-1-the-stack-data-structure"> Stack submission </a> </li>
 <!-- <li> <a href="https://github.com/ib-bib/DSA-ts#task-2-the-queue-data-structure"> Queue submission </a> </li> -->
</ul>


## Task 1: The Stack Data Structure

The **stack** data structure works like a pile of plates, each placed on top of another. 
That is, you can only see the top plate clearly and remove it without ruining the pile, 
and the first plate you placed is the last one you can take out.

We can categorise these actions as three basic operations to be performed on any data structure:
1) Inertion
2) Deletion
3) Retrieval

When referring to a stack, we use the terms "Push", "Pop" and "Peek" for those operations respectively.

In my implementation, I used an array to mimic the behaviour of a stack.

Knowing that an array is index-based, we retrieve an item in the array by invoking the name of the array and specifying its index.

We similarly insert an item into the array by referring to its name and the index at which we desire the inserted value to reside.

In order for us to **peek** at our stack or **pop** an item off, 
we'd need to restrict our access to the very last index at which an item is stored in the underlying array.

Say we pushed 4 items into our stack, then the **peek** function should only return the value ```ArrayName[3]```

Whenever we **push** an item into our stack, 
we should also restrict our insertion to being immediately after the last inserted item in the underlying array.

In practice, we should factor in the potential for the stack being *empty* when attempting to invoke the **peek** or **pop** functions, 
or *full* when attempting to **push** into the stack.
This means we need two other basic functions, one to ensure that there is at least something in the stack and one to ensure that we can insert something.

These constraints are applied by using an integer variable initialized at *-1* that acts as a counter. 
When we push an item, assuming the stack isn't full, we increment the counter and insert the new value at that index in the underlying array.
When we pop an item, assuming the stack isn't empty, we return the last inserted value, and decrement the counter.

So, our functions will look something like this:

1. **push(x)**

```
push(value) {
  if (stack isFull()) {
    return ErrorMessage_CannotInsert
  }
  counter <- counter + 1
  UnderlyingArray[counter] <- value
}
```

2. **pop()**

```
pop() {
  if (stack isEmpty()) {
    return ErrorMessage_NoValueToRemove
  }
  counter <- counter - 1
}
```

*NOTE: Some implementations of the pop function return the removed value. That approach in most languages would replace the last line with something like:*

```return UnderlyingArray[counter--]```

3. **peek()**

```
peek() {
  if (stack isEmpty()) {
    return ErrorMessage_NoValueToShow
  }
  return UnderlyingArray[counter]
}
```

4. **isFull()**

``` isFull() { return counter EQUALS StackCapacity } ```

5. **isEmpty()**

``` isEmpty() { return counter EQUALS -1 } ```
<hr />
<!--
## Task 2: The Queue Data Structure
-->
