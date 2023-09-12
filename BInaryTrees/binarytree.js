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
inorder(root);
function inorder(temp){
    if(temp==null){
        return;
    }
    inorder(temp.left);
    console.log(temp.value);
    inorder(temp.right);
}