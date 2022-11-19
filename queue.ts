type queuer = number | string;

class Queue {

    #front = -1;
    #rear = -1;
    #queue: queuer[] = [];
    #queueCap = 1090519040;

    enqueue(x: queuer) {
        if (this.#isFull()) {
            console.log("Sorry, the queue is full");
            return;
        }
        if (this.#isEmpty()) {
            this.#front = 0;
        }
        this.#rear += 1;
        this.#queue[this.#rear] = x;
    }

    dequeue() {
        if (this.#isEmpty()) {
            return "No queuers here, the queue is empty";
        }
        return this.#queue[this.#front++];
    }

    viewFront() {
        if (this.#isEmpty()) {
            return "Nothing to view, the queue is empty";
        }
        return this.#queue[this.#front];
    }

    viewRear() {
        if (this.#isEmpty()) {
            return "Nothing to view, the queue is empty";
        }
        return this.#queue[this.#rear];
    }

    #isFull() {
        return this.#rear + 1 === this.#queueCap;
    }

    #isEmpty() {
        return this.#front === -1;
    }
}

const MuhQueue = new Queue();
