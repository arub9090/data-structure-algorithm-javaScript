class Node{
    constructor(val){
        this.val= val;
        this.next= null;
        this.prev= null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head= null;
        this.tail= null;
        this.length= 0;
    }

    push(val){
        var newNode= new Node(val);
        if(!this.head){
            this.head= newNode;
            this.tail= newNode;
        }else {
            this.tail.next= newNode;
            newNode.prev= this.tail;
            this.tail= newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var currentTail= this.tail;
        if(this.length === 1){
            this.head= null;
            this.tail= null;
        }else{
            this.tail= currentTail.prev;
            this.tail.next= null;
            currentTail.prev=null;
        }
        this.length--;
        return currentTail;
    }

    shift(){
        if(this.length===0) return undefined;
        var oldHead= this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head= oldHead.next;
            this.head.prev=null;
            oldHead.next=null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        var newNode= new Node(val);
        if(this.length===0){
            this.head= newNode;
            this.tail= newNode;
        } else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0 || index >= this.length) return null;
        if(index <= this.length/2){
        var count=0;
        var current= this.head;
        while(count !== index){
            current= current.next;
            count++;
        }
        } else{
            var count= this.length-1;
            var current= this.tail;
            while(count !== index){
                current= current.prev;
                count--;
            }
        }
        return current; 
    }

    set(index, val){
        var foundItem= this.get(index);
    if(foundItem!== null){
        foundItem.val= val;
        return true;
    }
        return false;
    }

    insert(index, val){
        if(index<0 || index >= this.length) return false;
        if(index===0) return this.unshift(val);
        if(index=== this.length) return this.push(val)

        var newItem= new Node(val);
        var prevItem= this.get(index-1);
        var replacingItem= prevItem.next;
            
        prevItem.next=newItem;
        newItem.prev=prevItem;
        newItem.next= replacingItem;
        replacingItem.prev=newItem; 
            
        this.length++;
        return true;
    }

    remove(index){
        if(index<0 || index >= this.length) return undefined;
        if(index===0) return this.shift();
        if(index=== this.length-1) return this.pop();

        var itemToRemove= this.get(index);
        var prevItem= itemToRemove.prev;
        var nextItem= itemToRemove.next;
        prevItem.next= nextItem;
        nextItem.prev= prevItem;
        itemToRemove.next= null;
        itemToRemove.prev= null;

        this.length--;
        return itemToRemove;
    }


    reverse(){
        if(!this.head) return undefined;
        var oldHead= this.head;
        var oldTail= this.tail;
        
        this.head= oldTail;
        this.tail= oldHead;
        var currentItem= oldTail;
        var temp1, temp2;
        
        var count=this.length;
            for (let count = this.length; count > 0 ; count--) {
                temp1=currentItem.prev;
                temp2=currentItem.next;

                currentItem.next=temp1;
                currentItem.prev=temp2;

                currentItem=temp1;
            }  
        return this;
    }
}

var doubleList= new DoublyLinkedList()
doubleList.push(5);
doubleList.push(6)
doubleList.push(7)
doubleList.push(9);
