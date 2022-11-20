# DSA-ts

Hello and welcome to my Data Structures & Algorithms in TypeScript repository. 

This repository will be home to all of my code submissions for the course on Data Structures and Algorithms by the IEEE SusTech SB Programming Team

<ul>
  <li> <a href="https://github.com/ib-bib/DSA-ts#task-1-the-stack-data-structure"> Stack submission </a> </li>
  <li> <a href="https://github.com/ib-bib/DSA-ts#task-2-the-queue-data-structure"> Queue submission </a> </li>
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

``` isFull() { return counter + 1 EQUALS StackCapacity } ```

*We say + 1 because array indexing starts from 0, meaning our "counter" is technically 1 behind the number of actual items in the stack*

5. **isEmpty()**

``` isEmpty() { return counter EQUALS -1 } ```
<hr />

## Task 2: The Queue Data Structure

The **queue** data structure works like a line at a bakery. First person to get in line, is the first person who is served.

Once again, I use an array implementation to make my **queue**. 
To do that, I would need to identify where the front of the **queue** is, and where the end (or rear) of the **queue** is.

Meaning, this time we need two variables to keep track of instead of one like we did with the **stack**.

So, we initialize a ```front = -1``` and a ```rear = -1``` along with our underlying array of course.

By this point we know the drill, we need to be able to perform three basic operations: Insertion, Deletion, and Retrieval

In a **queue**, we insert by "enqueing" an item at the end of the line (provided there is room for that item). We delete by "dequeuing" an item from the front of the line. As for retrieval, we may view the item at the front or the rear.

With the **stack**, whenever we popped an item off, we had to decrement our hidden ```top``` counter. Here in the queue, we actually increment our ```front``` to bring it closer to the ```rear```.

*Fun fact: Did you know that a person who's standing in a queue, is called a [queuer](https://english.stackexchange.com/questions/76495/whats-the-proper-word-for-a-person-waiting-in-a-queue)? Sounds weird to me. I feel like such a label would befit whoever is serving the people standing in the queue, or whoever told the people to get in line or something. Whatever*

In pseudocode, these operations would look something like this

1. **enqueue(x)**
```
enqueue(value) {
  if (queue isFull()) {
    return NoMoreRoomInQueue
  }
  if (queue isEmpty()) {
    front <- 0
  }
  rear <- rear + 1
  underlyingArray[rear] = value
}
```

2. **dequeue()**
```
dequeue() {
  if (queue isEmpty()) {
    return NoQueuersFound
  }
  front <- front + 1
}
```

3. **viewFront()**
```
viewFront() {
  if (queue isEmpty()) {
    return NoQueuersFound
  }
  return underlyingArray[front]
}
```

4. **viewRear()**
```
viewRear() {
  if (queue isEmpty()) {
    return NoQueuersFound
  }
  return underlyingArray[rear]
}
```

And of course our beloved boolean functions that ensure proper functionality

5. **isEmpty()**
```
isEmpty() { return front EQUALS -1 }
```

6. **isFull()**
```
isFull() { return rear + 1 EQUALS QueueCapacity }
```

To those who tinker a bit with the **queue**, you may come to notice that if you fill a **queue**, then dequeue a bunch of items (even all of them), you will still be unable to enqueue more items. Which sounds very antithetical to the whole point of a line. You wait your turn, sooner or later whoever is in front of you will leave and you will be able to get your turn. Moreover, it sounds so nonsensical that your **queue** would be both empty and full at the same time.

This is where our good old friend, the esteemed discipline of Mathematics comes to the rescue.

Specifically, [Modular Arithmetic](https://www.britannica.com/science/modular-arithmetic).

The basic idea is to create a counter in such a manner that it resets itself after reaching a certain point. Which sounds a lot more intimidating than it actually is. All you need to know is what that certain stopping point is, and then let basic arithmetic do the rest.

Say we had a counter we wished to increment a total of 24 times a day, one increment per hour.
Instead of updating its value by 1 the usual way ```counter <- counter + 1```, we instead store the remainder of the division of its incremented value by the number 24 (our end point) ```counter <- (counter + 1) Mod 24```. Say our counter was currently at 3, after 1 hour its value should be the remainder of the division (3 + 1) / 24, which is the remainder of 4/24 which is just 4 itself. This means that there is no difference between our regular counter and our modular arithmetic counter, so long as we have not reached the end point. Now let's consider what would happen if our counter was at 23. After an hour, its value would be the remainder of 24/24. Now, that value happens to be 0, which means our counter has reset!

If you're thinking something like "Great now I know the math behind how a digital 24-hour clock works, but I don't see how this helps me solve my empty full queue problem". Well, then let's consider what happens if we implement this kind of clock arithmetic in our **queue**.

Whenever you dequeue an item, the front increments, but the rear stays the same. If the rear is at the last index in the underlying array, then we cannot insert any more items. If we update the rear's value using modular arithmetic instead, then the rear goes back to 0, the first index in the underlying array.

This however introduces a new issue; prior to this we "knew" our **queue** was full by checking if the rear is at the last index. We now know such an approach is deceiving, if we dequeue an item, then our **queue** now has new free space. The way to rectify this issue is to add a counter that's intialized at 0 to count the number of items we enqueued in total, that would allow us to really know if we filled our **queue**. We increment this counter by 1 every enqueue, and decrement it by every dequeue.

This means that we would need to change some of our functions to better suit this new approach:

```
enqueue(value) {
  rear <- (rear + 1) % QueueCapacity
  underlyingArray[rear] = value
  counter <- counter + 1
}
```

```
dequeue() {
  counter <- counter - 1
  front <- (front + 1) % QueueCapacity
}
```

```isFull() { return counter EQUALS QueueCapacity }```

```isFull() { return counter EQUALS 0 }```

Thank you for reading :smile: this one was quite lengthy

<hr />
