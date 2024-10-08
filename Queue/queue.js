class Queue {
    constructor() {
      this.items = [];  // Array to store the queue elements
    }
  
    // Enqueue (Add element to the rear of the queue)
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue (Remove element from the front of the queue)
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";  // Handle case where the queue is empty
      }
      return this.items.shift();  // Remove the front element
    }
  
    // Peek (View the element at the front of the queue without removing it)
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];  // Return the front element
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the elements of the queue
    print() {
      console.log(this.items.toString());
    }
  }
  
  module.exports = Queue;