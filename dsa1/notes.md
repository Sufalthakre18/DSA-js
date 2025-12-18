# DSA Basics and Logic Ques Practice Notes
---

## Type Coercion in JavaScript

* **Type coercion**: automatic or manual conversion of one data type into another.
* Occurs during operations involving different data types.

### Types of Coercion

* **Implicit Coercion** (automatic)

  * Example: `"5" + 2 // "52"`
* **Explicit Coercion** (manual)

  * Example: `Number("10") // 10`
---
## Type Casting in JavaScript

* **Type casting**: explicit/manual conversion of data types.
* Done using functions like `Number()`, `String()`, `Boolean()`.
* Gives more control than coercion.
* Example: `Number("5") // 5`

--- 

# DSA Introduction
---

## 1. What is DSA?

**DSA (Data Structures and Algorithms)** is the study of how data is stored, organized, and processed efficiently.

* **Data Structures** define *how data is stored and organized*.
* **Algorithms** define *how data is processed and manipulated*.

Together, they help us write programs that are **efficient, scalable, and reliable**.

In interviews, DSA is tested because it shows:

* Problem‑solving ability
* Logical thinking
* Performance awareness
* Code quality under constraints

---

## 2. Introduction to Data Structures

A **Data Structure** is a systematic way of organizing data so that operations like **access, insertion, deletion, and searching** can be performed efficiently.

Think of it as choosing the *right container* for your data.

### Why Data Structures are Important

* They **optimize performance** (time & space)
* They make code **clean and manageable**
* They allow programs to **scale for large inputs**
* They are the foundation of all major software systems

In JavaScript, even though we use built‑ins like `Array`, `Map`, and `Set`, understanding core data structures is essential to solve interview problems correctly.

---

## 3. The Power of Organizational Data Efficiency

Efficient data organization directly impacts application performance.

### Key Benefits

* **Speed** → Faster execution and lower latency
* **Scalability** → Handles large datasets smoothly
* **Cost efficiency** → Less memory and CPU usage
* **Predictability** → Avoids sudden performance crashes

### Interview Insight

Many interview problems are designed to fail with poor data organization.

Example:

* Searching in an unsorted array → O(n)
* Searching using a hash table → O(1)

Choosing the correct data structure often solves **50% of the problem**.

---

## 4. Types of Data Structures

### 4.1 Linear Data Structures

Data elements are arranged sequentially.

* **Array** – Indexed, fast access, fixed order
* **Linked List** – Dynamic size, efficient insert/delete
* **Stack** – LIFO (Last In, First Out)
* **Queue** – FIFO (First In, First Out)


---

### 4.2 Non‑Linear Data Structures

Data elements are organized hierarchically or as networks.

* **Tree** – Hierarchical structure (Binary Tree, BST)
* **Heap** – Priority‑based structure
* **Graph** – Nodes and edges representing relationships


---

### 4.3 Hash‑Based Data Structures

* **Hash Table / Map** – Key‑value storage
* **Set** – Unique elements only

---

## 5. Introduction to Algorithms

An **Algorithm** is a finite set of steps that transforms input into output.

Good algorithms are:

* Correct
* Efficient
* Easy to understand

### Why Algorithms Matter

* Same problem → different algorithms → huge performance difference
* Algorithm choice decides whether solution passes time limits

Example:

* Linear search → O(n)
* Binary search → O(log n)

---

## 6. Time and Space Complexity (Basic Idea)

### Time Complexity

Measures how execution time grows with input size.

Common complexities:

* O(1) – Constant
* O(log n) – Binary search
* O(n) – Linear traversal
* O(n log n) – Efficient sorting
* O(n²) – Nested loops

### Space Complexity

Measures extra memory used by the algorithm.

Interviewers expect you to **mention complexity** after solving the problem.

---


# DSA Basic's IMP Alogorithms

## 2. Input → Process → Output Algorithm

### Example (JS)

```js
function sum(a, b) {
  return a + b;
}
```

**Why important:** Every DSA problem follows this structure.

---

## 3. Sequential Execution Algorithm

Statements execute **line by line**, top to bottom.

### Example

```js
let a = 10;
let b = 20;
let c = a + b;
console.log(c);
```

---

## 4. Conditional (Decision‑Making) Algorithm

### Example

```js
function checkEven(n) {
  if (n % 2 === 0) return "Even";
  else return "Odd";
}
```

---

## 5. Loop‑Based Algorithm (Iteration)

Used when a task repeats.

### Example: Print array elements

