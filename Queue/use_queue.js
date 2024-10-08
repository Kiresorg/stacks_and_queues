// Import the Stack class
const Queue = require('./queue');

// Create a new stack instance
const queue = new Queue();

// Enqueue elements into the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueuing elements:");
queue.print();  // Output: 10,20,30

// Dequeue an element from the queue
console.log("Dequeued element:", queue.dequeue());  // Output: 10
console.log("Queue after dequeue:");
queue.print();  // Output: 20,30

// Peek at the front element of the queue
console.log("Front element:", queue.front());  // Output: 20

// Check if the queue is empty
console.log("Is the queue empty?", queue.isEmpty());  // Output: false

// Get the size of the queue
console.log("Queue size:", queue.size());  // Output: 2
