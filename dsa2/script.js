
// ARRAY
// second   max
// let arr=[10,20,7,45,20,50,40,90]
// let max=Math.max(arr[0],arr[1]);
// let sMax=Math.min(arr[0],arr[1]);
// for(let i=2;i<=arr.length;i++){
//     if (arr[i]>max) {
//         sMax=max;
//         max=arr[i];
//     }
//     else if(arr[i]>sMax && max!=arr[i]){
//         sMax=arr[i]
//     }
// }
// console.log(sMax);

// ----------------------------

// let arr=[10,20,7,45,20,50,40,90];
// let i=0, j=arr.length-1;

// while(i<j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }
// console.log(arr);

// ------------------------------

// let arr = [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1]

// let i = 0, j = 0;

// while (i < arr.length) {
//     if (arr[i] ==0) {
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++;
//     }
//     i++;
// }
// console.log(arr);
// --------------------------
// shifting 

// let arr=[1,2,3,4,5];
// let copy= arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=copy;
// console.log(arr);
// -------------------------
// kth shifting 

// let arr = [1, 2, 3, 4, 5];

// let k = 12;
// k = k % arr.length
// let count=0;
// for (j = 0; j < k; j++) {
//     count++;
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy;
// }
// console.log(arr);
// console.log(count);

// ____________________________________

// let arr= [1,2,3,4,5];
// let temp= new Array(arr.length);
// let k=3;
// k=k%arr.length;
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }
// console.log(temp);

// ----------
// efficient algorithm for left rotation by K

// let arr=[1,2,3,4,5]

// let k=3;
// k=k%arr.length;

// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)

// console.log(arr);


// function reverse(i,j){
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp;
//         i++;
//         j--
//     }
// }

// efficient algorithm for right rotation by K

// let arr=[1,2,3,4,5]

// let k=2;
// k=k%arr.length;

// reverse(0,arr.length-1)
// reverse(0,k-1)
// reverse(k,arr.length-1)

// console.log(arr);


// function reverse(i,j){
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp;
//         i++;
//         j--
//     }
// }

// -------------

// remove duplicates from sorted Array;
// let arr = [1, 1, 2, 3, 3,3,4,5,5,5];

// function removeDup() {
//     let j = 1;

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             arr[j] = arr[i + 1];
//             j++; // 
//         }
//     }
//     return j; // new length
// }

// let len = removeDup();
// console.log(len);          
// console.log(arr.slice(0, len));
// --------------------

// merge sorted array

// let arr1=[3,5,6,9]
// let arr2=[1,2,4,7,8]
// let merge= new Array(arr1.length+arr2.length)
// let i=j=k=0;

// while(i<arr1.length&& j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k++]=arr1[i++]
//     }else{
//         merge[k++]=arr2[j++]
//     }
// }

// while(j<arr2.length){
//     merge[k++]=arr2[j++]
// }
// while(i<arr1.length){
//     merge[k++]=arr1[i++]
// }

// console.log(merge);
// ------------------------
// STRINGS

// let S="AjsjfhgeAJ"
// console.log(S);

// let toggle="";

// for(let i=0;i<S.length;i++){
//     let ch=S.charCodeAt(i);
//     if(ch>=65 && ch<=90){
//         toggle=toggle+String.fromCharCode(ch+32)
//     }else if(ch>=99 &&ch<=122){
//         toggle=toggle+String.fromCharCode(ch-32)
//     }
// }

// console.log(toggle);
// ------------

// let S="AjsjfhgeAJ";

// let arr= new Array(128).fill(0)

// for(let i=0;i<S.length;i++){
//     let indx=S.charCodeAt(i)
//     arr[indx]=arr[indx]+1
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i)+" "+ " appears at "+arr[i]+"times");
//     }
// }
// ------------------------

// let arr=[1,2,4,6,89,926,0]

// let max=arr[0];
// let min=arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max) max=arr[i]
//     if(arr[i]<min) min=arr[i]
// }
// console.log(max);
// console.log(min);
// -----------------------

// let arr =[1,2,3,4,9,6]
// let l=arr.length;
// for (let i=0;i<l;i++){
//     arr[l+i]=arr[i]
// }
// console.log(arr);

// time complexity->O(n)
// space complexity->O(n)
// --------------
// Running Sum of 1D Array
// brute force

// let arr=[2,4,6,8,14,15]
// console.log(arr);

// let ans=new Array(arr.length).fill(0)
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<=i;j++){
//         ans[i]+=arr[j]
//     }
// }

// console.log(ans);
//O(n^2)
// OPTIMAL SOLUTION
// ---
// let arr = [2, 4, 6, 8, 14, 15]
// console.log(arr);

// for(let i=1;i<arr.length;i++){
//     arr[i]=arr[i]+arr[i-1]
// }
// console.log(arr);
// -------------------------------


