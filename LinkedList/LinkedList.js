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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    //traverse and reach at end :)
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  delete(data){
    if(!this.head){
        return;
    }
    //here if we want to delete first node just point head to head.next;
    if(this.head.data===data){
        this.head=this.head.next;
        return;
    }
    let current=this.head;
    while(current.next){//here traverse and current.next.data===data?current.next=current.next.next;
        if(current.next.data===data){
            current.next=current.next.next;
            return;
        }
        current=current.next;
    }
  }
  print(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
  }
}
const myList = new LinkedList();
myList.append(1);
myList.append(5);
myList.append(11);
myList.append(3);
myList.append(2);
myList.delete(2);
myList.print()
