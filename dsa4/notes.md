# Stack — Complete DSA Guide (JavaScript)

---

## 1. What is a Stack? (DSA View)

A **stack** is a linear data structure that follows **LIFO** (Last In, First Out).

Operations:

* `push(x)` — put item on top
* `pop()` — remove top item
* `peek()` / `top()` — see top item without removing
* `isEmpty()` — check emptiness

Stacks are used for:

* Function call stacks (recursion)
* Backtracking / undo
* Expression evaluation
* DFS (iterative)

Complexities for array-backed stacks: all O(1) for push/pop/peek (amortized for dynamic arrays).

---

## 2. Implementing a Stack in JavaScript

## 2.1 Simple array-backed stack (recommended)

```js
class Stack {
  constructor() { this._ = []; }
  push(x) { this._.push(x); }
  pop() { return this._.pop(); }
  peek() { return this._.length ? this._[this._.length - 1] : undefined; }
  isEmpty() { return this._.length === 0; }
  size() { return this._.length; }
}
```

## 2.2 Linked-list backed stack (explicit nodes)

```js
class Node { constructor(val){ this.val=val; this.next=null } }
class StackLL {
  constructor(){ this.top = null; this._size = 0 }
  push(x){ const n = new Node(x); n.next = this.top; this.top = n; this._size++; }
  pop(){ if(!this.top) return undefined; const v = this.top.val; this.top = this.top.next; this._size--; return v; }
  peek(){ return this.top ? this.top.val : undefined }
  size(){ return this._size }
}
```

**When to use LL:** only if you need strict O(1) guaranteed without array resizing concerns. In JS use array stack for simplicity.

---

## 3. Core Stack Patterns (Interview Essentials)

## 3.1 Parentheses / Bracket Matching

Check well-formed parentheses using a stack of opening brackets.

```js
function isBalanced(s){
  const map = {')':'(', ']':'[', '}':'{'};
  const st = [];
  for(const ch of s){
    if(ch === '(' || ch === '[' || ch === '{') st.push(ch);
    else {
      if(st.pop() !== map[ch]) return false;
    }
  }
  return st.length === 0;
}
```

## 3.2 Evaluate Postfix (Reverse Polish Notation)

```js
function evalPostfix(tokens){
  const st = [];
  for(const t of tokens){
    if(!isOperator(t)) st.push(Number(t));
    else{
      const b = st.pop(); const a = st.pop();
      st.push(apply(a,b,t));
    }
  }
  return st.pop();
}
```

## 3.3 Infix → Postfix (Shunting-yard)

* Convert using operator precedence and a stack for operators.
* Important for parsing expressions in compilers/interviews.

## 3.4 Backtracking / Undo

* Keep states on stack to rollback.

## 3.5 DFS iterative (use stack instead of recursion)

```js
function dfsIterative(adj, start){
  const st = [start]; const seen = new Set([start]);
  while(st.length){
    const node = st.pop();
    // process node
    for(const nei of adj[node]) if(!seen.has(nei)){ seen.add(nei); st.push(nei); }
  }
}
```

---

## 4. Monotonic Stack (Advanced & Very Important)

A **monotonic stack** keeps elements in increasing or decreasing order. Widely used for "next greater/smaller" problems, histogram largest rectangle, sliding window maxima.

## 4.1 Next Greater Element (NGE)

```js
function nextGreater(arr){
  const st = []; const res = new Array(arr.length).fill(-1);
  for(let i=0;i<arr.length;i++){
    while(st.length && arr[i] > arr[st[st.length-1]]){
      res[st.pop()] = arr[i];
    }
    st.push(i);
  }
  return res;
}
```

## 4.2 Largest Rectangle in Histogram (classic)

* Use monotonic increasing stack to find nearest smaller left/right for each bar.
* O(n) time.

```js
function largestRectangle(heights){
  const st = []; let maxA=0; heights.push(0);
  for(let i=0;i<heights.length;i++){
    while(st.length && heights[i] < heights[st[st.length-1]]){
      const h = heights[st.pop()];
      const left = st.length ? st[st.length-1] : -1;
      const width = i - left - 1;
      maxA = Math.max(maxA, h * width);
    }
    st.push(i);
  }
  return maxA;
}
```

**Monotonic stack is a must-know for medium-level interview problems.**

---

## 5. Stack + Recursion Relationship

