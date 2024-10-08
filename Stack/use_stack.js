// Import the Stack class
const Stack = require('./stack');

// Create a new stack instance
const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushes:");
stack.print();  // Output: 10,20,30

// Pop an element from the stack
console.log("Popped element:", stack.pop());  // Output: 30
console.log("Stack after pop:");
stack.print();  // Output: 10,20