```js
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

**DSA relevance:**

* Traversing arrays
* Counting, searching, updating values

---

## 6. Counter / Accumulator Algorithm

Used to **count or accumulate results**.

### Example: Sum of array

```js
let sum = 0;
for (let x of [1, 2, 3, 4]) {
  sum += x;
}
```

**Common uses:**

* Sum, count, average
* Frequency logic

---

## 7. Comparison‑Based Algorithm

Algorithm that compares values to find result.

### Example: Find maximum

```js
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
```

**DSA relevance:**

* Min / Max problems
* Range calculations

---

## 8. Flag‑Based Algorithm

Uses a boolean variable to track a condition.

### Example: Check if element exists

```js
let found = false;
for (let x of arr) {
  if (x === 20) {
    found = true;
    break;
  }
}
```

**Used in:**

* Search problems
* Validation checks

---

## 9. Input Validation Algorithm

Ensures input is correct before processing.

### Example

```js
function divide(a, b) {
  if (b === 0) return "Invalid";
  return a / b;
}
```

---

## 10. Update‑in‑Place Algorithm

Modify data **without extra memory**.

### Example: Increment each element

```js
for (let i = 0; i < arr.length; i++) {
  arr[i] += 1;
}
```

**Why important:**

* Space optimization
* Real interview requirement

---

## 11. Swap‑Based Algorithm

Used to exchange values.

### Example

```js
let temp = a;
a = b;
b = temp;
```

**Foundation for:**

* Reversal logic
* Rearrangement problems

---

## 12. Index‑Tracking Algorithm

Track positions using index variables.

### Example

```js
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
```

**DSA relevance:**

* Position‑based problems
* Mapping index to value

---

## 13. Simple Function‑Based Algorithm

Break logic into reusable functions.

### Example

```js
function square(x) {
  return x * x;
}
```

**Interview relevance:**

* Clean code
* Reusability

---

## 14. Type‑Handling Algorithm (JS‑Specific)

Handle numbers vs strings carefully.

### Example

```js
let a = "10";
let b = 20;
console.log(Number(a) + b);
```

**Very important in JavaScript interviews.**

---

## 15. Problem Breakdown Algorithm

Before coding:

1. Understand problem
2. Identify input/output
3. Write steps
4. Convert steps to code

**This is the MOST IMPORTANT algorithmic skill.**

---

## 16. Time Awareness (Basic Complexity Thinking)

Beginner rule:

* Single loop → fast
* Nested loop → slower

You don’t calculate Big‑O deeply yet — just **avoid unnecessary loops**.

---

## 17. Debug‑Driven Algorithm

Solve problems by printing intermediate results.

### Example

```js
console.log(i, arr[i]);
```
---

## 18. Pattern Recognition Algorithm

Recognize common patterns:

* Count
* Compare
* Repeat
* Update

Most DSA problems are **combinations of these**.

---

## 19. Edge‑Case Handling Algorithm

Think about:

* Empty input
* Single element
* Zero / negative values


---

## 1. Check if a Number is Even or Odd

```javascript
let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

**Key:** Use modulo `%` to check divisibility.

---

## 2. Swap Two Numbers (Without Temp Variable)

```javascript
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // 10 5
```

**Key:** Arithmetic trick to save space.

---

## 3. Calculate Factorial of a Number

```javascript
let n = 5, fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact); // 120
```

**Key:** Accumulate result using multiplication.

---

## 4. Generate Fibonacci Sequence

```javascript
let n = 10;
let a = 0, b = 1;
console.log(a, b);
for (let i = 2; i < n; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}
```

**Key:** Track previous two values.

---

## 5. Check if a Number is Prime

```javascript
let n = 13;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
```

**Key:** Check divisibility up to √n.

---

## 6. Reverse a String

```javascript
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev); // "olleh"
```

**Key:** Traverse string backwards.

---

## 7. Count Vowels in a String

```javascript
let str = "javascript";
let count = 0;
let vowels = "aeiou";
for (let char of str.toLowerCase()) {
  if (vowels.includes(char)) count++;
}
console.log(count); // 3
```

**Key:** Case‑insensitive checking.

---

## 8. Find Maximum Element in an Array

```javascript
let arr = [3, 1, 4, 1, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max); // 5
```

**Key:** Compare while traversing.

---

