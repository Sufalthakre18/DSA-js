// LINEAR SEARCH

// let arr=[3,5,7,8,930,2,35]
// let target=35
// let length=arr.length

// let result=linearSearch(arr,target)

// function linearSearch(arr,target){
//     for(let i=0;i<length;i++){
//         if(arr[i]===target){
//             return `target element found at index ${i}`
//             break;
//         }
//     }
//     return "element not found";

// }

// console.log(result);
// ------------------------------

// BINARY SEARCH

// let arr=[2,5,36,38,70,80,90]
// let target =70

// function binarySearch(arr,target){
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         let mid=start +Math.floor((end-start)/2);

//         if(arr[mid]==target) return mid;
//         else if(arr[mid]<target) start= mid+1;
//         else end =mid-1;
//     }
//     return -1;
// }

// const result= binarySearch(arr,target);

// (result==-1)? console.log("element not found"): console.log(`element found at index of : ${result}`)

// -----------------------------

//  Count 1s in Sorted Binary Array

// let arr=[1,1,0,0,0]

// function count1s(arr){
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         let mid=start+Math.floor((end-start)/2)
//         if(arr[mid]==0) end=mid-1;
//         else if(arr[mid]==1 &&arr[mid+1]==1) start=mid+1;
//         else if(arr[mid]==1 &&((arr[mid+1]==0) || mid==arr.length-1)) return mid+1;
//     }
//     return -1
// }
// const result=count1s(arr)
// result==-1?console.log("There are 0 1s in array"):console.log(`there 1s element is ${result}`)
// ---------------------------
// SORTING ALGORITHMS
// BUBBLE SORTING

// let arr=[10,3,53,2,89,47]
// let n=arr.length
// for(let i=0;i<n-1;i++){ // pases if n elements then n-1 pases
//     for(let j=0;j<n-1-i;j++){ // no of operations will be decrease 
//         if(arr[j]>arr[j+1]){
//             // let temp=arr[j]
//             // arr[j]=arr[j+1]
//             // arr[j+1]=temp
//             arr[j]=arr[j]+arr[j+1]
//             arr[j+1]=arr[j]-arr[j+1]
//             arr[j]=arr[j]-arr[j+1]
//         }
//     }

// }
// console.log(arr);
// time complexity O(n^2)
// -----------------
// SELECTION SORT

// let arr=[10,3,53,2,89,47]
// let n=arr.length
// for(let i=0;i<n-1;i++){ 
//     let minIndex=i;
//     for(let j=i+1;j<n;j++){ 
//         if(arr[minIndex]>arr[j]) minIndex=j
//     }
//     if(arr[minIndex]!=i){
//             let temp=arr[minIndex]
//             arr[minIndex]=arr[i]
//             arr[i]=temp
//         }

// }
// console.log(arr);
// ----------------------------------
// INSERTION SORT

// let arr=[10,3,53,2,89,47]
// let n=arr.length

// for(let i=1;i<n;i++){ 
//     let key=arr[i];
//     let j=i-1
//     while(arr[j]>key && j>=0){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=key

// }
// console.log(arr);
// -----------------
// INSERTION SORT
// let arr=[19,3,2,10,23,14]
// let n= arr.length

// function insertionSort(arr,n){
//     let key,j;
//     for(let i=1;i<n;i++){
//         key=arr[i];
//         j=i-1;
//         while(j>=0&& arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// let result =insertionSort(arr,n)
// console.log(result);

// -----------------------------

// BUBBLE SORT

// let arr=[19,3,2,10,23,14]
// let n=arr.length
// function bubbleSort(arr,n){
    
//     for(let i=0;i<n-1;i++){
//         let swapped=false;
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 arr[j]=arr[j]+arr[j+1]
//                 arr[j+1]=arr[j]-arr[j+1]
//                 arr[j]=arr[j]-arr[j+1]
//                 swapped=true
//             }
//         }
//         if(swapped==false) break;
//     }
// }

// bubbleSort(arr,n)
// console.log(arr);
// ----------------------------------

// SELECTION SORT
// let arr=[19,3,2,10,23,14]
// let n=arr.length
// let temp;

// for(let i=0;i<n;i++){
//     let minIndex=i
//     for(let j=i+1;j<n;j++){
//         if(arr[minIndex]>arr[j]){
//             minIndex=j
//         }
//     }
//     temp=arr[minIndex];
//     arr[minIndex]=arr[i]
//     arr[i]=temp
// }

