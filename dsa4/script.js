//  STACKS DATA STRUCTURE + RECURSION

// without backtracking- first print then doing other stuff
// function temp(n){
//     if(n==0) return
//     console.log(n);
//     temp(--n) // code execute first to print then this will be hold that's why 5,4,3,2,1
// }
// temp(5)
// ---------------------------------------------
// with backtracking-means it holds value 
// function temp(n){
//     if(n==0) return
//     temp(n-1) // code after this will be hold that's why 1,2,3,4,5 
//     console.log(n);
// }
// temp(5)
// ----------------------------
// function sum(n){
//     if(n==1) return 1
//     return n+ sum(n-1)
// }
// console.log(sum(5))

// ------------------------
// function fact(n){
//     if(n==1) return 1
//     return n* fact(n-1)
// }
// console.log(fact(5))

// ---------------------------
// FIBONACCHI SERIES

// function fibbo(n,first,second){
//     if (n==0) return;
//     let third =first+second;
//     process.stdout.write(third+" ")
//     fibbo(n-1,second,third)
// }

// let n=10;
// process.stdout.write(0+" "+1+" ")
// fibbo(n-1,0,1)

// ------------------------------
// iterative method
// let n=10;
// let first=0,second=1;
// process.stdout.write(first+" "+second+" ")
// for(let i=0;i<=n-2;i++){
//     let third= first+second
//     first=second;
//     second=third;
//     process.stdout.write(third+" ")
// }
// ----------------------------------

// function fibbo(n){  
//     if(n==0||n==1) return n;
//     return fibbo(n-1)+fibbo(n-2)
// }

// let n=10;
// console.log(fibbo(5)); // O(2^n) time complexity
// --------------------------------
// MATHS COMMON PROBLEM 
// FIND gcd 

// 1st method :- iterative 
// let a=32,b=20;

// while(a!=b){
//     if(a>b) a=a-b
//     else b=b-a
// }
// console.log(a);

// -------------------------
// 2nd method :- with recursive Euclidean
// function gcd(a,b){
//     if(a==b) return a
//     if(a>b) return gcd(a-b,b)
//     return gcd(a,b-a)
// }
// console.log(gcd(32,20));
// -------------------------------
// optimal solution -time complexity log(max(a,b))
// function gcd(a,b){
//     if(b==0) return a
//     return gcd(b,a%b)
// }
// console.log(gcd(16,14));
// ------------------------------
// factors using iteration :- time complexity Big -O(n^1/2)

// let n=100
// for(let i=0;i<=Math.floor(Math.sqrt(n));i++){
//     if(n%i==0){
//         process.stdout.write(i+" ")
//     }
// }
// for(let i=Math.floor(Math.sqrt(n));i>=1;i--){
//     if(n%i==0){
//         if(n/i!=i){
//             process.stdout.write(n/i+" ")
//         }
//     }
// }

// ----------------------------------------

//  Sieve of Eratosthenes -to find prime numbers
// time complexity -O(n*log(log(n)))
// let n=100;
// let arr= new Array(n+1).fill(true)

// for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
//     if(arr[i]==true){
//         for(let j=i*i;j<=n;j=j+i){
//             arr[j]=false
//         }
//     }
// }
// for(let i=2;i<arr.length;i++){
//     if(arr[i]){
//         process.stdout.write(i+' ')
//     }
// }

// ------------------------------
// MERGE SORT time complexity :- O(n*log(n))

// function conqure(arr,first,mid,last){
//     let temp= new Array(last-first+1)
//     let i=first,j=mid+1,k=0;
//     while(i<=mid&&j<=last){
//         if(arr[i]<arr[j]){
//             temp[k++]=arr[i++]
//         }else{
//             temp[k++]=arr[j++]
//         }
//     }
//     while(i<=mid){
//         temp[k++]=arr[i++]
//     }
//     while(j<=last){
//         temp[k++]=arr[j++]
//     }
//     let p=0,t=first;
//     while(p<temp.length){
//         arr[t++]=temp[p++]
//     }

