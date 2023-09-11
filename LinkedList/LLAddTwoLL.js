var addTwoNumber=function(l1,l2){
    let dummy=new ListNode(0);
    let current=dummy;
    let carry=0;
    while(l1||l2){
        let a=(l1!=null)?l1.val:0;
        let b=(l2!=null)?l2.val:0;
        let sum=carry+a+b;
        carry=Math.floor(sum/10);
        let newNode=new ListNode(sum%10);
        current.next=newNode;
        current=current.next;
        if(l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next;
        }
    }
    if(carry>0){
        let newNode=new ListNode(carry);
        current.next=newNode;
    }
    return dummy.next;
}