* Recursion uses an implicit call stack. Every recursive solution can be converted to iterative using an explicit stack.
* Convert recursive DFS or tree-traversal to iterative stack-based traversal.
* Use stack when recursion depth may cause stack overflow.

Example: iterative inorder traversal (binary tree)

```js
function inorder(root){
  const st=[]; const res=[]; let cur = root;
  while(cur || st.length){
    while(cur){ st.push(cur); cur = cur.left }
    cur = st.pop(); res.push(cur.val); cur = cur.right;
  }
  return res;
}
```

---

## 6. Expression Evaluation & Parsing (Interview Classic)

* Use two stacks: one for values, one for operators (Dijkstra's two-stack algorithm) or shunting-yard for infix→postfix.
* Handle precedence and associativity carefully.

Short example: evaluate infix with +,-,*,/ and parentheses (sketch):

1. Tokenize input
2. For each token: numbers push to value stack
3. Operators: while top operator has >= precedence, apply it
4. Push current operator
5. At ')', apply until '('

(This is often asked conceptually; full implementation is long but doable.)

---

## 7. Popular Stack Problems (Must-Practice)

* Valid Parentheses (easy)
* Evaluate Reverse Polish Notation (medium)
* Min Stack (support O(1) min)
* Next Greater Element (medium)
* Largest Rectangle in Histogram (hard)
* Decode String (e.g., "3[a]2[bc]")
* Sliding Window Maximum (deque/monotonic)

## 7.1 Min Stack (support getMin in O(1))

```js
class MinStack{
  constructor(){ this.st=[]; this.minSt=[] }
  push(x){ this.st.push(x); if(!this.minSt.length || x <= this.minSt[this.minSt.length-1]) this.minSt.push(x); }
  pop(){ const v=this.st.pop(); if(v===this.minSt[this.minSt.length-1]) this.minSt.pop(); }
  top(){ return this.st[this.st.length-1]; }
  getMin(){ return this.minSt[this.minSt.length-1]; }
}
```

---

## 8. Stack & Sorting Algorithms (Relation)

* **Recursive QuickSort** uses recursion; you can implement **iterative QuickSort** using an explicit stack to simulate recursion (push ranges).
* **Sorting using stacks**: not common or efficient, but pivot-based iterative sorts use stack. Example: iterative quicksort uses stack of subarray bounds.

### Iterative QuickSort sketch (use stack to store [low,high])

```js
function quickSortIter(arr){
  const stack = [[0, arr.length-1]];
  while(stack.length){
    const [low, high] = stack.pop();
    if(low >= high) continue;
    const p = partition(arr, low, high);
    stack.push([low, p-1]);
    stack.push([p+1, high]);
  }
}
```

* **Monotonic stacks** are used in problems that might look like sorting because they reason about relative order, but they are distinct from comparison sorts.

---

## 9. Complexity Summary

| Operation                 |           Time |      Space |
| ------------------------- | -------------: | ---------: |
| push / pop / peek (array) | O(1) amortized | O(1) extra |
| Parentheses matching      |           O(n) |       O(n) |
| Next greater (monotonic)  |           O(n) |       O(n) |
| Largest rectangle         |           O(n) |       O(n) |

---

# Recursion in DSA with JavaScript (Basics → Deep)

---

## 1. What is Recursion?

**Recursion** is a technique where a **function calls itself** to solve a problem.

Instead of solving the whole problem at once, we:

* Solve a **small part** of the problem
* Trust recursion to solve the rest

👉 Think of recursion as **"solve → reduce → repeat"**

---

## 2. Real-Life Example (Very Important)

Imagine you are standing in a line of people and want to know your position:

* You ask the person in front of you
* That person asks the next one
* This continues until the first person

This chain of asking is **recursion**.

---

## 3. Two Mandatory Parts of Recursion

Every recursive function MUST have:

### 1️⃣ Base Case

* Condition where recursion **stops**
* Prevents infinite calls

### 2️⃣ Recursive Case

* Function calls itself
* Problem size becomes **smaller**

❌ Without base case → **Stack Overflow Error**

---

## 4. Basic Structure of Recursion

```js
function recurse(n) {
    if (n === 0) return; // base case
    recurse(n - 1);     // recursive call
}
```

---

## 5. First Classic Example – Print Numbers

### Print numbers from n to 1

```js
function print(n) {
    if (n === 0) return;
    console.log(n);
    print(n - 1);
}
```

### Print numbers from 1 to n

```js
function print(n) {
    if (n === 0) return;
    print(n - 1);
    console.log(n);
}
```

👉 Difference is **before vs after recursive call**

---

## 6. Understanding Call Stack (VERY IMPORTANT)

Each recursive call is stored in the **call stack**.

Example: `print(3)`

Call stack:

```
print(3)
print(2)
print(1)
print(0)  ← base case
```

Then functions return **one by one**.

---

## 7. Factorial Using Recursion

### Mathematical Idea

```
5! = 5 × 4 × 3 × 2 × 1
```

### Recursive Code

```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```

---

## 8. Fibonacci Using Recursion

```js
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

⚠️ This solution is **slow** (exponential time)

Used only to **understand recursion**, not for performance.

---

## 9. Recursion on Arrays

### Sum of Array Elements

```js
function arraySum(arr, i = 0) {
    if (i === arr.length) return 0;
    return arr[i] + arraySum(arr, i + 1);
}
```

---

### Check if Array is Sorted

```js
function isSorted(arr, i = 0) {
    if (i === arr.length - 1) return true;
    if (arr[i] > arr[i + 1]) return false;
    return isSorted(arr, i + 1);
}
```

---

## 10. Recursion on Strings

### Reverse a String

```js
function reverse(str) {
    if (str.length === 0) return "";
    return reverse(str.slice(1)) + str[0];
}
```

---

## 11. Recursion vs Loop (INTERVIEW QUESTION)

| Feature          | Recursion       | Loop        |
| ---------------- | --------------- | ----------- |
| Code readability | High            | Medium      |
| Memory           | Uses stack      | Constant    |
| Risk             | Stack overflow  | No overflow |
| Speed            | Slightly slower | Faster      |

👉 Recursion = clarity
👉 Loop = efficiency

---

## 12. Tail Recursion (Advanced Concept)

A recursion where:

* Recursive call is the **last statement**

```js
function fact(n, ans = 1) {
    if (n === 0) return ans;
    return fact(n - 1, ans * n);
}
```

⚠️ JavaScript does NOT fully optimize tail recursion.

---

## 13. Common Recursion Mistakes (VERY IMPORTANT)

❌ Forgetting base case
❌ Base case never reached
❌ Problem size not reducing
❌ Too many recursive calls

---

## 14. Recursion in DSA (Where It Is Used)

* Tree traversal
* Graph traversal (DFS)
* Backtracking
* Divide & Conquer
* Sorting algorithms
* Dynamic Programming (base)

---

## 15. Important Recursion Patterns (Interview Focus)

### 1️⃣ Linear Recursion

* One recursive call

### 2️⃣ Binary Recursion

* Two recursive calls (Fibonacci)

### 3️⃣ Multiple Recursion

* More than two calls

### 4️⃣ Divide & Conquer

* Break problem into halves

---

## 16. Time & Space Complexity in Recursion

* Time depends on **number of calls**
* Space depends on **recursion depth**

Example:

```js
factorial(n) → O(n) time, O(n) space
```

---

## 17. How to Think Recursively (GOLD RULE)

1. Write base case first
2. Assume recursion works
3. Reduce problem size
4. Combine results

👉 **Never try to track all calls at once**

---
# Smart Math Problems in DSA (JavaScript)

## 1. What are Smart Math Problems in DSA?

Smart math problems are **not heavy mathematics**.
They are problems where:

* Brute force works but is slow ❌
* A **smart observation** gives fast solution ✅

They test:

* Logical thinking
* Optimization skills
* Loop + condition understanding
* Time complexity awareness

---

## 2. Even or Odd (Basic but Important)

### Logic

A number is even if divisible by 2.

```js
function isEven(n) {
  return n % 2 === 0;
}
```

Time: **O(1)** | Space: **O(1)**

Interview Tip:

> Use modulo, not division.

---

## 3. Prime Number Check (Very Important)

### Brute Force (Bad)

Check till n-1 → **O(n)**

### Smart Logic

Check till **√n** only.

```js
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

Time: **O(√n)**

Key Idea:

> If n has a factor, one factor must be ≤ √n.

---

## 4. Count Digits of a Number

### Smart Way

```js
function countDigits(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
```

Time: **O(log₁₀ n)**

---

## 5. Reverse a Number

```js
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }
  return rev;
}
```

Used in:

* Palindrome
* Armstrong
* Digit problems

---

## 6. Palindrome Number

```js
function isPalindrome(n) {
  return n === reverseNumber(n);
}
```

Key Idea:

> Reverse and compare.

---

## 7. Armstrong Number

### Logic

Each digit raised to power of digit count.

```js
function isArmstrong(n) {
  let sum = 0;
  let temp = n;
  let digits = n.toString().length;

  while (temp > 0) {
    let d = temp % 10;
    sum += d ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === n;
}
```

---

## 8. Factorial (Iterative vs Recursive)

### Iterative (Best)

```js
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}
```

Time: **O(n)** | Space: **O(1)**

---

## 9. GCD (Most Important Math Problem)

### Euclidean Algorithm (SMART)

```js
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
```

Time: **O(log n)**

Key Idea:

> gcd(a, b) = gcd(b, a % b)

---

## 10. LCM Using GCD

```js
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

---

## 11. Power Calculation (Fast Power)

### Brute Force

O(n)

### Smart (Binary Exponentiation)

```js
function power(x, n) {
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return result;
}
```

Time: **O(log n)**

---

## 12. Sum of Digits

```js
function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
```

---

## 13. Count Trailing Zeros in Factorial

### Smart Idea

Count number of **5s**.

```js
function trailingZeros(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
```

Interview Favorite ⭐

---

## 14. Check Power of Two

```js
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
```

Bit trick 💡

---

## 15. Sieve of Eratosthenes (Advanced Awareness)

Find all primes till n.

```js
function sieve(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}
```

---

## 16. Common Interview Math Tricks

* Use **√n** instead of n
* Reduce problem using **modulo**
* Convert to **digits** using % and /
* Use **log thinking**
* Avoid nested loops

---

## 17. Brute Force vs Smart Approach

| Approach | Time            | Idea             |
| -------- | --------------- | ---------------- |
| Brute    | O(n²)           | Check everything |
| Smart    | O(n) / O(log n) | Observation      |

---

## 18. Final Interview Advice

> “Math problems in DSA are not about formulas, they are about patterns.”

✔ Always start with brute force
✔ Optimize using math
✔ Explain logic clearly

---

# Merge Sort, Quick Sort & Cyclic Sort

---

## 2. Merge Sort (Divide & Conquer Algorithm)

### 2.1 Core Idea (Very Simple)

1. Divide the array into two halves
2. Keep dividing until size becomes 1
3. Merge sorted halves back

This follows **Divide → Solve → Combine**.

---

### 2.2 Merge Sort JavaScript Code

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

---

### 2.3 Time & Space Complexity

* Time (Best / Avg / Worst): **O(n log n)**
* Space: **O(n)** (extra array)

---
---

### 2.5 When to Use Merge Sort

* Linked lists
* Stable sorting required
* Guaranteed performance needed

---

## 3. Quick Sort (Fastest Average Case Sort)

### 3.1 Core Idea

1. Choose a **pivot**
2. Put smaller elements on left
3. Larger elements on right
4. Recursively sort subarrays

---

### 3.2 Quick Sort JavaScript Code (Lomuto)

```js
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
```

---

### 3.3 Time & Space Complexity

* Best / Average: **O(n log n)**
* Worst: **O(n²)** (bad pivot)
* Space: **O(log n)** (recursion stack)

---

### 3.6 When to Use Quick Sort

* Large arrays
* Memory efficiency matters
* Average case speed needed

---

## 4. Cyclic Sort (Linear Time Special Algorithm)

### 4.1 Core Idea

If numbers are in range **1 → n**, each number has a correct index.

Swap numbers until each number reaches its correct position.

---

### 4.2 Cyclic Sort JavaScript Code

```js
function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correctIndex = arr[i] - 1;
    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}
```

---

### 4.3 Time & Space Complexity

* Time: **O(n)**
* Space: **O(1)**

---

### 4.4 Where Cyclic Sort is Used

* Find missing number
* Find duplicates
* First missing positive
* Set mismatch problems

---

## 5. Comparison Table

| Algorithm   | Time       | Space    | Stable | In‑Place |
| ----------- | ---------- | -------- | ------ | -------- |
| Merge Sort  | O(n log n) | O(n)     | ✅      | ❌        |
| Quick Sort  | O(n log n) | O(log n) | ❌      | ✅        |
| Cyclic Sort | O(n)       | O(1)     | ❌      | ✅        |

---