// }

// function divide(arr,first,last){
//     if(first>=last) return;
//     let mid = Math.floor((first+last)/2);
//     divide(arr,first,mid)
//     divide(arr,mid+1,last)
//     conqure(arr,first,mid,last)
// }

// let arr =[7,5,25,8,1,3,22,9]
// console.log(arr);

// divide(arr,0,arr.length-1)
// console.log(arr);

// ---------------------------------

// QUICK SORT -pivot and partition


// function findPivotInx(arr,first,last){
//     let pivot =arr[first]
//     let i=first+1,j=last
//     while(i<=j){
//         while(i<=last&& arr[i]<=pivot) i++;
//         while(j>=first&& arr[j]>pivot) j--;
//         if(i<j) swap(arr,i,j)
        
//     }
//     swap(arr,j,first)
//     return j;
// }

// function swap(arr,i,j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp;
// }

// function quickSort(arr,first,last){
//     if(first>=last)return;
//     let pvtIndx=findPivotInx(arr,first,last)
//     quickSort(arr,first,pvtIndx-1)
//     quickSort(arr,pvtIndx+1,last)
// }

// let arr=[2,7,6,86,542,1,67,21,31]
// console.log(arr);

// quickSort(arr,0,arr.length-1)
// console.log(arr);

// best  and average time complexity :- O(n*log(n)) AND  worst time complexity will be O(n^2)

// ---------------------
// CYCLIC SORT :- WITH RANGE :- time complexity -O(n)

// let arr= [7,6,4,5,2]
// let i=0
// while(i<arr.length){
//     let currentIdx=arr[i] -1
//     if(arr[i]!=arr[currentIdx]){
//         let temp=arr[i]
//         arr[i]=arr[currentIdx]
//         arr[currentIdx]=temp;
//     }
//     else i++

// }
// console.log(arr);

// ------------------

// Find all numbers disappeared in an array - time complexity O(n)

// function findDisappearedNumbers(nums) {
//     let result = [];
//     let i = 0;

//     // Step 1: Cyclic sort
//     while (i < nums.length) {
//         let correctIndex = nums[i] - 1;

//         if (nums[i] !== nums[correctIndex]) {
//             // swap
//             let temp = nums[i];
//             nums[i] = nums[correctIndex];
//             nums[correctIndex] = temp;
//         } else {
//             i++;
//         }
//     }

//     // Step 2: Find missing numbers
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== j + 1) {
//             result.push(j + 1);
//         }
//     }

//     return result;
// }
// let nums1 = [4,3,2,7,8,2,3,1];
// console.log("Input:", nums1);
// console.log("Missing Numbers:", findDisappearedNumbers(nums1));

// ------------------------------------------

// function printNum(n){
//     if(n<1) return
//     // console.log(n); // 10 to 0
//     // printNum(n-1)

    
//     printNum(n-1)
//     console.log(n); // 0 to 10 
    
// }
// printNum(10)
// ----------------------------------------------

// function fact(n){
//     if(n==1) return 1;
//     return n*fact(n-1)
// }
// let result =fact(5)
// console.log(result);

// -----------------------------------------------
// time Complexity - O(n)= space complexity
// function sumOfN(n){
//     if(n==1) return 1;
//     return n + sumOfN(n-1)
// }
// let result= sumOfN(4)
// console.log(result);
// -------------------------------------------------

// function nestedLoops (n) {
// if ( n ===0) return;
// for (let i = 0; i < n ;i++) {
// console.log(i) ;
// nestedLoops (n - 1) ;
// }}

// nestedLoops (2); // 0 0 1 0

// ----------------------------------------------------
// function sumDigits(n) {
//     if (n < 10) return n;

//     return (n % 10) + sumDigits (Math.floor(n / 10));

// }


// console.log(sumDigits(456));

// -------------------------------------------------------
// function gcd(a,b){
//     if(b==0) return a;
//     return gcd(b,a%b)
// }
// console.log(gcd(24,18))

// ------------------------------
