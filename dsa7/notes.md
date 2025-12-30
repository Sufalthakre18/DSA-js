# Trees in DSA (JavaScript) — Complete World‑Class Notes

## 1. What is a Tree?

A **Tree** is a **non‑linear data structure** used to represent **hierarchical data**.

Unlike arrays, stacks, or queues (which are linear), a tree branches out.

### Real‑Life Examples

* Family tree
* Folder structure in a computer
* Organization hierarchy
* HTML DOM structure

---

## 2. Basic Terminology (VERY IMPORTANT)

Let’s clear the words first — interviews LOVE these.

* **Node** → Each element in a tree
* **Root** → Topmost node of the tree
* **Parent** → Node that has children
* **Child** → Node coming from a parent
* **Leaf** → Node with no children
* **Edge** → Connection between nodes
* **Height** → Max number of edges from root to deepest leaf
* **Depth** → Distance from root to a node
* **Level** → Depth + 1

---

## 3. Why Do We Use Trees?

Trees are used when:

* Data has hierarchy
* Fast searching is required
* Ordered structure is needed

Used in:

* Databases
* File systems
* Search engines
* Compilers

---

## 4. Types of Trees (Big Picture)

There are many types of trees, but in DSA we mainly focus on:

1. Binary Tree
2. Binary Search Tree (BST)
3. Heap
4. Balanced Trees (AVL, Red‑Black)

👉 In interviews, **Binary Tree + BST** are MOST important.

---

## 5. Binary Tree

### What is a Binary Tree?

A tree where **each node has at most 2 children**:

* Left child
* Right child

No ordering rule is required.

### Structure

```
      10
     /  \
    5    20
```

---

## 6. Binary Tree Node in JavaScript