// console.log(arr);
// --------------------------------------
// 1st QUestion solution hash map  :- 1.	Two Sum – Leetcode 1
// let arr = [3,2,4]
// let target =6

// function twoSum(arr,target){
//     let map=new Map()
//     for(let i=0;i<arr.length;i++){
//         let complement=target-arr[i]
//         if(map.has(complement)){
//             return [map.get(complement),i]
//         }
//         map.set(arr[i],i)
//     }
//     return null

// }

// let result=twoSum(arr,target)
// console.log(result);
// -------------------------
// 2nd solution-brite force 
// let arr = [3,3]
// let target =6

// function twoSum(arr,target){
//     let ansarr=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 ansarr.push(i)
//                 ansarr.push(j)
//             }
//         }
//     }
    
//     return ansarr;
// }

// let result=twoSum(arr,target)
// console.log(result);


// --------------------------------------
// 1st solution of leetcode with brute force :-. Count Number of Pairs With Absolute Difference K – Leetcode 2006
// let nums = [3,2,1,5,4]
// let k=2

// function countKDifference(nums,k){
//     let pairs=0
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(Math.abs((nums[i]-nums[j]))==k){
//                 pairs++;
//             }
//         }
//     }
//     return pairs;
// }
// let pairs=countKDifference(nums,k)
// console.log(pairs);
// --------------------
// OPTIMAL SOLUTION OF THIS :-. Count Number of Pairs With Absolute Difference K – Leetcode 2006
// let nums = [3,2,1,5,4]
// let k=2

// function countKDifference(nums,k){
//     let freq = new Map(); 
//     let pairs = 0;      
    
//     for (let i = 0; i < nums.length; i++) {
//         let current = nums[i];
//         if (freq.has(current - k)) {
//             pairs += freq.get(current - k);
//         }
//         if (freq.has(current + k)) {
//             pairs += freq.get(current + k);
//         }
//         if (freq.has(current)) {
//             freq.set(current, freq.get(current) + 1);
//         } else {
//             freq.set(current, 1);
//         }
//     }
    
//     return pairs;
// }
// let pairs=countKDifference(nums,k)
// console.log(pairs);

// ----------------------------

// 3. Number of Good Pairs – Leetcode 1512-BRUTE FORCE

// nums = [1,2,3,5]

// function numIdenticalPairs(nums){
//     let count=0;
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]==nums[j]) count++;
//         }
//     }
//     return count;
// }
// let result=numIdenticalPairs(nums)
// console.log(result);
// -------------------------------------

// 3. Number of Good Pairs – Leetcode 1512-OPTIMAL SOLUTION
// nums = [1,2,3,1,1,3]

// function numIdenticalPairs(nums){
//     let map=new Map()
//     let count=0;
//     for(let n of nums){
//         count+=map.get(n) || 0;
//         map.set(n,(map.get(n) || 0)+1)
//     }
//     return count;
// }
// let result=numIdenticalPairs(nums)
// console.log(result);


// --------------------

// 1470. Shuffle the Array- BRUTE FORCE

// function shuffleBrute(nums, n) {
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         result.push(nums[i]);
//         result.push(nums[i + n]);
//     }

//     return result;
// }


// let arr =[2,5,1,3,4,7]
// let n=arr.length/2

// let result= shuffleBrute(arr,n)
// console.log(result);
// --------------------------------
// 1470. Shuffle the Array- Optimal solution

// let arr = [2,5,1,3,4,7];
// let n = arr.length / 2;

// function shuffle(arr, n) {
//     let newarr = [];
//     let index = 0;

//     for (let i = 0; i < n; i++) {
//         newarr[index++] = arr[i];
//         newarr[index++] = arr[i + n];
//     }

//     return newarr;
// }

// let result = shuffle(arr, n);
// console.log(result);
// -----------------------------------
// Kadane’s Algorithm -1st approach Maximum Subarray – Leetcode 53

// var maxSubArray = function(nums) {
//     let current = nums[0];
//     let maxSum = nums[0];

//     for(let i = 1; i < nums.length; i++){
//         current = Math.max(nums[i], current + nums[i]);
//         maxSum = Math.max(current, maxSum);
//     }

//     return maxSum;
// };
// ----------------------------

// Kadane’s Algorithm -2nd approach Maximum Subarray – Leetcode 53
// var maxSubArray = function(nums) {
//     let max=-Infinity;
//     let sum =0;
//     for(let i=0; i<nums.length;i++){
//         sum+=nums[i];
//         max=Math.max(max,sum)
//         if(sum<0) sum=0;
        
//     }
//     return max;
// };

// ----------------------------------

