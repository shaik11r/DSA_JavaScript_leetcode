class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return;
  }
}
let myList=new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
/**
 * 2,3
 * 3,5 fast.next=4 fast.next.next==5;so safe
 * 3,
 * 1,2,3
 * here 1,1
 * 2,3 now false
 */
findMiddle(myList.head);//3;
function findMiddle(head){
    let slow=head;
    let fast=head;
    while(fast.next!==null&& fast.next.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    console.log(slow.data);
    return;
}