## 9. Sum of Array Elements

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum); // 15
```

**Key:** Initialize accumulator to 0.

---

## 10. Check Palindrome String

```javascript
let str = "radar";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(str === rev ? "Palindrome" : "Not Palindrome");
```

**Key:** Compare original with reversed string.

---

## 11. Find GCD of Two Numbers (Euclidean Algorithm)

```javascript
let a = 48, b = 18;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log(a); // 6
```

**Key:** Repeated modulo operation.

---

## 12. Check Leap Year

```javascript
let year = 2024;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeap ? "Leap Year" : "Not Leap Year");
```

**Key:** Combine logical operators.

---

## 13. Print Multiplication Table

```javascript
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
```

**Key:** Use template literals.

---

## 14. Calculate Power (base^exponent)

```javascript
let base = 2, exp = 3;
let result = 1;
for (let i = 0; i < exp; i++) {
  result *= base;
}
console.log(result); // 8
```

**Key:** Repeated multiplication.

---

## 15. Check Armstrong Number

```javascript
let n = 153;
let sum = 0;
let temp = n;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10);
}
console.log(n === sum ? "Armstrong" : "Not Armstrong");
```

**Key:** Extract digits using `%` and `/`.

---

## 16. Celsius to Fahrenheit

```javascript
let c = 25;
let f = (c * 9 / 5) + 32;
console.log(f); // 77
```

**Key:** Follow formula correctly.

---

## 17. Calculate Simple Interest

```javascript
let p = 1000, r = 5, t = 2;
let si = (p * r * t) / 100;
console.log(si); // 100
```

**Key:** Real‑world arithmetic logic.

---

## 18. Area of a Triangle

```javascript
let base = 5, height = 10;
let area = (base * height) / 2;
console.log(area); // 25
```

**Key:** Geometry formula application.

---

## 19. Check Positive, Negative, or Zero

```javascript
let num = -5;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");
```

**Key:** Chained conditional logic.

---

## 20. Print Numbers in Reverse Order

```javascript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

**Key:** Decrement loop variable.

---
# Conditional Statements Algorithms — DSA Basics (JavaScript)



---

## 2. Basic If‑Else Algorithm (Decision Making)

### Example: Check Valid Voter

```javascript
function checkVoter(age) {
  if (age >= 18) {
    return "Valid Voter";
  } else {
    return "Not a Valid Voter";
  }
}
```

**DSA Relevance:**

* Validation problems
* Eligibility checks
* Constraint handling

---

## 3. Handling Number vs String (Very Important in JS DSA)

```javascript
let age = "18"; // string

if (Number(age) >= 18) {
  console.log("Valid Voter");
}
```

**Key Point:**

* DSA logic must work on **correct data types**
* Strings should not be compared directly with numbers


---

## 4. Nested If‑Else Algorithm

Used when **multiple conditions** must be checked.

### Example: Shop Discount Calculation

```javascript
function calculateBill(amount) {
  if (amount >= 1000 && amount < 5000) {
    return amount * 0.8; // 20% discount
  } else if (amount >= 5000 && amount < 7000) {
    return amount * 0.85; // 15% discount
  } else if (amount >= 7000) {
    return amount; // no discount
  } else {
    return amount; // no discount
  }
}
```

**DSA Relevance:**

* Range‑based problems
* Slab calculations
* Categorization logic

---

## 5. Ternary Operator Algorithm

Compact form of if‑else.

### Example: Valid Voter (Ternary)

```javascript
let age = 20;
let result = age >= 18 ? "Valid Voter" : "Not Valid";
console.log(result);
```

### Nested Ternary (Use Carefully)

```javascript
let age = 18;
let result = age < 18 ? "Not Valid" : age === 18 ? "Just Eligible" : "Valid";
```

**DSA Note:**

* Allowed in interviews if readability is maintained
* Avoid deep nesting

---

## 6. Switch‑Case Algorithm

Used when there are **fixed discrete choices**.

### Example: Menu Selection

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}
```

**DSA Relevance:**

* State handling
* Option‑based problems
* Cleaner than many if‑else blocks

---

## 7. Conditionals Inside Loops (Core DSA Pattern)

Most DSA algorithms combine **loops + conditionals**.

### Example: Count Even Numbers

```javascript
let arr = [1, 2, 3, 4, 5, 6];
let count = 0;

