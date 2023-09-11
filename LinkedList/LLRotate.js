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
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    let current = this.head;
    console.log("linkedList is :");
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
var rotateList = function (head, k) {
  let iterator = head;
  let count = 1;
  while (iterator.next) {
    count++;
    iterator = iterator.next;
  }
  k = k % count;
  if (k == 0) return head;
  let x = count - k;
  let tail = head;
  for (i = 0; i < x - 1; i++) {
    tail= tail.next;
  }
  let temp = tail.next;
  tail.next = null;
  iterator.next = head;
  head = temp;
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

let myList = new LinkedList();
for (i = 0; i < 3; i++) {
  myList.append(i);
}
// myList.print();
rotateList(myList.head, 4);
