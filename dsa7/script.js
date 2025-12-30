// TREE DATA STRUCTURE

// class TreeNode{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }

// // left->root->right
// function inorder(node){ // TC :- O(n) , (worst)SC :- O(n),best SC :- O(log(n))
//     if(node==null){
//         return;
//     }

//     inorder(node.left)
//     console.log(node.data);
//     inorder(node.right)
// }

// // root ->left ->right
// function preorder(node){ // TC :- O(n) , (worst)SC :- O(n),best SC :- O(log(n))
//     if(node==null){
//         return;
//     }
//     console.log(node.data);
//     preorder(node.left)
//     preorder(node.right)
// }

// // left -> right -> root
// function postorder(node){ // TC :- O(n) , (worst)SC :- O(n),best SC :- O(log(n))
//     if(node==null){
//         return;
//     }
//     postorder(node.left)
//     postorder(node.right)
//     console.log(node.data);
// }

// function height(node){ // TC :- O(n) , (worst)SC :- O(n)
//     if(node==null) {
//         return 0;
//     }
//     let leftHeight= height(node.left)
//     let rightHeight= height(node.right)
//     return Math.max(leftHeight,rightHeight)+1;
// }

// let root =new TreeNode(1)
// root.left=new TreeNode(2)
// root.right=new TreeNode(3)
// root.left.left=new TreeNode(4)
// root.left.right=new TreeNode(5)
// root.right.left=new TreeNode(6)
// root.right.right=new TreeNode(7)

// // console.log("Root of the Tree :- ",root);
// inorder(root) 
// preorder(root)
// postorder(root)

// let h = height(root)
// console.log("height of Tree :- ",h);

// ----------------------------------------------------

// INSERTING A NODE IN BINARY SEARCH TREE

// class TreeNode {
//     constructor(data) {
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }

// let root= null

// function insert(data){
//     root=insertRec(root,data)
// }

// function insertRec(root,data){
//     if(root==null){
//         root=new TreeNode(data)
//         return root
//     }

//     if(data<root.data){
//         root.left=insertRec(root.left,data)
//     }else if(data>root.data){
//         root.right=insertRec(root.right,data)
//     }

//     return root;
// }

// function searchNode(root,key){
//     if(root==null || root.data==key){
//         return root;
//     }

//     if(key<root.data){
//         return searchNode(root.left,key)
//     }else{
//         return searchNode(root.right,key)
//     }
// }

// insert(44)
// insert(50)
// insert(40)
// insert(55)
// insert(60)
// insert(58)
// let result =searchNode(root,55)
// if(result==null)console.log("Node not found") 
// else console.log("Node found",result.data);



// function inorder(root){
//     if(root===null){
//         return;
//     }

//     inorder(root.left)
//     console.log(root.data);
//     inorder(root.right)
// }

// inorder(root)


// --------------------------

// HASHING:- MAP SET OBJECT

// prob1:- Delete All Elements with Even Frequency Except the One with Single Occurrence

// let arr=[10,18,45,45,9,18,10,10,10,18,18]

// let set =new Set()

// for(let i=0;i<arr.length;i++){
//     if(set.has(arr[i])){
//         set.delete(arr[i])
//     }else set.add(arr[i])
// }
// console.log(set);


// let new_set = new Set(arr)
// console.log(new_set);
// -------------------------------
// MAP HASH FUNCTION

// let map =new Map()

// map.set("jatt",586)
// map.set("jatti",586)
// map.set("ramu","48634")
// map.set("work","manrega")
// map.set("shiv",true)
// map.set("raja",[4376,34,24124])

// console.log(map);

// // traverse whole map
// for(let [key,value] of map){
//     console.log(key+"-->"+value);   
// }

// // traverse keys of map
// console.log("keysss");

// for(let key of map.keys()){
//     console.log(key);

// }
// // traverse values of map
// console.log("values");

// for(let value of map.values()){
//     console.log(value);

// }
// -------------------------
// prob-2 Print the Frequency of Each Character
// let arr=[10,18,45,45,9,18,10,10,10,18,18]
// let map= new Map()
// for(let i=0;i<arr.length;i++){
//     // if(map.has(arr[i])){
//     //     map.set(arr[i],map.get(arr[i])+1)
//     // }else{
//     //     map.set(arr[i],1)
//     // }
//     map.set(arr[i],(map.get(arr[i])||0)+1)
// }
// console.log(map);

// ------------------------
// prob-3 longestSubarray with sum k

function longestSubarray(arr, k) {
    let map = new Map();
    let longestLength = 0;
    let sum = 0;
    map.set(sum, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - k)) {
            longestLength = Math.max(longestLength, i - map.get(sum - k));
        }
        if (!map.has(sum)) map.set(sum, i);
    }
    return longestLength;
}

let result=longestSubarray([19,5,2,7,1,-10],15)
console.log(result);