for (let num of arr) {
  if (num % 2 === 0) {
    count++;
  }
}
console.log(count);
```

**This pattern appears everywhere in DSA.**

---

## 8. Early Exit Using Conditionals

Used to **stop execution** when answer is found.

### Example: Search Element

```javascript
let found = false;
for (let x of arr) {
  if (x === 10) {
    found = true;
    break;
  }
}
```

**DSA Benefit:**

* Improves efficiency
* Avoids unnecessary work

---

## 9. Edge‑Case Handling with Conditionals

```javascript
function sumArray(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let x of arr) sum += x;
  return sum;
}
```

**Interviewers love this.**

---
# Popular Loop Algorithms — Complete DSA Basics (JavaScript)


## 1. Basic Loop Traversal (Foundation)

### Traverse Numbers

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Used for:** counting, ranges, simulation.

---

## 2. Array Traversal Algorithm

```javascript
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

**Core DSA operation.** Almost every array problem starts here.

---

## 3. String Traversal Algorithm

```javascript
let str = "dsa";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

Used in all string problems.

---

## 4. Accumulator Pattern (Sum / Count)

```javascript
let arr = [1, 2, 3, 4];
let sum = 0;
for (let x of arr) {
  sum += x;
}
```

**Pattern:** initialize → loop → update.

---

## 5. Find Maximum / Minimum

```javascript
let arr = [4, 2, 9, 1];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
```

Classic interview problem.

---

## 6. Reverse Using Loop (Two-Pointer)

```javascript
let arr = [1, 2, 3, 4];
let i = 0, j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++; j--;
}
```

**Very popular DSA pattern.**

---

## 7. Early Exit Loop (Search)

```javascript
let arr = [5, 8, 3, 9];
let found = false;
for (let x of arr) {
  if (x === 3) {
    found = true;
    break;
  }
}
```

Optimizes performance.

---

## 8. Frequency Count Algorithm

```javascript
let str = "banana";
let freq = {};
for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
```

Used in anagram, duplicates, counting problems.

---

## 9. Palindrome Check (Two-Pointer)

```javascript
let str = "radar";
let i = 0, j = str.length - 1;
let ok = true;
while (i < j) {
  if (str[i] !== str[j]) {
    ok = false;
    break;
  }
  i++; j--;
}
```

Appears in many interviews.

---

## 10. Nested Loop Pattern

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

Used for matrix, pattern problems. Often O(n²).

---

## 11. While Loop (Unknown Iterations)

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

Best when stop condition is dynamic.

---

## 12. Do-While Loop (Execute Once)

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 3);
```

Used in input validation scenarios.

---

## 13. Continue & Skip Logic

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

Skip unwanted cases.

---

## 14. Break for Optimization

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
}
```

Stops loop early.

---

## 15. Sliding Window (Basic Loop Pattern)

```javascript
let arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
```

Foundation for window-based problems.

---

## 16. Loop with Condition Validation

```javascript
let str = "1234";
let valid = true;
for (let ch of str) {
  if (ch < '0' || ch > '9') {
    valid = false;
    break;
  }
}
```

Used in input checks.

---

## 17. Loop Complexity Awareness

* Single loop → O(n)
* Nested loop → O(n²)
* Two pointers → O(n)

Always explain **how many times loop runs**.

---

## 18. Common Loop Mistakes

❌ Infinite loop (no increment)
❌ Modifying array incorrectly
❌ Unnecessary nesting

---

## 19. Interview Golden Rules

✔ Use `for` when index needed
✔ Use `while` when condition-based
✔ Prefer simple readable loops
✔ Explain time complexity clearly

---

### 21. Print All Factors of a Number (Optimized)

```javascript
function printFactors(n) {
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) console.log(i);
  }
  console.log(n);
}
```

**Optimization idea:** No number > n/2 can divide n (except n).

---

### 22. Prime Number Check (Highly Optimized)

```javascript
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
```

**Interview favourite:** loop till √n, skip even numbers.

---

### 23. Sum of Digits (While Loop)

```javascript
let n = 1234;
let sum = 0;
while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
console.log(sum);
```

**Pattern:** digit extraction using `%` and `/`.

---

### 24. Reverse a Number

```javascript
let n = 1234;
let rev = 0;
while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}
console.log(rev);
```

Classic number‑based loop algorithm.

---

### 25. Strong Number Check (Nested Loop)

```javascript
function isStrong(n) {
  let copy = n, sum = 0;
  while (n > 0) {
    let rem = n % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) fact *= i;
    sum += fact;
    n = Math.floor(n / 10);
  }
  return sum === copy;
}
```

**Uses:** while + for loop combination.

---

### 26. Factorial Using While Loop (Optimized)

```javascript
function factorial(n) {
  if (n < 1) return "Invalid";
  let fact = 1;
  while (n > 1) fact *= n--;
  return fact;
}
```

**Efficient & clean.** Common interview task.

---

### 27. Guess the Number Game (Loop + Validation)

```javascript
let random = Math.floor(Math.random() * 100) + 1;
let guess = -1;

