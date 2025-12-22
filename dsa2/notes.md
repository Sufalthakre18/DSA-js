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

### 1) Second Maximum Element (Single Pass)

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

### 2️) Reverse Array (Two Pointer)

```javascript
let i = 0, j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++; j--;
}
```

**Pattern:** two pointers

---

### 3️) Segregate 0s and 1s

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

### 4️) Left Shift Array by 1

```javascript
let first = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first;
```

**Pattern:** shifting

---

### 5️) Left Shift Array by K

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

**Pattern:** O(n) time complexity but extra space

---

#### efficient algorithm for left rotation by K
```
let arr=[1,2,3,4,5]

let k=3;
k=k%arr.length;

reverse(0,k-1)
reverse(k,arr.length-1)
reverse(0,arr.length-1)

console.log(arr);

function reverse(i,j){
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        i++;
        j--
    }
}
```
---
for right rotation just
```
reverse(0,arr.length-1)
reverse(0,k-1)
reverse(k,arr.length-1)
```

---
### 6) remove duplicates from sorted Array;

```

let arr = [1, 1, 2, 3, 3,3,4,5,5,5];

function removeDup() {
    let j = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr[j] = arr[i + 1];
            j++; // 
        }
    }
    return j; // new length
}

let len = removeDup();
console.log(len);          
console.log(arr.slice(0, len));

```
---
### 7) merge sorted array

```

let arr1=[3,5,6,9]
let arr2=[1,2,4,7,8]
let merge= new Array(arr1.length+arr2.length)
let i=j=k=0;

while(i<arr1.length&& j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k++]=arr1[i++]
    }else{
        merge[k++]=arr2[j++]
    }
}

while(j<arr2.length){
    merge[k++]=arr2[j++]
}
while(i<arr1.length){
    merge[k++]=arr1[i++]
}

console.log(merge);
```

---
### 8) kadane's algorithm/ Maximum subarray

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=-Infinity;
    let sum =0;
    for(let i=0; i<nums.length;i++){
        sum+=nums[i];
        max=Math.max(max,sum)
        if(sum<0) sum=0;
        
    }
    return max;
};
```
---
### 9) moore's algorithm/ majority element

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            ans = nums[i];
            count = 1;
        } else if (nums[i] === ans) {
            count++;
        } else {
            count--;
        }
    }
    return ans;
};

```

---

# Strings — Complete DSA Guide (JavaScript)

## 1. What is a String? (DSA View)

A string is a **sequence of characters** stored in **contiguous memory**.
In JavaScript, strings are **immutable** (cannot be changed in place).

```js
let s = "hello";
```

**Important:** Any modification creates a **new string**.

---

## 3. String vs Character Array

| Feature      | String      | Char Array |
| ------------ | ----------- | ---------- |
| Mutability   | ❌ Immutable | ✅ Mutable  |
| Index Access | ✅           | ✅          |
| Modification | Costly      | Easy       |

Interview Tip: Convert string → array when frequent updates are needed.

---

## 4. Basic String Traversal

```js
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}
```

Or:

```js
for (let ch of s) console.log(ch);
```

---

## 5. Reverse a String (Classic)

```js
let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev += s[i];
}
```

Pattern: backward traversal.

---

## 6. Palindrome Check (Two Pointer)

```js
let i = 0, j = s.length - 1;
let isPal = true;

while (i < j) {
  if (s[i] !== s[j]) {
    isPal = false;
    break;
  }
  i++; j--;
}
```

Interview favorite.

---

## 7. Count Vowels & Consonants

```js
let vowels = "aeiou";
let count = 0;

for (let ch of s.toLowerCase()) {
  if (vowels.includes(ch)) count++;
}
```

---

## 8. Character Frequency Map (VERY IMPORTANT)

```js
let freq = {};
for (let ch of s) {
  freq[ch] = (freq[ch] || 0) + 1;
}
```

Used in:

* Anagrams
* First unique character
* Majority‑type problems

---

## 9. Check Anagram (Core DSA Pattern)

