// STACK IMPLEMENTATION USING ARRAY

// let stack_arr=new Array(5)
// let top=-1
// let length=stack_arr.length
// function push(data){
//     top++;
//     if(top>length-1){
//         console.log(`stack overflow You can't add ${data} in stack`);
//         top--
//         return false
//     }
//     stack_arr[top]=data;
//     return true
// }

// function pop(){
//     let x=stack_arr[top]
//     if(top<0){
//         console.log("stack underflow/empty");
//         return false
//     }
//     top--;
//     return x
// }

// function topElement(){
//     if(top<0){
//         console.log("stack is empty");
//         return false
//     }
//     else return stack_arr[top]
// }

// function isEmpty(){
//     if (top<0) {
//         console.log("stack is empty");
//         return true
//     }
//     return false
// }
// function isFull(){
//     if(top==length-1) {
//         console.log("stack is full");
//         return true
//     }else{
//         return false 
//     }
// }


// push(10)
// push(20)
// push(30)
// push(40)
// push(50)
// let topel=topElement()
// console.log("top is ",topel);
// push(60) 
// isFull()

// pop()
// pop()
// pop()
// pop()
// pop()
// isEmpty()

// function printStackElement(){
//     for(let i=top;i>=0;i--){
//         console.log(stack_arr[i]);
//     }
// }
// printStackElement()
// ----------------------------

// REVERSE A STRING USING STACK

// class Stack {
//     constructor (data){
//         this.top=-1
//         this.size=data
//         this.arr=new Array(this.size)
//     }

//     push(data){

//         if(this.top==this.size-1){
//             console.log("stack overflow");
//             this.top--
//             return false
//         }
//         this.top++
//         this.arr[this.top]=data
//     }

//     pop(){
//         if(this.top<0){
//             console.log("stack is empty");
//             return false
//         }
//         let x=this.arr[this.top]
//         this.top--
//         return x
//     }
// }

// function reverseStringStack(str){
//     let length=str.length
//     let stack_arr=new Stack(length)
//     for(let i=0;i<length;i++){
//         stack_arr.push(str[i])
//     }

//     let reverseStr="";
//     for(let i=0;i<length;i++){
//         let x=stack_arr.pop()
//         reverseStr+=x
//     }
//     return reverseStr
// }

// let reverseString=reverseStringStack("TMKC")
// console.log(reverseString);

// -------------------------------------

//Next Greater Element for Every Element in Given Array O(n), O(n)

// class Stack {
//     constructor (data){
//         this.top=-1
//         this.size=data
//         this.arr=new Array(this.size)
//     }

//     push(data){

//         if(this.top==this.size-1){
//             console.log("stack overflow");
//             this.top--
//             return false
//         }
//         this.top++
//         this.arr[this.top]=data
//     }

//     pop(){
//         if(this.top<0){
//             console.log("stack is empty");
//             return false
//         }
//         let x=this.arr[this.top]
//         this.top--
//         return x
//     }

//     peek(){
//         return this.arr[this.top]
//     }

//     isEmpty(){
//         if(this.top<0){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }


// function greaterElementForEveryElement(numbers){
//     let length =numbers.length
//     let new_stack=new Stack(length)

//     new_stack.push(numbers[0])
//     for(let i=1;i<length;i++){

//         if(new_stack.isEmpty()){
//             new_stack.push(numbers[i])
//             continue;
//         }

//         while(!new_stack.isEmpty()&& new_stack.peek()<numbers[i]){
//             let x=new_stack.pop()
//             console.log(`${x}--->${numbers[i]}`);
//         }
//         new_stack.push(numbers[i])

//     }
//     while(!new_stack.isEmpty()){
//         console.log(`${new_stack.pop()}--- -1`);

//     }
// }
// greaterElementForEveryElement([23,11,4,19])
// ----------------------------------

// QUEUE DATA STRUCTURE

// class Queue {
//     constructor(n){
//         this.size=n
//         this.queue=new Array(this.size)
//         this.front=-1
//         this.rear=-1
//     }

