# Stack in DSA (JavaScript)


## 1. What is a Stack?

A **Stack** is a linear data structure that follows a very simple rule:

👉 **Last In, First Out (LIFO)**

This means the element that goes inside the stack **last**, comes out **first**.

Think of a stack of plates:

* You put a plate on top
* You remove the top plate first

You cannot remove a plate from the middle.

---

## 2. Real-Life Examples of Stack

Stacks are everywhere in real life:

* Stack of books
* Undo / Redo in editors
* Browser back button
* Function calls in programming

These examples help you remember the LIFO rule easily.

---

## 3. Basic Stack Operations

Every stack supports mainly **four operations**:

1. **Push** → Add element to stack
2. **Pop** → Remove top element
3. **Peek / Top** → See top element
4. **isEmpty** → Check if stack is empty

---

## 4. Stack Implementation Using Array (JavaScript)

Arrays in JavaScript already behave like stacks, so this is the easiest way.

```js
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

---

## 5. Time & Space Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |

Space Complexity: **O(n)**

---

## 6. Stack Implementation Using Linked List (Important Concept)

A stack can also be implemented using a **Linked List**. This is important for **DSA understanding**, even though JavaScript interviews mostly use array-based stacks.

Core idea (very simple):

* **Top of stack = Head of linked list**
* **Push = Insert at head**
* **Pop = Delete from head**

This avoids array resizing and keeps push/pop always **O(1)**.

Short implementation:

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (!this.top) return null;
        const val = this.top.data;
        this.top = this.top.next;
        return val;
    }
}
```

👉 Interview note: **Linked list stack is conceptually important; array stack is commonly used in JS.**

---

## 7. Stack Overflow & Underflow

* **Overflow**: Trying to push when stack is full (important in low-level languages)
* **Underflow**: Trying to pop from an empty stack

In JavaScript, overflow rarely happens, but underflow must be handled.

---

## 8. Important Stack Interview Algorithms (MUST KNOW)

---

### 8.1 Reverse a String Using Stack

```js
function reverseString(str) {
    let stack = [];
    for (let ch of str) stack.push(ch);

    let result = "";
    while (stack.length) result += stack.pop();
    return result;
}
```

---

### 8.2 Check Balanced Parentheses

```js
function isBalanced(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);
        else {
            if (stack.pop() !== map[ch]) return false;
        }
    }
    return stack.length === 0;
}
```

---

### 8.3 Next Greater Element

```js
function nextGreater(arr) {
    let stack = [];
    let res = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            res[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return res;
}
```

---

## 9. Call Stack (VERY IMPORTANT)

Whenever a function is called, JavaScript stores it in the **Call Stack**.

Example:

```js
function one() {
    two();
}
function two() {
    console.log("Hello");
}
one();
```

Functions are pushed and popped automatically.

This explains:

* Recursion
* Stack overflow errors

---

## 10. Stack vs Queue

| Stack        | Queue            |
| ------------ | ---------------- |
| LIFO         | FIFO             |
| Undo         | Scheduling       |
| Backtracking | Order processing |

---

## 11. Common Beginner Mistakes

* Forgetting stack empty check
* Confusing stack with queue
* Not understanding LIFO order

---

## 12. Where Stacks Are Used

* Expression evaluation
* Syntax checking
* Backtracking problems
* Depth First Search (DFS)

---

## 13. Interview Gold Lines

> “Stack works on LIFO principle, making it suitable for undo, recursion, and backtracking problems.”

> “Stacks help manage function calls internally using the call stack.”

---
## Our IMP code snippets

### push/pop/top/isempty/isfull an element in stack -O(1), sc-O(n)

```

let stack_arr=new Array(5)
let top=-1
let length=stack_arr.length
function push(data){
    top++;
    if(top>length-1){
        console.log(`stack overflow You can't add ${data} in stack`);
        top--
        return false
    }
    stack_arr[top]=data;
    return true
}
function pop(){
    let x=stack_arr[top]
    if(top<0){
        console.log("stack underflow/empty");
        return false
    }
    top--;
    return x
}

function topElement(){
    if(top<0){
        console.log("stack is empty");
        return false
    }
    else return stack_arr[top]
}

function isEmpty(){
    if (top<0) {
        console.log("stack is empty");
        return true
    }
    return false
}
function isFull(){
    if(top==length-1) {
        console.log("stack is full");
        return true
    }else{
        return false 
    }
}
push(10)
push(20)
push(30)
push(40)
push(50)
let topel=topElement()
console.log("top is ",topel);
push(60) 
isFull()
 
pop()
pop()
pop()
pop()
pop()
isEmpty()

function printStackElement(){
    for(let i=top;i>=0;i--){
        console.log(stack_arr[i]);
    }
}
printStackElement()
```
---
###  REVERSE A STRING USING STACK
```

class Stack {
    constructor (data){
        this.top=-1
        this.size=data
        this.arr=new Array(this.size)
    }

