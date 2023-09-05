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
  search(data) {
    let current = this.head;
    while (current.next) {
      if (current.data === data) {
        console.log("found", data);
        return;
      }
      current = current.next;
    }
    console.log("notfound", data);
    return;
  }
}
const myList = new LinkedList();

myList.append(2);
myList.append(1);
myList.append(55);
myList.append(11);
myList.append(77);

myList.search(55);
myList.search(22);
