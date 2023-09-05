class ListNode{
    constructor(val=0,next=null){
        this.val=val;
        this.next=next;
    }
}
function Ispalindrome(head){
    if(!head||!head.next){
        return true;
    }
    let slow=head;
    let fast=head;
    const stack=[];
    while(fast&&fast.next){
        stack.push(slow.val);
        slow=slow.next;
        fast=fast.next.next;
    }//1221
    while(slow){
        const stackTop=stack.pop();
        if(slow.val!=stackTop){
            return false;
        }
        slow=slow.next;
    }
    return true;
}