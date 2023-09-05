class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=newNode;
        return;
    }
    createCycle(positon){
        if(positon<0){
            console.error('invalid postion for creating a cycle');
            return;
        }
        let current=this.head;
        let loopnode=null;
        let count=0;
        while(current.next!==null){
            if(count==positon){
                loopnode=current;
            }
            current=current.next;
            count++;
        }
        if(loopnode==null){
            console.error('invalid positon for creating a cycle');
            return;
        }
        current.next=loopnode;//insted of pointing to null we point to the the loopnode
    }
}
const mylist=new LinkedList();
mylist.append(3);
mylist.append(4);
mylist.append(1);
mylist.append(5);
mylist.append(6);
mylist.createCycle(1);
console.log(detectCycleInLinkedList(mylist.head))
function detectCycleInLinkedList(head){
    if(head==null)return null;
    let slow=head;
    let fast=head;
    while(fast.next!=null&&fast.next.next!=null){
        if(slow==fast){
            slow=head;
            while(slow!=fast){
                slow=slow.next;
                fast=fast.next;
            }
            return slow;
        }
    }
    return null;
}