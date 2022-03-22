class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index< 0 || index > this.length) return false
        if(index=== this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode= new Node(val);
        var preNode= this.get(index-1);
        var tempNode= preNode.next;
        preNode.next= newNode;
        newNode.next=tempNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index< 0 || index >= this.length) return undefined;
        if(index=== this.length-1) return !!this.pop();
        if(index === 0) return !!this.shift();
        var preNode= this.get(index-1);
        var dltNode= preNode.next;
        preNode.next=dltNode.next;
        this.length--;
        return dltNode;
    }

    reverse(){
        var node= this.head;
        this.head= this.tail;
        this.tail= node;
        // track the node, next, previous
        var next;
        var prev= null;
        for (let i = 0; i < this.length; i++) {
            next= node.next;
            node.next= prev;
            // play the wheel to go for next node
            prev= node;
            node= next;
        }
        return this;  
    }
    
}

var listUp = new SinglyLinkedList()

