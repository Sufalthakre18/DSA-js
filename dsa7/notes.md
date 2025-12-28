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