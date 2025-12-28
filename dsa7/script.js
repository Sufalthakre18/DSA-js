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

class TreeNode {
    constructor(data) {
        this.data=data
        this.left=null
        this.right=null
    }
}

let root= null

function insert(data){
    root=insertRec(root,data)
}

function insertRec(root,data){
    if(root==null){
        root=new TreeNode(data)
        return root
    }

    if(data<root.data){
        root.left=insertRec(root.left,data)
    }else if(data>root.data){
        root.right=insertRec(root.right,data)
    }

    return root;
}

function searchNode(root,key){
    if(root==null || root.data==key){
        return root;
    }

    if(key<root.data){
        return searchNode(root.left,key)
    }else{
        return searchNode(root.right,key)
    }
}

insert(44)
insert(50)
insert(40)
insert(55)
insert(60)
insert(58)
let result =searchNode(root,55)
if(result==null)console.log("Node not found") 
else console.log("Node found",result.data);



function inorder(root){
    if(root===null){
        return;
    }

    inorder(root.left)
    console.log(root.data);
    inorder(root.right)
}

inorder(root)