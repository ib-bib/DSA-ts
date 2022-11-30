class Noad {
    // yes I called it Noad on purpose, I am aware it's spelled Node thank you very much :)
    // there is in fact another class named Node that is already defined in TypeScript. Yeah betcha feel real dumb now dontcha :)
    // anyways, back to the code
    value: number;
    next: Noad | null;
    constructor(value: number) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    #head: Noad | null;
    #tail: Noad | null;
    #maxCap = 1090519040;
    #counter = 0;

    constructor() {
        this.#head = this.#tail = null;
    }

    enlistAtEnd(x: number) {
        if (this.#isFull()) {
            return "Sorry, no room for another node.";
        }
        if (this.#isEmpty()) {
            this.#head = this.#tail = new Noad(x);
        } else {
            this.#tail!.next = new Noad(x);
            this.#tail = this.#tail!.next;
        }
        this.#counter++;
    }

    enlistAtStart(x: number) {
        if (this.#isFull()) {
            return "Sorry, no room for another node.";
        }
        if (this.#isEmpty()) {
            this.#head = this.#tail = new Noad(x);
        } else {
            let temp = new Noad(x);
            temp.next = this.#head;
            this.#head = temp;
        }
        this.#counter++;
    }

    insertAt(value: number, position: number) {
        if (this.#isEmpty()) {
            this.enlistAtStart(value);
        }
        if (this.#isFull()) {
            return "Sorry, no room for another node.";
        }
        if (position + 1 > this.#counter) {
            return `Invalid position, there are only ${this.#counter} nodes in this list.`;
        }
        let cur = this.#head;
        let prev: Noad | null = null;
        let i = 0;
        while (cur && position > i) {
            prev = cur;
            cur = cur.next;
            i++;
        }
        if (prev && i === position) {
            let temp = new Noad(value);
            temp.next = cur;
            prev.next = temp;
        }
    }

    removeAt(position: number) {
        if (this.#isEmpty()) {
            return "Sorry, no nodes to remove.";
        }
        if (position + 1 > this.#counter) {
            return `Invalid position, there are only ${this.#counter} nodes in this list.`;
        }
        let cur = this.#head;
        let prev: Noad | null = null;
        let i = 0;
        while (cur && position > i) {
            prev = cur;
            cur = cur.next;
            i++;
        }
        if (prev && i === position) {
            prev.next = cur!.next;
            cur = null;
        }
    }

    delistFromStart() {
        if (this.#isEmpty()) {
            return "Sorry, no nodes to remove.";
        }
        this.#head = this.#head!.next;
    }

    delistFromEnd() {
        if (this.#isEmpty()) {
            return "Sorry, no nodes to delist.";
        }
        let prev: Noad | null = null;
        let current = this.#head;
        while (current) {
            prev = current;
            current = current.next
        }
        prev = null;
        this.#counter--;
    }

    #fillWithZeros(value: string, count: number): string {
        while (count > 0) {
            value += '0';
            count--;
        }
        return value;
    }

    addTwoLargeNumbers(first: string, second: string): string {
        first = first.split('').reverse().join('');
        second = second.split('').reverse().join('');

        if (Math.max(first.length, second.length) === first.length) {
            second = this.#fillWithZeros(second, first.length - second.length);
        } else if (Math.max(first.length, second.length) === second.length) {
            first = this.#fillWithZeros(first, second.length - first.length);
        }

        let carry = 0;
        for (let i = 0; i < first.length; i++) {
            let sum = Number(first[i]) + Number(second[i]) + carry;
            this.enlistAtEnd(sum % 10);
            carry = Math.trunc(sum / 10);
        }
        if (carry > 0) {
            this.enlistAtEnd(carry);
        }

        return this.toString().split('').reverse().join('');
    }

    toString(): string {
        let str = "";
        while (this.#head != null) {
            str += this.#head.value;
            this.#head = this.#head.next;
        }
        return str;
    }

    getSize(): number {
        return this.#counter;
    }

    #isEmpty() {
        return this.#head === null;
    }

    #isFull() {
        return this.#counter === this.#maxCap;
    }
}

let number1 = '999999999';
let number2 = '100000000';

const MuhList = new LinkedList();
let str = MuhList.addTwoLargeNumbers(number1, number2);
console.log(str);