    push(data){
        
        if(this.top==this.size-1){
            console.log("stack overflow");
            this.top--
            return false
        }
        this.top++
        this.arr[this.top]=data
    }

    pop(){
        if(this.top<0){
            console.log("stack is empty");
            return false
        }
        let x=this.arr[this.top]
        this.top--
        return x
    }
}

function reverseStringStack(str){
    let length=str.length
    let stack_arr=new Stack(length)
    for(let i=0;i<length;i++){
        stack_arr.push(str[i])
    }

    let reverseStr="";
    for(let i=0;i<length;i++){
        let x=stack_arr.pop()
        reverseStr+=x
    }
    return reverseStr
}

let reverseString=reverseStringStack("TMKC")
console.log(reverseString);


```
---

### Next Greater Element for Every Element in Given Array O(n), O(n)

```

class Stack {
    constructor (data){
        this.top=-1
        this.size=data
        this.arr=new Array(this.size)
    }

    push(data){
        
        if(this.top==this.size-1){
            console.log("stack overflow");
            this.top--
            return false
        }
        this.top++
        this.arr[this.top]=data
    }

    pop(){
        if(this.top<0){
            console.log("stack is empty");
            return false
        }
        let x=this.arr[this.top]
        this.top--
        return x
    }

    peek(){
        return this.arr[this.top]
    }

    isEmpty(){
        if(this.top<0){
            return true
        }
        else{
            return false
        }
    }
}


function greaterElementForEveryElement(numbers){
    let length =numbers.length
    let new_stack=new Stack(length)

    new_stack.push(numbers[0])
    for(let i=1;i<length;i++){

        if(new_stack.isEmpty()){
            new_stack.push(numbers[i])
            continue;
        }

        while(!new_stack.isEmpty()&& new_stack.peek()<numbers[i]){
            let x=new_stack.pop()
            console.log(`${x}--->${numbers[i]}`);
        }
        new_stack.push(numbers[i])

    }
    while(!new_stack.isEmpty()){
        console.log(`${new_stack.pop()}--- -1`);
        
    }
}
greaterElementForEveryElement([23,11,4,19])