//     enqueue(data){ // TC-O(1), SC-O(1)
//         if(this.rear==this.size-1){
//             console.log("Cannot insert element queue is already full");
//             return
//         }
//         if(this.front==-1){
//             this.front=0
//         }
//         this.rear++
//         this.queue[this.rear]=data
//         return
//     }

//     dequeue(){  // TC-O(n), SC-O(1)
//         if(this.isEmpty()){
//             console.log("Queue is empty so you can not add any elements");
//             return;
//         }

//         for(let i=this.front;i<=this.rear-1;i++){
//             this.queue[i]=this.queue[i+1]
//         }
//         this.rear--
//         return;
//     }

//     isEmpty(){ // TC-O(1), SC-O(1)
//         if(this.rear==-1){
//             return true;
//         }
//         return false;
//     }

//     peek(){ // TC-O(1), SC-O(1)
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return;
//         }
//         return this.queue[this.front]
//     }

//     findRear(){ // TC-O(1), SC-O(1)
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return;
//         }
//         return this.queue[this.rear]
//     }

//     isfull(){ // TC-O(1), SC-O(1)
//         if(this.rear==this.size-1){
//             console.log("Queue is full");
//             return true;
//         }
//         return false
//     }

//     printElement(){ 
//         if(this.rear==-1 ){
//             console.log("queue is empty");
//             return
//         }
//         for(let i=this.front;i<=this.rear;i++){
//             console.log(this.queue[i]);
//         }
//     }
// }


// let newqueue= new Queue(5)
// newqueue.enqueue(1)
// newqueue.enqueue(2)
// newqueue.enqueue(3)
// newqueue.enqueue(4)
// newqueue.enqueue(8)
// newqueue.dequeue()
// newqueue.dequeue()

// let peek=newqueue.peek()
// console.log("the peek value is ", peek);

// let end=newqueue.findRear()
// console.log("the last value is ", end);

// newqueue.isfull()
// newqueue.printElement()

// -----------------------------

//  Implement Stack Using Queues

// class Stack {
//     constructor(){
//         this.q1=[];
//         this.q2=[];
//     }

//     push(data){
//         this.q2.push(data)

//         while(this.q1.length!=0){
//             this.q2.push(this.q1[0])
//             this.q1.shift()
//         }
//         this.q=this.q1
//         this.q1=this.q2
//         this.q2=this.q
//     }

//     pop(){
//         const element= this.q1[0]
//         this.q1.shift()
//         return element
//     }

//     top(){
//         return this.q1[0]
//     }

//     printElement(){
//         for(let  i=0;i<this.q1.length;i++){
//             console.log(this.q1[i]);

//         }
//     }
// }

// let newstack= new Stack()

// newstack.push(2)
// newstack.push(3)
// newstack.push(4)
// newstack.push(5)

// let popEle=newstack.pop()
// console.log("pop element ",popEle);

// let topEle=newstack.top()
// console.log("top element ",topEle);
// -------------------------------------------
//  Implement Stack Using 1 Queues -O(n),O(n)

// class Stack {
//     constructor() {
//         this.q = []
//     }

//     push(x) {
//         let length = this.q.length;
//         this.q.push(x)
//         for (let i = 0; i < length; i++) {
//             this.q.push(this.q[i])
//             this.q.shift()
//         }

//     }
//     pop() {
//         if (this.q.length == 0) {
//             console.log("stack is empty");
//             return;
//         }

//         let element = this.q[0]
//         this.q.shift()
//         return element;
//     }

//     top() {
//         if (this.q.length == 0) {
//             console.log("stack is empty");
//             return;
//         }
//         return this.q[0];
//     }
// }

// let newstack=new Stack()
// newstack.push(1)
// newstack.push(2)
// newstack.push(3)
// newstack.push(4)

// let popele=newstack.pop()
// console.log(popele);

// let topEle=newstack.top()
// console.log(topEle);

// -------------------------------