while (guess !== random) {
  guess = Number(prompt("Guess number 1–100"));

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input");
    continue;
  }

  if (guess > random) console.log("Too high");
  else if (guess < random) console.log("Too low");
  else console.log("Correct! 🎉");
}
```

**Shows:** while + continue + condition checks.

---

### 28. Pattern Printing — Alphabet Triangle

```javascript
let n = 6;
for (let i = 1; i <= n; i++) {
  let ch = 65;
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(String.fromCharCode(ch++) + " ");
  }
  console.log();
}
```

Tests nested loops + ASCII logic.

---

### 29. Pattern — Right Aligned Triangle

```javascript
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) process.stdout.write(" ");
  for (let j = 1; j <= i; j++) process.stdout.write("O");
  console.log();
}
```

Very common pattern interview problem.

---

### 30. Pattern — Cross Star Pattern

```javascript
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i === j || i + j === 2 * n) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}
```

---
# Pattern Programming — DSA Basics (JavaScript)

---

## 2. Core Pattern Programming Tricks (MUST KNOW)

### 🔹 Trick 1: Rows = Outer Loop

* Outer loop → **number of lines**

### 🔹 Trick 2: Columns = Inner Loop

* Inner loop → **elements per line**

### 🔹 Trick 3: Spaces Matter

* Many patterns fail because of missing spaces

### 🔹 Trick 4: Observe Formula

* `n - i`, `i`, `2*i - 1`, `2*n - 1`

### 🔹 Trick 5: Dry Run First

Start with `n = 3` or `n = 4`.

---

## 3. Solid Rectangle Pattern

```
* * * *
* * * *
* * * *
```

```javascript
let n = 3, m = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) process.stdout.write("* ");
  console.log();
}
```

---

## 4. Right Triangle Pattern

```
*
* *
* * *
```

```javascript
let n = 3;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) process.stdout.write("* ");
  console.log();
}
```

---

## 5. Inverted Right Triangle

```
* * *
* *
*
```

```javascript
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) process.stdout.write("* ");
  console.log();
}
```

---

## 6. Left Aligned Triangle (Spaces + Stars)

```
    *
  * *
* * *
```

```javascript
for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) process.stdout.write(" ");
  for (let j = 1; j <= i; j++) process.stdout.write("* ");
  console.log();
}
```

---

## 7. Pyramid Pattern (Very Important)

```
    *
  * * *
* * * * *
```

```javascript
for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) process.stdout.write(" ");
  for (let j = 1; j <= 2 * i - 1; j++) process.stdout.write("*");
  console.log();
}
```

**Formula:** stars = `2*i - 1`

---

## 8. Inverted Pyramid

```
* * * * *
  * * *
    *
```

```javascript
for (let i = n; i >= 1; i--) {
  for (let s = 1; s <= n - i; s++) process.stdout.write(" ");
  for (let j = 1; j <= 2 * i - 1; j++) process.stdout.write("*");
  console.log();
}
```

---

## 9. Diamond Pattern (Interview Favorite)

```javascript
// upper pyramid
for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) process.stdout.write(" ");
  for (let j = 1; j <= 2 * i - 1; j++) process.stdout.write("*");
  console.log();
}
// lower inverted pyramid
for (let i = n - 1; i >= 1; i--) {
  for (let s = 1; s <= n - i; s++) process.stdout.write(" ");
  for (let j = 1; j <= 2 * i - 1; j++) process.stdout.write("*");
  console.log();
}
```

**Trick:** combine two pyramids.

---

## 10. Hollow Rectangle

```
* * * *
*     *
* * * *
```

```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (i === 1 || i === n || j === 1 || j === m)
      process.stdout.write("* ");
    else process.stdout.write("  ");
  }
  console.log();
}
```

**Key:** boundary conditions.

---

## 11. X / Cross Pattern

```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}
```

---

## 12. Alphabet Pattern

```javascript
for (let i = 1; i <= n; i++) {
  let ch = 65;
  for (let j = 1; j <= i; j++)
    process.stdout.write(String.fromCharCode(ch++) + " ");
  console.log();
}
```

**Trick:** ASCII values.

---

## 13. Number Pattern

```
1
1 2
1 2 3
```

```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) process.stdout.write(j + " ");
  console.log();
}
```

---

## 14. Common Pattern Mistakes

❌ Wrong space count
❌ Extra `console.log()`
❌ Missing boundary condition
❌ No dry run

---