```js
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  let map = {};
  for (let ch of a) map[ch] = (map[ch] || 0) + 1;

  for (let ch of b) {
    if (!map[ch]) return false;
    map[ch]--;
  }
  return true;
}
```

---

## 10. First Non‑Repeating Character

```js
let freq = {};
for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

for (let ch of s) {
  if (freq[ch] === 1) {
    console.log(ch);
    break;
  }
}
```

---

## 11. Remove Duplicate Characters

```js
let seen = {};
let res = "";

for (let ch of s) {
  if (!seen[ch]) {
    seen[ch] = true;
    res += ch;
  }
}
```

---

## 12. Count Words in a String

```js
let words = s.trim().split(/\s+/);
console.log(words.length);
```

---

## 13. Longest Word in a Sentence

```js
let arr = s.split(" ");
let longest = "";

for (let word of arr) {
  if (word.length > longest.length)
    longest = word;
}
```

---

## 14. String Compression (Basic)

```js
let res = "";
let count = 1;

for (let i = 1; i <= s.length; i++) {
  if (s[i] === s[i - 1]) count++;
  else {
    res += s[i - 1] + count;
    count = 1;
  }
}
```

---

## 15. Substring vs Subsequence (Concept)

* **Substring:** continuous
* **Subsequence:** order preserved, gaps allowed

Interview theory question.

---

## 16. Valid Palindrome (Ignoring Non‑Alphanumeric)

```js
let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
let i = 0, j = str.length - 1;

while (i < j) {
  if (str[i++] !== str[j--]) return false;
}
return true;
```

---

## 17. String to Number (atoi logic)

```js
let num = 0;
for (let ch of s) {
  num = num * 10 + (ch - '0');
}
```

---

## 18. Time Complexity Notes

* Traversal → `O(n)`
* Nested loops → `O(n²)`
* Frequency map → `O(n)`

---

## 19. Common Mistakes in Strings

❌ Forgetting immutability
❌ Using nested loops blindly
❌ Not handling spaces/case
❌ Ignoring edge cases ("", single char)

---

## 20.  Important String Algorithms (Quick Revision)
---

### 1️⃣ Toggle Case of a String (ASCII Technique)

```js
let S = "AjsjfhgeAJ";
let toggle = "";

for (let i = 0; i < S.length; i++) {
  let ch = S.charCodeAt(i);
  if (ch >= 65 && ch <= 90) {
    toggle += String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle += String.fromCharCode(ch - 32);
  }
}
```

**DSA Name:** Toggle Case Algorithm using ASCII
**Pattern:** Character manipulation + traversal

---

### 2️⃣ Character Frequency Count (ASCII Frequency Array)

```js
let S = "AjsjfhgeAJ";
let freq = new Array(128).fill(0);

for (let i = 0; i < S.length; i++) {
  let idx = S.charCodeAt(i);
  freq[idx]++;
}

for (let i = 0; i < freq.length; i++) {
  if (freq[i] > 0) {
    console.log(String.fromCharCode(i) + " appears " + freq[i] + " times");
  }
}
```

**DSA Name:** Character Frequency Counting using ASCII Array
**Pattern:** Counting / hashing technique

---

# Time & Space Complexity — World‑Class DSA Notes (JavaScript)
---
## 1. Why Time & Space Complexity REALLY Matters

In real interviews and real systems:

* Input size can be **millions or billions**
* Code that works can still be **rejected** if inefficient

**DSA is not about code working — it’s about code scaling.**

---

## 2. What Time Complexity Actually Measures

❌ NOT execution time in seconds
✅ **Growth rate of operations with respect to input size (n)**

Example:

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

* Runs `n` times
* Time complexity = **O(n)**

Machine speed, language, OS do NOT matter.

---

## 3. What Space Complexity Actually Measures

Space Complexity =

* Extra memory used by algorithm
* Includes variables, arrays, recursion stack

Example:

```js
let sum = 0; // O(1) space
```

```js
let arr = new Array(n); // O(n) space
```

⚠ Input space is NOT counted — only **extra space**.

