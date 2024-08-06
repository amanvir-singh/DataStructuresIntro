// Create a class called Stack. It should have a method to push, pop and peek

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
}
  
// Example
const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
console.log(stack.peek());
console.log(stack.pop()); 
console.log(stack.peek());
  