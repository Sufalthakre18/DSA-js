// let unit =Number(prompt("Enter electricity unit :  ")) // 700
// let amount=0;

// if (unit>400) {
//     amount = (unit-400)* 13 // 3900
//     unit=400;
// }
// if (unit>200 && unit<=400) {
//     amount +=(unit-200)*8 // 5500
//     unit=200;
// }
// if (unit>100 && unit<=200) {
//     amount += (unit-100)*6 // 6100
//     unit=100;
// }

// amount += unit*4 //400
// console.log(amount);

// ------------------------------------------------------------------

// let amount=8498
// if (amount>=500) {
//     console.log("500 notes : "+Math.floor(amount/500));
//     amount=amount%500;
// }
// if (amount>=200) {
//     console.log("200 notes : "+Math.floor(amount/200));
//     amount=amount%200;
// }
// if (amount>=100) {
//     console.log("100 notes : "+Math.floor(amount/100));
//     amount=amount%100;
// }
// if (amount>=50) {
//     console.log("50 notes : "+Math.floor(amount/50));
//     amount=amount%50;
// }
// if (amount>=10) {
//     console.log("10 notes : "+Math.floor(amount/10));
//     amount=amount%10;
// }
// if (amount>=5) {
//     console.log("5 notes : "+Math.floor(amount/5));
//     amount=amount%5;
// }
// if (amount>=2) {
//     console.log("2 notes : "+Math.floor(amount/2));
//     amount=amount%2;
// }
// if (amount===1) {
//     console.log("1 ke note : "+amount);

// }

// -------------------------------------------------------------

// FOR LOOP

// let pr = prompt("Enter number to print sum till number : ")
// if (pr == null) {
//     console.log("cancel program");
// } else {
//     let n = Number(pr)
//     if (isNaN(n)) {
//         console.log("Invalid input");
//     } else {
//         if (n > 0) {
// for(let i=1;i<=Math.floor(n);i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }  // This is non optimized code 
// ---------------------------
// for(let i=1;i<=Math.floor(n/2);i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// console.log(n); // optimized code

// console.log(isPrime(n));
// --------------------
// let sum=0;
// while(n>0){
//     let rem=n%10
//     sum+=rem
//     n=Math.floor(n/10)
// }
// console.log(sum);
// ----------------------------
// let rev=0;
// while(n>0){
//     var rim=n%10;
//     rev=rev*10+rim;
//     n=Math.floor(n/10);
// }
// console.log(rev);
// ----------------------------
// var sum=0;
// var copy=n;
// while(n>0){
//     let rem=n%10;
//     let fact=1;
//     for(let i=1;i<=rem;i++){
//         fact*=i;
//     }
//     sum=sum+fact;
//     n=Math.floor(n/10);
// }
// if (copy===sum){
//     console.log("strong");
// }
// else {
//     console.log("not a strong number");
// }



//         }
//         else{
//             console.log("number should be positive and greater than 0");

//         }
//     }
// }
// ------------------
// optimized code 
// function isPrime(n){
//     if(n<=1)return false;
//     if(n==2)return true;
//     if(n%2==0)return false;
//     for(let i=3;i<=Math.sqrt(n);i+=2){
//         if(n%i==0)return false;
//     }
//     return true;
// }


// ------------------
// optimized code 
// let n= +prompt("Enter a number")
// if(n<1 || isNaN(n)) console.log("Invalid input or should be positive ");
// else{
//     let fact=1;
//     while (n>1) fact*=n--;
//     console.log("fact is :- ",fact);

// }
// ------------------------------------------

// let random=Math.floor(Math.random()*100)+1;

// let guess=-1;
// let attempt=0;
// while (guess!==random) {

//     if(attempt<=5){
//        guess=Number(prompt("Guess the number from 1 to 100"));
//     if(isNaN(guess)|| guess<1||guess>100){
//         console.log("try again b/t 1-100");
//         continue
//     }
//     if (guess>random) {
//         console.log("too high! try again and attempt is ",attempt);
//     }else if(guess<random){
//         console.log("too low! try again and attempt is ",attempt);
//     }else{
//         console.log("congrats!🎉🎉🎉The number was ",guess);

//     } 


//     attempt+=1;
//     }
// }

// ------------------------


// PATTERN PROGRAM

// let n=6;
// for(let i=1;i<=n;i++){
//     let aschii=65;
//     for(let j=1;j<=n-i+1;j++){
//     process.stdout.write(String.fromCharCode(aschii)+' ')
//     aschii++;
//     }
//     console.log();
// }


// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("O")
//     }
//     console.log();
// }

// let n=5;
// for(i=1;i<=n;i++){
//     for(j=1;j<=2*n-1;j++){
//         if (i==j || i+j==2*n) {
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }

// ---------------------------
