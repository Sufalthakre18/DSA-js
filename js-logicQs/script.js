// LOGIC BUILDING JS PRACTICE QUESTIONS

//  Sum of Two Numbers: Write a function addTwoNumbers(a, b) that takes two numbers as parameters and returns their sum. Log the result to the console.

// function Sum(a,b){
//     return a+b
// }

// let sum=Sum(8,5)
// console.log(sum);

// ----------------------------------------------------

// Even or Odd: Write a function isEven(num) that takes a number and returns true if it's even, false otherwise. Use the modulo operator.


// function isEven(num){
//     if (num%2===0) {
//         return true
//     }else{
//         return false
//     }
// }

// let num=isEven(6)
// console.log(num);

// ----------------------------------------------

// FizzBuzz (Basic): Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for both, print "FizzBuzz".


// function fizzBuzz(num){
//     for(i=1;i<=num;i++){
//         if(i%3===0 && i%5===0){
//             console.log("fizzBuzz");
            
//         }else if(i%3===0){
//             console.log()"Fizz";
            
//         }else if(i%5===0){
//             console.log("Buzz");
            
//         }else{
//             console.log("No number");
            
//         }
//     }
// }

// let num=fizzBuzz(16)
// console.log(num);
// -----------------------------------------------------------------

// Reverse a String: Write a function reverseString(str) that takes a string and returns it reversed (e.g., "hello" becomes "olleh").

// function reverseString(str){
//     let newStr='';
//     for(i=0;i<str.length;i++){
//         newStr+=str[str.length-i-1]
//     }
//     return newStr
// }

// console.log(reverseString("hellow"))
// ----------------------------------------


// Find the Largest Number: Write a function findLargest(arr) that takes an array of numbers and returns the largest one.


// function findLargest(arr){
//     return Math.max(...arr)
// }

// console.log(findLargest([12,5,7,9,2,56]))

// ------------------------------------------------------

// Count Vowels: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a given string, ignoring case.


// function countVowels(str){
//     let count=0;
//     let vowels='aeiouAEIOU'
//     for (const char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count

// }

// console.log(countVowels("Hello World")) // Output: 3


// ---------------------------------------------------------

// Factorial: Write a function factorial(n) that calculates and returns the factorial of a non-negative integer n (e.g., 5! = 120).

// function factorial(n){
//     let result=1;
//     for(i=1;i<=n;i++){
//         result = result *i
//     }
//     return result;
// }

// console.log(factorial(5));

// ---------------------------------------------------------

// Palindrome Check: Write a function isPalindrome(str) that checks if a string is a palindrome (reads the same forwards and backwards).

// function isPalindrome(str){

//     let newStr=str.split(' ').join('').toLowerCase()
//     return newStr=== newStr.split('').reverse().join('')
// }
// console.log(isPalindrome("gunfire"));
 

// ---------------------------------------------------

// Sum of Array: Write a function sumArray(arr) that takes an array of numbers and returns their total sum.

// function sumArray(arr){
//     return arr.reduce((acc,count)=>{
//         return acc= acc +count
//     },0)
// }
// console.log(sumArray([1,2,5,7]));
// ---------------------------------------------------


// Multiply by 2: Write a function doubleArray(arr) that takes an array of numbers and returns a new array where each element is doubled.

// function doubleArray(arr){
//     const newarr=arr.map((num)=>{
//         return num*2
//     })
//     return newarr
// }

// console.log(doubleArray([1,2,3,6]));

// ------------------------------------------

// Fibonacci Sequence: Write a function fibonacci(n) that returns an array of the first n Fibonacci numbers (starting with 0, 1).

// function fibonacci(n){
//     if (n === 1) return [0];
//     if (n === 2) return [0, 1];
//     let fib=[0,1]
//     let result;
//     for(i=2;i<n;i++){
//         result=fib[i-1] +fib[i-2]
//         fib.push(result)
//     }
//     return fib
// }
// console.log(fibonacci(5)) // 0,1,1,2,3,5



