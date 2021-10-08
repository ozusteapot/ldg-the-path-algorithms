class LinkedList {
    constructor() { 
        this.head = null;
        this.tail = null;
        this.nodeCount = 0;
    }
​
    push(){
​
    }
​
    pop(){
​
    }
} 
​
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
​
module.exports = {
    LinkedList: LinkedList, 
    Node: Node};