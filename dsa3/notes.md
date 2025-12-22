# Searching Algorithms in DSA (JavaScript)
---

## 1. What is Searching in DSA?

**Searching** means finding whether an element exists in a data structure, and if yes, **at which index/position**.

Examples:

* Find a number in an array
* Check if a username exists
* Find a word in a string

Searching is one of the **most frequently used operations** in programming and interviews.

---

## 2. Types of Searching Algorithms

At a fundamental level, searching algorithms are divided into:

1. **Linear (Sequential) Search**
2. **Binary Search**

> Almost all advanced searching techniques are built on these two ideas.

---

## 3. Linear Search (Sequential Search)

### 3.1 What is Linear Search?

Linear search checks **each element one by one** until the target is found or the array ends.

It does **not require sorted data**.

---

### 3.2 Linear Search Algorithm (Basic)

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // found
        }
    }
    return -1; // not found
}
```

---

### 3.3 Time & Space Complexity

* Best Case: **O(1)** (element at first index)
* Worst Case: **O(n)** (last element or not present)
* Average Case: **O(n)**
* Space: **O(1)**

---

### 3.4 When to Use Linear Search

✅ Small arrays
✅ Unsorted data
✅ One‑time search
❌ Large datasets

---

### 3.5 Optimized Linear Search (Early Exit)

```js
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) break;
}
```

Stops immediately once element is found.

---

### 3.6 Variations of Linear Search

* Search in string
* Count occurrences
* Find first / last occurrence
* Sentinel linear search

Linear search is the **foundation of searching logic**.

---

## 4. Binary Search (Most Important)

### 4.1 What is Binary Search?

Binary search repeatedly **divides the search space into halves**.

⚠️ **Prerequisite: Data MUST be sorted**.

---

### 4.2 Core Idea

Instead of searching one‑by‑one:

* Compare with middle element
* Eliminate half of the array

This is why binary search is **fast and powerful**.

---

### 4.3 Binary Search Algorithm (Iterative)

```js
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

---

### 4.4 Binary Search (Recursive)

```js
function binarySearchRec(arr, low, high, target) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target)
        return binarySearchRec(arr, mid + 1, high, target);
    else
        return binarySearchRec(arr, low, mid - 1, target);
}
```

---

### 4.5 Time & Space Complexity

* Best Case: **O(1)**
* Worst Case: **O(log n)**
* Average Case: **O(log n)**

Space:

* Iterative: **O(1)**
* Recursive: **O(log n)** (call stack)

---

## 5. Why Binary Search is Powerful

Each step cuts the problem in half:

```
n → n/2 → n/4 → n/8 → ...
```

For n = 1,000,000

* Linear search → 1,000,000 checks
* Binary search → ~20 checks

---

## 6. Common Binary Search Mistakes (INTERVIEW TRAPS)

❌ Using binary search on unsorted array
❌ Infinite while loop (`low < high` mistake)
❌ Overflow in mid calculation (in other languages)
❌ Not handling duplicates properly

---

## 7. Binary Search Variations (VERY IMPORTANT)

Binary search is not just for searching an element.

Used to find:

* First occurrence
* Last occurrence
* Lower bound
* Upper bound
* Peak element
* Answer in monotonic space

> Many hard problems are **binary search on answer**.

---

## 8. Linear vs Binary Search (Comparison)

| Feature      | Linear           | Binary         |
| ------------ | ---------------- | -------------- |
| Data sorted? | ❌ No             | ✅ Yes          |
| Time         | O(n)             | O(log n)       |
| Space        | O(1)             | O(1)           |
| Use case     | Small / unsorted | Large / sorted |

---

## 9. Interview Strategy

### How to explain in interviews:

1. Start with linear search
2. Mention time complexity
3. Ask if data is sorted
4. Apply binary search
5. Optimize edge cases

### Interview Line (GOLD)

> "The brute force approach is linear search with O(n). Since the array is sorted, we can optimize using binary search in O(log n)."

---

## 10. When NOT to Use Binary Search

* Unsorted data
* Linked list (no random access)
* When insertion/deletion is frequent

---

## 11. Real‑World Examples

* Dictionary lookup → Binary search
* Searching in databases
* Version control comparisons
* Game leaderboards

---

## 12. Final Takeaways

✔ Linear search = simplicity
✔ Binary search = efficiency
✔ Sorted data unlocks power
✔ Binary search is a **thinking pattern**, not just code

---

## 13. Popular & Best Searching Algorithms (Extra – Awareness Level)
---

## 1. Jump Search

**Idea:** Jump ahead by fixed steps (√n) instead of checking every element.

**Requirements:** Sorted array

**Time Complexity:** O(√n)

