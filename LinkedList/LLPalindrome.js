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
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return;
  }
  print() {
    let curr = this.head;
    while (curr.next) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
const mylist = new LinkedList();
mylist.append(1);
mylist.append(2);
mylist.append(3);
mylist.append(3);
mylist.append(2);
mylist.append(1);
console.log(linkedListPalindrome(mylist.head));

function linkedListPalindrome(head) {
  let slow = head;
  let fast = head;
  let stack = [];
  while (fast !== null && fast.next !== null) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }
  if(fast!==null){
    slow=slow.next;
  }
  //skip the middle element if our fast is odd element;
  console.log(stack);
  while (slow !== null && stack.length >0) {
    let temp = stack.pop();
    if (slow.data !== temp) {
      return false;
    }
    slow = slow.next;
  }
  if (stack.length === 0 && slow === null) return true;
  return false;
}
