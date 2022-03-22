class Node {
    constructor(value) {
        this.value= value;
        this.next= null;
    }
}

class Stack {
    constructor() {
        this.first=null;
        this.last= null;
        this.size=0;
    }

    push(value){
        var newNode= new Node(value)
        if(!this.first){
            this.first= newNode;
            this.last= newNode;
        } else{
            var temp= this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        var temp= this.first;
        if(this.first === this.last){
            this.first= null;
            this.last= null;
        }else{
            this.first= this.first.next;
        }
        this.size--;

        return temp.value;
    }
}

var ourStack= new Stack();

ourStack.push(2)
ourStack.push(6)
ourStack.push(5)
ourStack.push(11)
ourStack.push(4)

