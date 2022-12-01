class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //pto push a value into the doubly linked list
    push(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    //unshift  - to put value in the first index in the list
    unshift(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // shift is to remove the first index in the length
    shift() {
        if (!this.length) return null;

        let toDelete = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = toDelete.next;
            toDelete.next = null;
            this.head.prev = null;
        }

        this.length--;
        return toDelete;
    }

    //get is to get the element of the list with the designated index
    get(i) {
        if (i < 0 || i >= this.length) return null;

        let count;
        let currNode;

        if (i < this.length / 2) {
            count = 0;
            currNode = this.head;
            while (i !== count) {
                currNode = currNode.next;
                count++;
            }
        } else {
            count = this.length - 1;
            currNode = this.tail;
            while (i !== count) {
                currNode = currNode.prev;
                count--;
            }
        }
        return currNode;
    }

    //pop is to remove the last element in the list
    pop() {
        if (!this.length) return null;
        let remove = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = remove.prev;
            this.tail.next = null;
            remove.prev = null;
        }
    }

    // remove is to remove an element from a certain index
    remove(i) {
        if (i < 0 || i >= this.length) return null;
        if (i === 0) return this.shift();
        if (i === this.length - 1) return this.pop();

        let remove = this.get(i);
        let after = remove.next;
        let before = remove.prev;

        after.prev = before;
        before.next = after;

        this.length--;
        return remove;
    }

    //set is update an element in the list
    set(i, val) {
        if (i < 0 || i >= this.length) return null;

        let foundNode = this.get(i);

        if (foundNode) {
            foundNode.val = val;
            return this;
        } else {
            return `Index isn't there`;
        }
    }

    //insert an element from after a certain index
    insert(i, val) {
        if (i < 0 || i > this.length) return null;
        if (i === 0) return this.unshift(val);
        if (i === this.length) return this.push(val);

        let newNode = new Node(val);

        let before = this.get(i);
        let after = before.next;

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return this;
    }
}

var getDecimalValue = function (head) {
    let total = 0;
    for (let i in head) {
        total = total * 2 + head[i];
    }
    return total;
};

const newList = new DoublyLinkedList();
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
console.log(getDecimalValue([1, 1, 1]));
