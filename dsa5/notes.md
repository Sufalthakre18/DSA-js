# Linked List in DSA (JavaScript)

## 1. What is a Linked List?

A **Linked List** is a linear data structure where elements are **not stored in contiguous memory** like arrays. Instead, each element (called a **node**) contains:

1. **Data** – the value stored
2. **Next** – a reference (pointer) to the next node

Because nodes are connected using references, memory allocation is dynamic.

---

## 2. Why Linked List When We Have Arrays?

Arrays have limitations:

* Fixed size (in many languages)
* Insertion/deletion is costly (shifting required)

Linked Lists solve these problems:

* Dynamic size
* Easy insertion and deletion

Trade-off: No random access (no indexing like arr[3]).

---

## 3. Structure of a Node (JavaScript)

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

Each node knows its value and the address of the next node.

---

## 4. Types of Linked Lists

### 4.1 Singly Linked List

Each node points to the next node.

```
10 → 20 → 30 → null
```

Most commonly used.

---

### 4.2 Doubly Linked List

Each node has two pointers:

* next
* prev

```
null ← 10 ⇄ 20 ⇄ 30 → null
```

Used when backward traversal is needed.

---

### 4.3 Circular Linked List

Last node points back to the first node.

```
10 → 20 → 30 ↺
```

Used in round-robin scheduling.

---

## 5. Linked List Implementation (Singly)

```js
class LinkedList {
    constructor() {
        this.head = null;
    }
}
```

`head` points to the first node.

---

## 6. Basic Operations

### 6.1 Insert at Beginning

```js
insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
}
```

Time Complexity: **O(1)**

---

### 6.2 Insert at End

```js
insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
}
```

Time Complexity: **O(n)**

---

### 6.3 Delete a Node

```js
delete(value) {
    if (!this.head) return;
    if (this.head.data === value) {
        this.head = this.head.next;
        return;
    }
    let curr = this.head;
    while (curr.next && curr.next.data !== value) {
        curr = curr.next;
    }
    if (curr.next) curr.next = curr.next.next;
}
```

---

### 6.4 Traversal

```js
print() {
    let curr = this.head;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}
```

---

## 7. Time & Space Complexity

| Operation      | Time |
| -------------- | ---- |
| Insert at head | O(1) |
| Insert at tail | O(n) |
| Delete         | O(n) |
| Search         | O(n) |

Space Complexity: **O(n)**

---

## 8. Important Interview Algorithms (MUST KNOW)

---

### 8.1 Reverse a Linked List

**Most asked question**

```js
reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
}
```

Time: **O(n)** | Space: **O(1)**

---

### 8.2 Find Middle of Linked List

Using **slow and fast pointers**

```js
findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}
```

---

### 8.3 Detect Cycle (Floyd’s Cycle Detection)

```js
hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

---

### 8.4 Remove Nth Node from End

```js
removeNthFromEnd(n) {
    let dummy = new Node(0);
    dummy.next = this.head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    this.head = dummy.next;
}
```

---

### 8.5 Merge Two Sorted Linked Lists

```js
function mergeLists(l1, l2) {
    let dummy = new Node(0);
    let curr = dummy;
    while (l1 && l2) {
        if (l1.data < l2.data) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}
```

---

## 9. Advanced Concepts

### 9.1 Dummy Node

Used to simplify edge cases (head deletion).

---

### 9.2 Two Pointer Technique

Used in:

* Middle element
* Cycle detection
* Nth from end

---

### 9.3 Linked List vs Array

| Feature       | Array      | Linked List    |
| ------------- | ---------- | -------------- |
| Memory        | Contiguous | Non-contiguous |
| Access        | O(1)       | O(n)           |
| Insert/Delete | Costly     | Efficient      |

---

## 10. Common Mistakes

* Forgetting null checks
* Losing head reference
* Infinite loops in cycles
* Not updating pointers properly

---

## 11. Where Linked Lists Are Used

* Implementing stacks & queues
* Undo/redo operations
* Music playlists
* Memory management

---

## 12. Interview Gold Lines

> “Linked Lists are useful when frequent insertion and deletion is required and random access is not needed.”

> “Most linked list problems are solved using pointer manipulation.”

---
## my notes and imp points of linked list

### TRAVERSE THE LINKED LIST


```

class Node { // creating a node
    constructor(data){
        this.data=data
        this.next=null
    }
}

let head =new Node(10) // creating each node with data and next null
let first = new Node(30)
let second = new Node(60)

head.next=first // head points to first 
first.next=second // first points to second

traverseLinkedList(head) // take a first node 
function traverseLinkedList(head){
    let current =head; 
    while(current!=null){ 
        console.log(current.data);
        current=current.next // here current points to next and which is not null
    }
}
```

---

### SEARCHING ELEMENT IN LINKED LIST O(N)

```
class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}
let head= new Node(40)
let first= new Node(67)
let second= new Node(90)
let third= new Node(2)
let fourth= new Node(30)

head.next=first
first.next=second
second.next=third
third.next=fourth

function searchInLinkedList(head,key){
    let current =head
    while(current!=null){
        if(current.data==key) return true
        current= current.next
    }
    return false
}

let result=searchInLinkedList(head,6)
result==true? console.log("key founded in linked list"): console.log("key not founded");
```

---

### INSERTION AT THE BEGINNING OF LL AND SPECIFIC POINT - O(1) time complexity =Sc

```

