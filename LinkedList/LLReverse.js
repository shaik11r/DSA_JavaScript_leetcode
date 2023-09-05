/**
 * 1->2->3->4->5;
 * 5,4,3,2,1;
 */
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
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const myList = new LinkedList();
myList.append(2);
myList.append(1);
myList.append(55);
myList.append(11);
myList.append(77);
console.log(myList.head);


function reverseList(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  let current = prev;
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}
reverseList(myList.head);
