// SINGLY LINKED LIST 
// - consist nodes , non continous memory location

// ----------------------------------
// TRAVERSE THE LINKED LIST o(N)

// class Node { // creating a node
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// let head =new Node(10) // creating each node with data and next null
// let first = new Node(30)
// let second = new Node(60)

// head.next=first // head points to first 
// first.next=second // first points to second

// traverseLinkedList(head) // take a first node 
// function traverseLinkedList(head){
//     let current =head; 
//     while(current!=null){ 
//         console.log(current.data);
//         current=current.next // here current points to next and which is not null
//     }
// }
// ----------------------------------

// SEARCHING ELEMENT IN LINKED LIST O(N)

// class Node {
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// let head= new Node(40)
// let first= new Node(67)
// let second= new Node(90)
// let third= new Node(2)
// let fourth= new Node(30)

// head.next=first
// first.next=second
// second.next=third
// third.next=fourth

// function searchInLinkedList(head,key){
//     let current =head
//     while(current!=null){
//         if(current.data==key) return true
//         current= current.next
//     }
//     return false
// }

// let result=searchInLinkedList(head,6)
// result==true? console.log("key founded in linked list"): console.log("key not founded");

// ------------------------------------
// Insertion node at the beginning of linked list 

// class Node {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// head =new Node(10)
// first =new Node(20)
// second =new Node(30)

// head.next=first
// first.next=second

// function InsertAtBegin(key){
//     let newNode =new Node(key)
//     newNode.next=head
//     head=newNode
// }

// InsertAtBegin(25)
// InsertAtBegin(35)
// InsertAtBegin(45)

// function InsertAtSpecificPoint(prevNode,data){ // O(1) O(1)
//     let newNode=new Node(data)
//     newNode.next=prevNode.next
//     prevNode.next=newNode
// }
// InsertAtSpecificPoint(first,89)
// InsertAtSpecificPoint(second,99)

// function InsertAtEnd(data){  // time complexity O(n), space complexity O(1)
//     let newNode=new Node(data)

//     // to find end node we need to traverse LL
//     let currentNode= head
//     while(currentNode.next!=null){
//         currentNode=currentNode.next
//     }
//     currentNode.next =newNode
// }

// InsertAtEnd(69)
// InsertAtEnd(79)

// function printLL(head){
//     let current= head
//     while(current!=null){
//         console.log(current.data);
//         current=current.next
//     }
// }
// printLL(head)
// ----------------------------------------
// deletion node at the beginning of linked list O(1)

// class Node {
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// let head= new Node(40)
// let first= new Node(67)
// let second= new Node(90)
// let third= new Node(2)
// let fourth= new Node(30)

// head.next=first
// first.next=second
// second.next=third
// third.next=fourth

// function deleteNodeFromBeginning(){  // time complexity=O(1)=SC
//     if(head==null){
//         console.log("List is empty");
//         return;
//     }
//     let temp= head
//     head=head.next
//     temp.next=null
// }
// deleteNodeFromBeginning()

// function deleteNodeFromEnd(){ // time complexity:-Best -O(1),worst-O(n),space complexity-O(1)
//      if (head === null) {
//         console.log("List is empty");
//         return
//     }
//      if(head.next===null){
//         head=null
//         return
//      }
//     let current= head
//     while(current.next.next!==null){
//         current=current.next
//     }
//     let endnode=current.next
//     current.next=null
//     endnode=null
// }
// deleteNodeFromEnd()
// deleteNodeFromEnd()

// function printLL(head){
//     let current= head
//     while(current!=null){
//         console.log(current.data);
//         current=current.next
//     }
// }
// printLL(head)
// ----------------------------------
// doubly linked list print

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//         this.prev=null
//     }
// }

// var head=null;

// function pushNode(data){
//     let newNode=new Node(data)
//     if(head==null){
//         head=newNode
//         return
//     }
//     newNode.next=head
//     head.prev=newNode
//     head=newNode
// }
// pushNode(2)
// pushNode(4)
// pushNode(6)

// function printDLL(){
//     let currentNode=head;
//     while(currentNode!==null){
//         console.log(currentNode.data);
//         currentNode=currentNode.next
//     }
// }
// printDLL()

// --------------------------------------
// find middle node from linked list O(n)

// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// let head=null
// function pushLL(data){
//     let newNode=new Node(data)
//     newNode.next=head
//     head=newNode
// }

// for(let i=1;i<=7;i++){
//     pushLL(i)
// }

// function printLL(head){
//     let current=head;
//     while(current!=null){
//         console.log(current.data);
//         current=current.next
//     }
// }
// printLL(head)

// taking middle node from linked list 
// function middleNode(){
//     let counter=1
//     let mid=head
//     while(head.next!=null){
//         head=head.next
//         counter++;
//         if(counter%2==0){
//             mid=mid.next
//         }
//     }
//     return mid
// }
// let middle= middleNode()
// console.log(middle.data);


// reverse linked list

// function reverseLL(head){
//     let current=head;
//     let prevNode=null;
//     let nextNode=null;

//     while(current!=null){
//         nextNode=current.next
//         current.next=prevNode
//         prevNode=current
//         current=nextNode
//     }
//     return prevNode
    
// }
// let list=reverseLL(head)

// function printLL(list){
//     let current=list;
//     while(current!=null){
//         console.log(current.data);
//         current=current.next
//     }
// }
// printLL(list)
// ===================================
function palindrom(str){
    let start=0
    let end=str.length-1
    let ispalin=true
    while(start<end){
        if(str[start]!==str[end]){
            ispalin=false
        }
        start++;
        end--
    }

    return ispalin;
}
console.log(palindrom("madam"));

