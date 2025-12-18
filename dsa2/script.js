
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