```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

---

## 7. Tree Traversals (EXTREMELY IMPORTANT)

Traversal means **visiting every node exactly once**.

There are **2 main categories**:

1. Depth First Search (DFS)
2. Breadth First Search (BFS)

---

## 8. DFS Traversals (Recursive Thinking)

### 1. Inorder (Left → Root → Right)

```js
function inorder(root) {
    if (root == null) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
```

Used in:

* BST (gives sorted order)

---

### 2. Preorder (Root → Left → Right)

```js
function preorder(root) {
    if (root == null) return;
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
```

Used in:

* Copying tree
* Expression trees

---

### 3. Postorder (Left → Right → Root)

```js
function postorder(root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}
```

Used in:

* Deleting tree
* Calculating height

---

## 9. BFS / Level Order Traversal (Queue Based)

Visits nodes **level by level**.

```js
function levelOrder(root) {
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```

---

## 10. Binary Search Tree (BST)

### What is BST?

A Binary Tree with **ordering rules**:

* Left subtree → smaller values
* Right subtree → larger values

This property makes searching FAST.

---

## 11. BST Insertion

```js
function insert(root, value) {
    if (root == null) return new Node(value);

    if (value < root.value)
        root.left = insert(root.left, value);
    else
        root.right = insert(root.right, value);

    return root;
}
```

---

## 12. Searching in BST

```js
function search(root, target) {
    if (root == null) return false;

    if (root.value === target) return true;

    if (target < root.value)
        return search(root.left, target);
    else
        return search(root.right, target);
}
```

Time Complexity:

* Average: **O(log n)**
* Worst (skewed tree): **O(n)**

---

## 13. Important Tree Problems (Interview MUST)

* Height of tree
* Count nodes
* Count leaf nodes
* Check identical trees
* Mirror of tree
* Diameter of tree
* Lowest Common Ancestor (LCA)

---

## 14. Height of Binary Tree

```js
function height(root) {
    if (root == null) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}
```

---

## 15. Balanced vs Skewed Tree

* **Balanced Tree** → Height ≈ log n
* **Skewed Tree** → Height ≈ n

Balanced trees are FAST.
Skewed trees behave like linked lists.

---

## 16. Time Complexity Summary

| Operation | Binary Tree | BST (Avg) | BST (Worst) |
| --------- | ----------- | --------- | ----------- |
| Search    | O(n)        | O(log n)  | O(n)        |
| Insert    | O(n)        | O(log n)  | O(n)        |
| Traversal | O(n)        | O(n)      | O(n)        |

---

## 17. Tree vs Other Data Structures

* Array → Simple, fast access, no hierarchy
* Linked List → Dynamic, no hierarchy
* Tree → Hierarchy + fast search

---

## 18. Interview Tips (GOLD)

* Always clarify: **Binary Tree or BST?**
* Recursion is your best friend
* Draw tree before coding
* Traversals are CORE

---

## 19. Final Takeaway

✔ Trees are everywhere
✔ Traversals are the backbone
✔ BST optimizes searching
✔ Recursion mindset is key

---


## important points of Binary Tree

### types of Binary Tree

- Full Binary Tree :- each node 0 or 2 children
- Complete Binary Tree :- all the levels filled exept the last level(filled in left hand side) if left then right will be
- perfect binary tree:- all levels completely filled
- Balanced Binary Tree:- if n nodes then height of Binary Tree Log2(n)
- degenerate Binary Treee:- skewed tree

---

### INSERTING A NODE IN BINARY SEARCH TREE :- TC- best and average O(h)-O(log(n)), worst case O(n)


```

class TreeNode {
    constructor(data) {
        this.data=data
        this.left=null
        this.right=null
    }
}

let root= null

function insert(data){
    root=insertRec(root,data)
}

function insertRec(root,data){
    if(root==null){
        root=new TreeNode(data)
        return root
    }

    if(data<root.data){
        root.left=insertRec(root.left,data)
    }else if(data>root.data){
        root.right=insertRec(root.right,data)
    }

    return root;
}

function searchNode(root,key){
    if(root==null || root.data==key){
        return root;
    }

    if(key<root.data){
        return searchNode(root.left,key)
    }else{
        return searchNode(root.right,key)
    }
}

insert(44)
insert(50)
insert(40)
insert(55)
insert(60)
insert(58)
let result =searchNode(root,55)
if(result==null)console.log("Node not found") 
else console.log("Node found",result.data);



function inorder(root){
    if(root===null){
        return;
    }

    inorder(root.left)
    console.log(root.data);
    inorder(root.right)
}

inorder(root)
```
---


# Hashing in DSA (JavaScript)

## 1. What is Hashing?

Hashing is a technique to **store and retrieve data very fast** using a special function called a **hash function**.

In simple words:

> Hashing allows us to find data in **constant time O(1)** instead of searching one by one.

Example:

* Searching a number in an array → O(n)
* Searching using hashing → O(1)

---

## 2. Real-Life Example

Think of a **dictionary** 📖:

* You don’t read the whole book to find a word
* You directly jump to the page

That jumping logic is **hashing**.

---

## 3. Hash Table (Core Concept)

A **Hash Table** is a data structure that stores data in **key-value pairs**.

In JavaScript, hashing is implemented using:

* `Object`
* `Map`
* `Set`

---

## 4. Hash Function

A **hash function** converts a key into an **index**.

Example:

```js
index = key % size
```

Good hash function properties:

* Fast
* Uniform distribution
* Same key → same index

---

## 5. Hashing Using Object (Basic)

```js
let freq = {};
let arr = [1, 2, 2, 3, 1];

for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq); // {1:2, 2:2, 3:1}
```

Used for:

* Frequency count
* Duplicate detection

---

## 6. Hashing Using Map (Recommended)

`Map` is better than object because:

* Any type of key
* Maintains insertion order

```js
let map = new Map();

map.set(1, 2);
map.set(2, 3);

console.log(map.get(1)); // 2
```

---

## 7. Hashing Using Set

`Set` stores **unique values only**.

```js
let set = new Set([1, 2, 2, 3]);
console.log(set); // {1,2,3}
```

Used for:

* Removing duplicates
* Fast existence check

---

## 8. Most Important Hashing Problems

### 1. Frequency Count

```js
let s = "aabbbc";
let map = new Map();

for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
}
```

---

### 2. Check Duplicates

```js
let arr = [1,2,3,4,1];
let set = new Set();

for (let x of arr) {
    if (set.has(x)) {
        console.log("Duplicate found");
        break;
    }
    set.add(x);
}
```

---

### 3. Two Sum (Classic)

```js
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(nums[i], i);
    }
}
```

---

## 9. Collision (Important Theory)

When two keys map to the **same index**, collision occurs.

### Collision Handling Methods:

1. **Chaining** (Linked List)
2. **Open Addressing**

   * Linear probing
   * Quadratic probing

JavaScript handles this internally.

---

## 10. Time & Space Complexity

| Operation | Avg Time | Worst Time |
| --------- | -------- | ---------- |
| Insert    | O(1)     | O(n)       |
| Search    | O(1)     | O(n)       |
| Delete    | O(1)     | O(n)       |

Worst case happens when **too many collisions**.

---

## 11. When to Use Hashing

Use hashing when:

* Fast lookup needed
* Checking existence
* Counting frequency
* Removing duplicates

Do NOT use when:

* Order matters strictly
* Range queries required

---

## 12. Hashing vs Sorting

| Feature | Hashing | Sorting  |
| ------- | ------- | -------- |
| Lookup  | O(1)    | O(log n) |
| Order   | ❌ No    | ✅ Yes    |
| Space   | Extra   | Less     |



---

## 14. Common Interview Problems Using Hashing (WITH CODE)

Below are **must-know hashing problems** with **clean JavaScript code**. These are asked again and again in interviews.

---

### 1. Two Sum (MOST IMPORTANT)

Problem: Find indices of two numbers whose sum equals target.

```js
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];

        if (map.has(need)) {
            return [map.get(need), i];
        }
        map.set(nums[i], i);
    }
}
```

Time: **O(n)**
Space: **O(n)**

---

### 2. Subarray with Given Sum

Problem: Check if a subarray with given sum exists.

```js
function hasSubarraySum(arr, target) {
    let set = new Set();
    let sum = 0;

    for (let num of arr) {
        sum += num;
        if (sum === target || set.has(sum - target)) {
            return true;
        }
        set.add(sum);
    }
    return false;
}
```

Key Idea: **Prefix sum + hashing**

---

### 3. Longest Consecutive Sequence

Problem: Find length of longest consecutive elements sequence.

```js
function longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
```

Time: **O(n)**

---

### 4. First Non-Repeating Character

Problem: Find first character that appears only once.

```js
function firstNonRepeatingChar(s) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of s) {
        if (map.get(ch) === 1) return ch;
    }
    return -1;
}
```

---

### 5. Majority Element (Boyer–Moore + Hashing Idea)

Problem: Find element appearing more than n/2 times.

```js
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
```

Time: **O(n)**
Space: **O(1)**

---

### 6. leetcode 560. Subarray Sum Equals K

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map= new Map()
    let sum=0, count=0
    map.set(sum,1)
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(map.has(sum-k)) count+=map.get(sum-k)
        map.set(sum,(map.get(sum)||0)+1)
    }
    return count

};
```
---
### 7. longestSubarray with sum k

```

function longestSubarray(arr, k) {
    let map = new Map();
    let longestLength = 0;
    let sum = 0;
    map.set(sum, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - k)) {
            longestLength = Math.max(longestLength, i - map.get(sum - k));
        }
        if (!map.has(sum)) map.set(sum, i);
    }
    return longestLength;
}

let result=longestSubarray([19,5,2,7,1,-10],15)
console.log(result);


```
---

### 8. 