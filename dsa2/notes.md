# Arrays — Complete DSA Guide (JavaScript)


## 1. What is an Array? (DSA Perspective)

An array is a **linear data structure** that stores elements in **contiguous memory locations** and allows **index‑based access**.

### Key Properties

* Stores same type of data (conceptually)
* Fixed order
* Zero‑based indexing
* Fast access: `O(1)`

```javascript
let arr = [10, 20, 30];
```

---

## 2. Why Arrays Are Core to DSA

Almost every DSA problem uses arrays directly or indirectly:

* Strings → arrays of characters
* Matrices → 2D arrays
* Stacks / Queues → array implementation
* Hashing → arrays + objects

> **If loops are the engine, arrays are the road.**

---

## 3. Memory & Indexing (Interview Concept)

```text
Index:  0   1   2   3
Value: 10  20  30  40
```

* Address = base + index × size
* Random access possible
* No gaps in memory

**Interview Tip:** Access by index is `O(1)`.

---

## 4. Traversing an Array (Most Basic Algorithm)

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Used in **90% of array problems**.

---

## 5. Input / Output Style Traversal

```javascript
for (let value of arr) console.log(value);
```

Readable, but index not available.

---

## 6. Insertion in Array (Conceptual)

### Insert at End — O(1)

```javascript
arr.push(50);
```

### Insert at Beginning — O(n)

```javascript
arr.unshift(5);
```

### Insert at Index — O(n)

Elements must shift.

---

## 7. Deletion in Array

### Delete from End — O(1)

```javascript
arr.pop();
```

### Delete from Beginning — O(n)

```javascript
arr.shift();
```

---

## 8. Searching Algorithms (Array Basics)

### Linear Search — O(n)

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

Used when array is unsorted.

---

## 9. Find Maximum & Minimum

```javascript
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}
```

Very common interview problem.

---

## 10. Sum & Average of Array

```javascript
let sum = 0;
for (let x of arr) sum += x;
let avg = sum / arr.length;
```

Accumulator pattern.

---

## 11. Reverse an Array (Two Pointer)

```javascript
let i = 0, j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++; j--;
}
```

**DSA Pattern:** two pointers.

---

## 12. Rotate Array (Left / Right)

### Left Rotate by 1

```javascript
let first = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first;
```

---

## 13. Count Even & Odd Elements

```javascript
let even = 0, odd = 0;
for (let x of arr) {
  if (x % 2 === 0) even++;
  else odd++;
}
```

---

## 14. Frequency Count (Very Important)

```javascript
let freq = {};
for (let x of arr) {
  freq[x] = (freq[x] || 0) + 1;
}
```

Used in duplicates, majority element, etc.

---

## 15. Remove Duplicates (Unsorted Array)

```javascript
let seen = {};
let result = [];

for (let x of arr) {
  if (!seen[x]) {
    seen[x] = true;
    result.push(x);
  }
}
```

---

## 16. Remove Duplicates (Sorted Array — Two Pointer)

```javascript
let idx = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[idx]) {
    idx++;
    arr[idx] = arr[i];
  }
}
```

Optimized approach.

---

## 17. Second Largest Element

```javascript
let first = -Infinity, second = -Infinity;
for (let x of arr) {
  if (x > first) {
    second = first;
    first = x;
  } else if (x > second && x !== first) {
    second = x;
  }
}
```

Interview classic.

---

## 18. Check if Array is Sorted

```javascript
let sorted = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[i - 1]) {
    sorted = false;
    break;
  }
}
```

---

## 19. Partition Array (Even–Odd)

```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  if (arr[left] % 2 === 0) left++;
  else if (arr[right] % 2 !== 0) right--;
  else {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
}
```

Two‑pointer partitioning.

---

## 20. Subarrays (Conceptual)

* Continuous parts of array
* Total subarrays = `n(n+1)/2`

Used in sum, max problems.

---

## 21. Kadane’s Algorithm (Intro Level)

```javascript
let maxSum = arr[0];
let currSum = arr[0];

for (let i = 1; i < arr.length; i++) {
  currSum = Math.max(arr[i], currSum + arr[i]);
  maxSum = Math.max(maxSum, currSum);
}
```

Most famous array algorithm.

---

## 22. Prefix Sum Technique

```javascript
let prefix = [arr[0]];
for (let i = 1; i < arr.length; i++) {
  prefix[i] = prefix[i - 1] + arr[i];
}
```

Optimizes range sum queries.

---

## 23. Sliding Window (Basic)

```javascript
let k = 3;
let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i];
let maxSum = sum;

for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
  maxSum = Math.max(maxSum, sum);
}
```

---

## 24. Two Sum (Basic Hashing)

```javascript
let map = {};
for (let i = 0; i < arr.length; i++) {
  let need = target - arr[i];
  if (map[need] !== undefined) {
    return [map[need], i];
  }
  map[arr[i]] = i;
}
```

Very popular interview question.

---

## 25. Time & Space Complexity Summary

| Operation     | Time |
| ------------- | ---- |
| Access        | O(1) |
| Search        | O(n) |
| Insert/Delete | O(n) |

---

## 26. Common Mistakes in Arrays

❌ Off‑by‑one errors
❌ Forgetting edge cases
❌ Modifying array while iterating
❌ Using nested loops blindly

---

## 28. Extra Important Array Algorithms (Quick Revision)

> **Short, high‑yield algorithms frequently asked in interviews**

### 1️⃣ Second Maximum Element (Single Pass)

```javascript
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] !== max) {
    sMax = arr[i];
  }
}
```

**Pattern:** comparison tracking

---

### 2️⃣ Reverse Array (Two Pointer)

```javascript
let i = 0, j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++; j--;
}
```

**Pattern:** two pointers

---

### 3️⃣ Segregate 0s and 1s

```javascript
let i = 0, j = 0;
while (i < arr.length) {
  if (arr[i] === 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
  i++;
}
```

**Pattern:** partitioning

---

### 4️⃣ Left Shift Array by 1

```javascript
let first = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first;
```

**Pattern:** shifting

---

### 5️⃣ Left Shift Array by K

```javascript
k = k % arr.length;
for (let j = 0; j < k; j++) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
}
```

**Pattern:** repeated shift (basic version)

---

```javascript
let arr= [1,2,3,4,5];
let temp= new Array(arr.length);
let k=3;
k=k%arr.length;
for(let i=0;i<arr.length;i++){
    temp[i]=arr[(i+k)%arr.length];
}
console.log(temp);
```

**Pattern:** O(n) time complexity

---