class Node {
    constructor(data) {
        this.data=data
        this.next=null
    }
}

head =new Node(10)
first =new Node(20)
second =new Node(30)

head.next=first
first.next=second

function InsertAtBegin(key){
    let newNode =new Node(key)
    newNode.next=head
    head=newNode
}

InsertAtBegin(25)
InsertAtBegin(35)
InsertAtBegin(45)

function InsertAtSpecificPoint(prevNode,data){
    let newNode=new Node(data)
    newNode.next=prevNode.next
    prevNode.next=newNode
}

InsertAtSpecificPoint(first,89)
InsertAtSpecificPoint(second,99)

function InsertAtEnd(data){  // time complexity O(n), space complexity O(1)
    let newNode=new Node(data)

    // to find end node we need to traverse LL
    let currentNode= head
    while(currentNode.next!=null){
        currentNode=currentNode.next
    }
    currentNode.next =newNode
}

InsertAtEnd(69)
InsertAtEnd(79)

function printLL(head){
    let current= head
    while(current!=null){
        console.log(current.data);
        current=current.next
    }
}
printLL(head)
```
---

### deletion node at the beginning of list O(1)
### deletion node at the end of list O(n)

```

class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}
let head= new Node(40)
let first= new Node(67)
let second= new Node(90)
let third= new Node(2)
let fourth= new Node(30)

head.next=first
first.next=second
second.next=third
third.next=fourth

function deleteNodeFromBeginning(){  // time complexity=O(1)=SC
    if(head==null){
        console.log("List is empty");
        return;
    }
    let temp= head
    head=head.next
    temp.next=null
}
deleteNodeFromBeginning()

function deleteNodeFromEnd(){ // time complexity:-Best -O(1),worst-O(n),space complexity-O(1)
     if (head === null) {
        console.log("List is empty");
        return
    }
     if(head.next===null){
        head=null
        return
     }
    let current= head
    while(current.next.next!==null){
        current=current.next
    }
    let endnode=current.next
    current.next=null
    endnode=null
}
deleteNodeFromEnd()
deleteNodeFromEnd()

function printLL(head){
    let current= head
    while(current!=null){
        console.log(current.data);
        current=current.next
    }
}
printLL(head)

```

---

## create and push node on DOUBLY LINKED LIST

```


class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

var head=null;

function pushNode(data){
    let newNode=new Node(data)
    if(head==null){
        head=newNode
        return
    }
    newNode.next=head
    head.prev=newNode
    head=newNode
}
pushNode(2)
pushNode(4)
pushNode(6)

function printDLL(){
    let currentNode=head;
    while(currentNode!==null){
        console.log(currentNode.data);
        currentNode=currentNode.next
    }
}
printDLL()
```

---

### find middle node from linked list O(n)

```

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
let head=null
function pushLL(data){
    let newNode=new Node(data)
    newNode.next=head
    head=newNode
}

for(let i=1;i<=5;i++){
    pushLL(5*i)
}
// taking middle node from linked list 
function middleNode(){
    let counter=1
    let mid=head
    while(head.next!=null){
        head=head.next
        counter++;
        if(counter%2==0){
            mid=mid.next
        }
    }
    return mid
}
let middle= middleNode()
console.log(middle.data);

```
---
### Reverse linked list 

```

function reverseLL(head){
    let current=head;
    let prevNode=null;
    let nextNode=null;

    while(current!=null){
        nextNode=current.next
        current.next=prevNode
        prevNode=current
        current=nextNode
    }
    return prevNode
    
}
let list=reverseLL(head)

function printLL(list){
    let current=list;
    while(current!=null){
        console.log(current.data);
        current=current.next
    }
}
printLL(list)
```
### 141. Linked List Cycle

```
var hasCycle = function(head) {
    let slow=head
    let fast=head
    while(fast!=null&& fast.next!=null){
        slow=slow.next
        fast=fast.next.next
        if(slow==fast){
            return true 
        }
    }
    return false
};
```
---
### 142. Linked List Cycle II

```
var detectCycle = function(head) {
    let slow=head
    let fast=head
    let pos=0
    while(fast!=null&& fast.next!=null){
        pos++
        slow=slow.next
        fast=fast.next.next
        if(slow==fast){
            let ptr1 = head;
            let ptr2 = slow;

            while (ptr1 !== ptr2) {
                ptr1 = ptr1.next;
                ptr2 = ptr2.next;
            }
            return ptr1;
        }
    }
    return null
    
};
```

### 21. Merge Two Sorted Lists

```

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
     if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    return dummy.next
};
```
---
### LeetCode 19 – Remove Nth Node From End,

```
var removeNthFromEnd = function(head, n) {
    let current = head;
    let len = 0;

    // Step 1: Find length
    while (current !== null) {
        len++;
        current = current.next;
    }

    // Step 2: If removing head
    if (n === len) {
        return head.next;
    }

    // Step 3: Find node before target
    current = head;
    for (let i = 1; i < len - n; i++) {
        current = current.next;
    }

    // Step 4: Remove node
    current.next = current.next.next;

    return head;
};

```
---
### Delete Node in a Linked List LeetCode 237

```
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

```
---
### Palindrome Linked List LeetCode 234
```
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    while (slow !== null) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};

```
---
### Remove Duplicates from Sorted Lis LeetCode 83
```
var deleteDuplicates = function(head) {
    let curr = head;

    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

```
---
### Intersection of Two Linked Lists LeetCode 160
```
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};

```
-----