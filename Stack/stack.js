class Stack {
    constructor() {
      this.items = [];  // Array to store stack elements
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";  // Handle case where stack is empty
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the elements of the stack
    print() {
      console.log(this.items.toString());
    }
  }
  module.exports = Stack;