```
---
### Valid Parentheses — LeetCode 20

```
var isValid = function(s) {
    let stack = [];

    for (let ch of s) {
        // opening bracket → push
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } 
        // closing bracket
        else {
            if (stack.length === 0) return false;

            let top = stack.pop();

            if (
                (ch === ')' && top !== '(') ||
                (ch === '}' && top !== '{') ||
                (ch === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

```
---

# Queue in DSA (JavaScript)


## 1. What is a Queue?

A **Queue** is a linear data structure that follows a very simple rule:

👉 **First In, First Out (FIFO)**

This means the element that goes inside the queue **first**, comes out **first**.

Think of a real-life queue:

* People standing in a line at a ticket counter
* The person who comes first gets served first

That is exactly how a queue works.

---

## 2. Why Do We Need a Queue?

Queue is used when:

* Order matters
* Tasks must be processed one by one
* Fairness is required

Real-world examples:

* Printer jobs
* CPU task scheduling
* Call center systems
* Breadth First Search (BFS)

---

## 3. Basic Queue Operations

Every queue supports these basic operations:

1. **Enqueue** → Insert element at the rear
2. **Dequeue** → Remove element from the front
3. **Front / Peek** → See the first element
4. **isEmpty** → Check if queue is empty

---

## 4. Queue Implementation Using Array (JavaScript)

This is the most common and beginner-friendly way.

```js
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

👉 Note: `shift()` is easy but not optimal for very large queues.

---

## 5. Time & Space Complexity (Array Queue)

| Operation | Time Complexity     |
| --------- | ------------------- |
| Enqueue   | O(1)                |
| Dequeue   | O(n) (due to shift) |
| Front     | O(1)                |

Space Complexity: **O(n)**

---

## 6. Optimized Queue Using Index Pointers

To avoid costly `shift()`, we use front and rear pointers.

```js
class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(element) {
        this.items[this.rearIndex] = element;
        this.rearIndex++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    front() {
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.rearIndex === this.frontIndex;
    }
}
```

All operations are now **O(1)**.

---

## 7. Queue Implementation Using Linked List (IMPORTANT CONCEPT)

Queue can be implemented using a linked list.

Core idea:

* **Front = head**
* **Rear = tail**
* Insert at tail → Enqueue
* Remove from head → Dequeue

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        const node = new Node(data);
        if (!this.rear) {
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
    }

    dequeue() {
        if (!this.front) return null;
        const val = this.front.data;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return val;
    }
}
```

Time Complexity: **O(1)** for both enqueue and dequeue.

---

## 8. Circular Queue (Concept)

A **Circular Queue** connects the last position back to the first.

Used to:

* Reuse empty space
* Avoid memory waste

Common in:

* Operating systems
* Buffer management

---

## 9. Important Queue Algorithms (MUST KNOW)

---

### 9.1 Implement Stack Using Queue

```js
class StackUsingQueue {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        return this.q.shift();
    }
}
```

---

### 9.2 Queue Using Two Stacks

```js
class QueueUsingStacks {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(x) {
        this.s1.push(x);
    }

    dequeue() {
        if (!this.s2.length) {
            while (this.s1.length) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }
}
```

---

## 10. Deque (Double Ended Queue)

A **Deque** allows insertion and deletion from both ends.

Operations:

* insertFront
* insertRear
* deleteFront
* deleteRear

Used in:

* Sliding window problems
* Palindrome checking

---

## 11. Queue vs Stack

| Queue      | Stack        |
| ---------- | ------------ |
| FIFO       | LIFO         |
| Scheduling | Backtracking |
| BFS        | DFS          |

---

## 12. Common Beginner Mistakes

* Using shift() blindly
* Forgetting empty checks
* Confusing front and rear

---

## 13. Interview Gold Lines

> “Queue follows FIFO principle and is used where order and fairness are required.”

> “Using pointers or linked list makes queue operations O(1).”

---
## Important Points of stacks 
### enqueue | dequeue | isEmpty | peek | rear | isfull
```
class Queue {
    constructor(n){
        this.size=n
        this.queue=new Array(this.size)
        this.front=-1
        this.rear=-1
    }

    enqueue(data){ // TC-O(1), SC-O(1)
        if(this.rear==this.size-1){
            console.log("Cannot insert element queue is already full");
            return
        }
        if(this.front==-1){
            this.front=0
        }
        this.rear++
        this.queue[this.rear]=data
        return
    }

    dequeue(){  // TC-O(n), SC-O(1)
        if(this.isEmpty()){
            console.log("Queue is empty so you can not add any elements");
            return;
        }

        for(let i=this.front;i<=this.rear-1;i++){
            this.queue[i]=this.queue[i+1]
        }
        this.rear--
        return;
    }

    isEmpty(){ // TC-O(1), SC-O(1)
        if(this.rear==-1){
            return true;
        }
        return false;
    }

    peek(){ // TC-O(1), SC-O(1)
        if(this.isEmpty()){
            console.log("queue is empty");
            return;
        }
        return this.queue[this.front]
    }

    findRear(){ // TC-O(1), SC-O(1)
        if(this.isEmpty()){
            console.log("queue is empty");
            return;
        }
        return this.queue[this.rear]
    }

    isfull(){ // TC-O(1), SC-O(1)
        if(this.rear==this.size-1){
            console.log("Queue is full");
            return true;
        }
        return false
    }

    printElement(){ 
        if(this.rear==-1 ){
            console.log("queue is empty");
            return
        }
        for(let i=this.front;i<=this.rear;i++){
            console.log(this.queue[i]);
        }
    }
}


let newqueue= new Queue(5)
newqueue.enqueue(1)
newqueue.enqueue(2)
newqueue.enqueue(3)
newqueue.enqueue(4)
newqueue.enqueue(8)
newqueue.dequeue()
newqueue.dequeue()

let peek=newqueue.peek()
console.log("the peek value is ", peek);

let end=newqueue.findRear()
console.log("the last value is ", end);

newqueue.isfull()
newqueue.printElement()
```

---

###  Implement Stack Using Queues -O(n),O(n)

```

class Stack {
    constructor(){
        this.q1=[];
        this.q2=[];
    }

    push(data){
        this.q2.push(data)

        while(this.q1.length!=0){
            this.q2.push(this.q1[0])
            this.q1.shift()
        }
        this.q=this.q1
        this.q1=this.q2
        this.q2=this.q
    }

    pop(){
        const element= this.q1[0]
        this.q1.shift()
        return element
    }

    top(){
        return this.q1[0]
    }

    printElement(){
        for(let  i=0;i<this.q1.length;i++){
            console.log(this.q1[i]);
            
        }
    }
}

let newstack= new Stack()

newstack.push(2)
newstack.push(3)
newstack.push(4)
newstack.push(5)

let popEle=newstack.pop()
console.log("pop element ",popEle);

let topEle=newstack.top()
console.log("top element ",topEle);

```
---

###  Implement Stack Using 1 Queues -O(n),O(n)

```

class Stack {
    constructor() {
        this.q = []
    }

    push(x) {
        let length = this.q.length;
        this.q.push(x)
        for (let i = 0; i < length; i++) {
            this.q.push(this.q[i])
            this.q.shift()
        }

    }
    pop() {
        if (this.q.length == 0) {
            console.log("stack is empty");
            return;
        }

        let element = this.q[0]
        this.q.shift()
        return element;
    }

    top() {
        if (this.q.length == 0) {
            console.log("stack is empty");
            return;
        }
        return this.q[0];
    }
}

let newstack=new Stack()
newstack.push(1)
newstack.push(2)
newstack.push(3)
newstack.push(4)

let popele=newstack.pop()
console.log(popele);

let topEle=newstack.top()
console.log(topEle);


```
---