---

## 4. Big‑O, Big‑Ω, Big‑Θ (ADVANCED but IMPORTANT)

### Big‑O (Worst Case) — MOST IMPORTANT

* Upper bound
* Used in interviews

### Big‑Ω (Best Case)

* Rarely discussed in interviews

### Big‑Θ (Average / Tight Bound)

* When best & worst are same

Example:

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

* O(n), Ω(n), Θ(n)

---

## 5. Common Time Complexities (With Meaning)

| Complexity | Meaning           | Example              |
| ---------- | ----------------- | -------------------- |
| O(1)       | Constant          | Access array element |
| O(log n)   | Divide problem    | Binary search        |
| O(n)       | Linear            | Loop over array      |
| O(n log n) | Efficient sorting | Merge sort           |
| O(n²)      | Nested loops      | Pair checking        |
| O(2ⁿ)      | Exponential       | Brute recursion      |
| O(n!)      | Factorial         | Permutations         |

---

## 6. Advanced Rule: Drop Constants & Lower Terms

```js
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}
```

❌ O(2n)
✅ **O(n)**

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
```

✅ **O(n²)**

---

## 7. Amortized Time Complexity (VERY IMPORTANT)

Some operations look costly but are cheap on average.

Example: `push()` in JS arrays

* Occasionally O(n)
* Average = **O(1) amortized**

Used heavily in:

* Dynamic arrays
* Stack implementations

---

## 8. Recursion & Space Complexity (ADVANCED)

```js
function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
```

* Time = O(n)
* Space = **O(n)** (call stack)

⚠ Even without extra variables, recursion uses memory.

---

## 9. Two‑Pointer & Sliding Window Impact

```js
let i = 0, j = n - 1;
while (i < j) {
  i++; j--;
}
```

* NOT O(n²)
* Still **O(n)**

Understanding pointer movement is key in interviews.

---

## 10. Hidden Space Costs (MOST PEOPLE MISS THIS)

```js
let str = "hello";
str = str + "a";
```

Strings are immutable → new memory created

Time = O(n)
Space = O(n)

---

## 11. In‑Place vs Extra Space

### In‑Place Algorithm

* Uses constant extra space
* Preferred in interviews

Example:

```js
reverseArray(arr);
```

### Extra Space Algorithm

* Easier but memory heavy

```js
let newArr = [...arr];
```

---

## 12. How to Analyze Any Code (INTERVIEW FRAMEWORK)

Ask yourself:

1. How many loops?
2. Nested or sequential?
3. Is input reduced each step?
4. Any recursion?
5. Any extra data structure?

This framework = **90% correct analysis**.

---
## TLE (Time Limit Exceeded) — Short & Important DSA Notes

## What is TLE?

**TLE (Time Limit Exceeded)** occurs when an algorithm takes **more time than allowed** to execute for large inputs.

In simple words:

> Code is correct ❌ but **too slow** ❌

---

## Why TLE Happens

1. ❌ Wrong Time Complexity

   * Using O(n²) when n is large
   * Using exponential recursion

2. ❌ Nested Loops without need

3. ❌ Repeated unnecessary work

   * Recalculating same values

4. ❌ Language-specific issues (JavaScript)

   * String concatenation inside loops
   * Using `shift()` / `unshift()` repeatedly

---

## Practical Limits (Interview MUST-KNOW)

Approx operations per second ≈ **10⁷ – 10⁸**

| Input Size (n) | Safe Complexity    |
| -------------- | ------------------ |
| ≤ 10⁵          | O(n), O(n log n) ✅ |
| ≤ 10⁴          | O(n²) ⚠️           |
| ≤ 20           | O(2ⁿ) ⚠️           |
| ≤ 10           | O(n!) ❌            |

---

## Common TLE Example

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // heavy work
  }
}
```

For large n → **TLE guaranteed** ❌

---

## How to Avoid TLE

✅ Use better approaches:

* Hashing instead of nested loops
* Two pointers
* Sliding window
* Precomputation
* Early break / pruning

---


