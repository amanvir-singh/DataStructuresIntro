// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data) {
        const newNode = new Node(data);
    
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
    
        this.length++;
        return this;
      }
  
      insertAt(data, index) {
        if (index < 0 || index > this.length) {
          return false;
        }
        const newNode = new Node(data);
        if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
          if (!this.tail) {
            this.tail = newNode;
          }
        } else if (index === this.length) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          let current = this.head;
          for (let i = 0; i < index - 1; i++) {
            current = current.next;
          }
          newNode.next = current.next;
          current.next = newNode;
        }
    
        this.length++;
        return true;
      }
  }
  
  // Example
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.insertAt(7, 2); 
  console.log(JSON.stringify(list, null, 2));