```js
function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

---

## 2. Interpolation Search

**Idea:** Predicts the position based on value distribution.

**Works best when:** Data is uniformly distributed

**Time Complexity:**

* Best: O(log log n)
* Worst: O(n)

```js
function interpolationSearch(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) /
            (arr[high] - arr[low])
        );

        if (arr[pos] === target) return pos;
        if (arr[pos] < target) low = pos + 1;
        else high = pos - 1;
    }
    return -1;
}
```

---

## 3. Exponential Search

**Idea:** Useful when array size is unknown.

Steps:

1. Find range exponentially
2. Apply binary search

**Time Complexity:** O(log n)

```js
function binarySearch(arr, target, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0;

    let i = 1;
    while (i < arr.length && arr[i] <= target) i *= 2;

    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}
```

---

## 4. Ternary Search

**Idea:** Divides search space into three parts.

**Mostly theoretical** and used for unimodal problems.

**Time Complexity:** O(log n)

```js
function ternarySearch(arr, target) {
    let l = 0, r = arr.length - 1;

    while (l <= r) {
        let m1 = l + Math.floor((r - l) / 3);
        let m2 = r - Math.floor((r - l) / 3);

        if (arr[m1] === target) return m1;
        if (arr[m2] === target) return m2;

        if (target < arr[m1]) r = m1 - 1;
        else if (target > arr[m2]) l = m2 + 1;
        else {
            l = m1 + 1;
            r = m2 - 1;
        }
    }
    return -1;
}
```

---

## 5. Hash-Based Search (Fastest in Practice)

**Idea:** Direct lookup using hashing.

**Time Complexity:**

* Average: O(1)
* Worst: O(n)

```js
function hashSearch(arr, target) {
    const set = new Set(arr);
    return set.has(target);
}
```

---

## 6. Binary Search on Answer (Advanced Pattern)

**Idea:** Binary search applied on the answer space instead of array.

Used in optimization problems.

```js
function binarySearchOnAnswer(low, high, isValid) {
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isValid(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
```

---
# Sorting Algorithms in DSA (JavaScript)



## 1. What is Sorting in DSA?

**Sorting** means arranging data in a specific order:

* Ascending (small → large)
* Descending (large → small)

Examples:

* Sorting marks of students
* Sorting prices on an e‑commerce site
* Ranking leaderboards

Sorting improves:

* Searching efficiency
* Data analysis
* Problem‑solving speed

---

## 2. Why Sorting is Extremely Important

* Binary Search **requires sorted data**
* Many DSA problems assume sorted arrays
* Sorting simplifies logic
* Almost every system internally sorts data

> ❝ Sorting is not just an algorithm — it’s a thinking tool ❞

---

## 3. Types of Sorting Algorithms (High Level)

Sorting algorithms are broadly classified as:

* **Comparison-based** (Bubble, Selection, Insertion)
* **Non-comparison-based** (Counting, Radix – later)

In this file, we focus on **comparison-based foundational sorts**.

---

## 4. Bubble Sort (Beginner Friendly)

### 4.1 Core Idea

Bubble Sort repeatedly compares **adjacent elements** and swaps them if they are in the wrong order.

Largest element "bubbles up" to the end in each pass.

---

### 4.2 Bubble Sort Algorithm

```js
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

---

### 4.3 Dry Run (Important)

Array: `[5, 3, 4, 1]`

Pass 1 → `[3, 4, 1, 5]`
Pass 2 → `[3, 1, 4, 5]`
Pass 3 → `[1, 3, 4, 5]`

---

### 4.4 Optimized Bubble Sort (Early Exit)

```js
function optimizedBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
```

---

### 4.5 Complexity Analysis

* Best Case: **O(n)** (already sorted)
* Worst Case: **O(n²)**
* Average Case: **O(n²)**
* Space: **O(1)** (in-place)

---

### 4.6 When to Use Bubble Sort

❌ Large arrays
❌ Performance‑critical systems

✅ Learning purposes
✅ Interview explanation starter

---

## 5. Selection Sort (Conceptually Clean)

### 5.1 Core Idea

Selection Sort selects the **minimum element** and places it at the correct position.

It divides the array into:

* Sorted part (left)
* Unsorted part (right)

---

### 5.2 Selection Sort Algorithm

```js
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
```

---

### 5.3 Dry Run

Array: `[64, 25, 12, 22, 11]`

Pass 1 → `[11, 25, 12, 22, 64]`
Pass 2 → `[11, 12, 25, 22, 64]`
Pass 3 → `[11, 12, 22, 25, 64]`

---

### 5.4 Complexity Analysis

* Best Case: **O(n²)**
* Worst Case: **O(n²)**
* Average Case: **O(n²)**
* Space: **O(1)**

---

### 5.5 Key Properties

✔ Simple logic
✔ Fewer swaps than Bubble Sort
❌ Always slow

---

## 6. Insertion Sort (Most Important Among Three)

### 6.1 Core Idea

Insertion Sort works like **sorting playing cards in hand**.

It picks one element and inserts it into the correct position in the sorted part.

---

### 6.2 Insertion Sort Algorithm

```js
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
```

---

### 6.3 Dry Run

Array: `[5, 2, 4, 6, 1]`

Steps:

* Insert 2 → `[2, 5, 4, 6, 1]`
* Insert 4 → `[2, 4, 5, 6, 1]`
* Insert 6 → `[2, 4, 5, 6, 1]`
* Insert 1 → `[1, 2, 4, 5, 6]`

---

### 6.4 Complexity Analysis

* Best Case: **O(n)** (already sorted)
* Worst Case: **O(n²)**
* Average Case: **O(n²)**
* Space: **O(1)**

---

### 6.5 Why Insertion Sort is IMPORTANT

✔ Adaptive (fast for nearly sorted data)
✔ Used in real engines (TimSort)
✔ Stable sorting

> Insertion Sort is **interview‑relevant**

---

## 7. Comparison Table

| Algorithm | Best  | Avg   | Worst | Stable | In‑Place |
| --------- | ----- | ----- | ----- | ------ | -------- |
| Bubble    | O(n)  | O(n²) | O(n²) | Yes    | Yes      |
| Selection | O(n²) | O(n²) | O(n²) | No     | Yes      |
| Insertion | O(n)  | O(n²) | O(n²) | Yes    | Yes      |

---

## 8. Interview Strategy (IMPORTANT)

If asked:

> "Which sorting algorithm would you use?"

Answer:

* Small data → Insertion Sort
* Already sorted → Insertion Sort
* Teaching → Bubble Sort

---
## Popular & Important Sorting Algorithms (JavaScript)


## 1. Merge Sort (MOST IMPORTANT)

### Core Idea

* Divide array into halves
* Sort each half
* Merge them back

This follows **Divide and Conquer**.

### Why Important

✔ Guaranteed O(n log n)
✔ Stable sort
✔ Used internally in many systems

### Algorithm (JavaScript)

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

### Complexity

* Time: O(n log n)
* Space: O(n)

---

## 2. Quick Sort (INTERVIEW FAVORITE)

### Core Idea

* Pick a pivot
* Place smaller elements on left, larger on right
* Recursively sort

### Why Important

✔ Very fast in practice
✔ In-place sorting
✔ Used in V8 (conceptually)

### Algorithm (JavaScript)

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

### Complexity

* Best / Avg: O(n log n)
* Worst: O(n²)
* Space: O(log n)

---

## 3. Heap Sort

### Core Idea

* Build a Max Heap
* Extract max repeatedly

### Why Important

✔ Guaranteed O(n log n)
✔ In-place
✔ Used in priority queues

### Algorithm (JavaScript)

```js
function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
```

### Complexity

* Time: O(n log n)
* Space: O(1)

---

## 4. Counting Sort (NON-COMPARISON)

### Core Idea

* Count frequency of elements
* Rebuild array

### When to Use

✔ Small range of integers
❌ Large range

### Algorithm (JavaScript)

```js
function countingSort(arr, maxVal) {
    let count = new Array(maxVal + 1).fill(0);

    for (let num of arr) count[num]++;

    let index = 0;
    for (let i = 0; i <= maxVal; i++) {
        while (count[i]-- > 0) {
            arr[index++] = i;
        }
    }
    return arr;
}
```

### Complexity

* Time: O(n + k)
* Space: O(k)

---

## 5. Radix Sort (ADVANCED AWARENESS)

### Core Idea

* Sort numbers digit by digit
* Uses counting sort internally

### Used When

✔ Sorting large integers
✔ Fixed digit length

### Complexity

* Time: O(d × (n + k))
* Space: O(n + k)

---

## 6. Tim Sort (REAL-WORLD SORT)

### Facts

* Hybrid of Merge + Insertion
* Used in **JavaScript (Array.sort)**
* Adaptive and stable

> You are NOT expected to code TimSort in interviews.

---

## 7. Comparison Table (Important)

| Algorithm | Best       | Avg        | Worst      | Stable | In-Place |
| --------- | ---------- | ---------- | ---------- | ------ | -------- |
| Merge     | O(n log n) | O(n log n) | O(n log n) | Yes    | No       |
| Quick     | O(n log n) | O(n log n) | O(n²)      | No     | Yes      |
| Heap      | O(n log n) | O(n log n) | O(n log n) | No     | Yes      |
| Counting  | O(n+k)     | O(n+k)     | O(n+k)     | Yes    | No       |

---

## 8. Interview Roadmap (IMPORTANT)

Beginner:
✔ Bubble, Selection, Insertion

Intermediate:
✔ Merge, Quick

Advanced:
✔ Heap, Counting, Binary-search based sorting

---
## 9. insertion sort example in own way

```
let arr=[10,3,53,2,89,47]
let n=arr.length

for(let i=1;i<n;i++){ 
    let key=arr[i];
    let j=i-1
    while(arr[j]>key && j>=0){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key

}
console.log(arr);
```

---
