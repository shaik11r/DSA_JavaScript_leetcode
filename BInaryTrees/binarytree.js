class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
const root=new TreeNode(1);
const leftChild=new TreeNode(2);
const rightChild=new TreeNode(3);
const leftChild2=new TreeNode(4);
const rightChild2=new TreeNode(5);

root.left=leftChild;
root.right=rightChild;
root.left.left=leftChild2;
root.left.right=rightChild2
//how to traverse a binary tree;
//inorder left root right;
//preorder root left right;
//postorder left right root;
console.log("inrorder traversal : ")
inorder(root);
console.log("preorder traversal : ")
preorder(root);
console.log("postorder traversal : ")
postorder(root);
function inorder(temp){
    if(temp==null){
        return;
    }
    inorder(temp.left);
    console.log(temp.value);
    inorder(temp.right);
}
function preorder(temp){
    if(temp==null){
        return;
    }   
    console.log(temp.value);
    preorder(temp.left);
    preorder(temp.right);
}
function postorder(temp){
    if(temp==null){
        return;
    }   
    postorder(temp.left);
    postorder(temp.right);
    console.log(temp.value);
}
console.log("level order traversal or BFS")
levelOrderTraversal(root);
function levelOrderTraversal(root){
    let ans=[];
    if(root==null)return ans;
    let queue=[];
    queue.push(root);
    while(queue.length>0){
        let size=queue.length;
        let level=[];
        for(let i=0;i<size;i++){//1 2,3 so in queue 45 for 2 for 3 67 so 4567
            let node=queue.shift();//front node will come;
            if(node.left!=null)queue.push(node.left);
            if(node.right!=null)queue.push(node.right);
            level.push(node.value)
        }
        ans.push(level);
    }
    console.log(ans);
}