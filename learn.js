//* qsort

// let arr = [5, 4, 10, 9, 15, 1]

// function check(arr){
//   let middle = arr[0]
//   let less = []
//   let greater = []
//   if (arr.length < 2){
//     return arr
//   }
//   else{
//     for (let i = 1; i < arr.length; i++){
//       if (middle <= arr[i]){
//         less.push(arr[i])
//       }
//       else{
//         greater.push(arr[i])
//       }
//     }
//     return check(greater).concat(middle, check(less))
//   }
// }

// console.log(check(arr))

//* binSearch

// let arr = [1, 4, 8, 10, 15, 20]

// function check(arr, num){
//   let start = 0
//   let end = arr.length - 1
//   while (start <= end){
//     let middle = Math.floor((end + start) / 2)
//     if (arr[middle] == num){
//       return middle
//     }
//     else if (arr[middle] <= num){
//       start = middle + 1
//     }
//     else {
//       end = middle - 1
//     }
//   }
//   return -1
// }

// console.log(check(arr,4))

//* bubble sort 

// let arr = [5, 4, 10, 9, 15, 1]

// function bubbleSort(arr) {
//   for (let j = arr.length - 1; j > 0; j--) {
//     for (let i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort(arr))

//* selection sort

// let arr = [4, 7, 1, 5, 9, 0, 3, 2, 8, 6]

// function sort(inputArr) {
//   let n = inputArr.length
//   for(let i = 0; i < n - 1; i++) {
//       let min = i
//       for(let j = i; j < n; j++) {
//           if(inputArr[j] < inputArr[min]) {
//               min = j
//           }
//        }
//        if (min != i) {
//            let tmp = inputArr[i]
//            inputArr[i] = inputArr[min]
//            inputArr[min] = tmp   
//       }
//   }
//   return inputArr
// }

// console.log(sort(arr))

//* Stack

// class Stack {
//  constructor() {
//    this.stack = []
//  }
//  push(item) {
//    this.stack.push(item)
//  }
//  pop() {
//    return this.stack.pop()
//  }
// }

// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)

//* One-linked list

// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//   }
//   addNode(data) {
//     const newNode = new Node(data)
//     if (!this.head) {
//       this.head = newNode
//     } else {
//       let currentNode = this.head
//       while (currentNode.next) {
//         currentNode = currentNode.next
//       }
//       currentNode.next = newNode
//     }
//   }
//   removeNode(data) {
//     if (!this.head) {
//       return
//     }
//     if (this.head.data === data) {
//       this.head = this.head.next
//       return
//     }
//     let currentNode = this.head
//     let prevNode = null
//     while (currentNode && currentNode.data !== data) {
//       prevNode = currentNode
//       currentNode = currentNode.next
//     }
//     if (currentNode) {
//       prevNode.next = currentNode.next
//     }
//   }
//   printList() {
//     let currentNode = this.head
//     while (currentNode) {
//       console.log(currentNode.data)
//       currentNode = currentNode.next
//     }
//   }
// }
// const list = new LinkedList()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.printList()
// list.removeNode(2)
// list.printList()

//* two-linked list

// class Node {
//   constructor(data) {
//     this.data = data
//     this.prev = null
//     this.next = null
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//   }
//   addNode(data) {
//     const newNode = new Node(data)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode
//       newNode.prev = this.tail
//       this.tail = newNode
//     }
//   }
//   removeNode(data) {
//     let currentNode = this.head;
//     while (currentNode) {
//       if (currentNode.data === data) {
//         if (currentNode === this.head) {
//           this.head = currentNode.next
//           if (this.head) {
//             this.head.prev = null
//           }
//         } else if (currentNode === this.tail) {
//           this.tail = currentNode.prev
//           this.tail.next = null
//         } else {
//           currentNode.prev.next = currentNode.next
//           currentNode.next.prev = currentNode.prev
//         }
//         break
//       }
//       currentNode = currentNode.next
//     }
//   }
//   printList() {
//     let currentNode = this.head
//     while (currentNode) {
//       console.log(currentNode.data)
//       currentNode = currentNode.next
//     }
//   }
// }

// const list = new DoublyLinkedList()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.printList()
// list.removeNode(2)
// list.printList()

//* queue

// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(item) {
//     this.queue.push(item);
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.queue.shift();
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.queue[0];
//   }
//   isEmpty() {
//     return this.queue.length === 0;
//   }
//   size() {
//     return this.queue.length;
//   }
//   printQueue() {
//     console.log(this.queue);
//   }
// }
// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.peek())