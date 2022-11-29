class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNodes = new Node(val);

        if (!this.length) {
            this.head = newNodes;
            this.tail = newNodes;
        } else {
            this.tail.next = newNodes;
            this.tail = newNodes;
        }
        this.length++;

        return this;
    }
    unshift(val) {
        let newNodes = new Node(val);

        if (!this.head) {
            this.head = newNodes;
            this.tail = newNodes;
        } else {
            newNodes.next = this.head;
            this.head = newNodes;
        }
        this.length++;

        return this;
    }

    shift() {
        if (!this.head) return null;
        if (this.length === 0) this.tail = null;

        let currentHead = this.head.next;
        this.head = currentHead;

        this.length--;

        return currentHead;
    }
    set(index, val) {
        if (index < 0 || index >= this.length - 1) return null;

        let findIndex = this.get(index);
        if (findIndex) {
            findIndex.val = val;
            return this;
        }
        return false;
    }

    remove(index) {
        if (index < 0 || index >= this.length - 1) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let del = prev.next;
        prev.next = del.next;

        this.length--;

        return del;
    }

    pop() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        let newTail = currentHead;

        while (currentHead.next) {
            newTail = currentHead;
            currentHead = currentHead.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    get(index) {
        if (index < 0 || index >= this.length - 1) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.unshift(val);
        if (index === this.length - 1) return this.push(val);

        let newNode = new Node();

        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;

        return this;
    }
}

const newList = new SinglyLinkedList();
newList.push(9);
newList.push(8);
newList.push(7);
newList.push(5);
newList.pop();
newList.shift();
newList.unshift(18);
console.log(newList.get(1));
console.log(newList.set(0, 17));
console.log(newList.insert(0, 16));
console.log(newList.remove(0));

console.log(newList);
