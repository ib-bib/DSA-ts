type c_queuer = number | string;

class CircularQueue {

    #front = -1;
    #rear = -1;
    #queue: c_queuer[] = [];
    #counter = 0;
    #queueCap = 4;
    // #queueCap = 1090519040;

    enqueue(x: c_queuer) {
        if (this.#isFull()) {
            console.log("Sorry, the queue is full");
            return;
        }
        if (this.#isEmpty()) {
            this.#front = 0;
        }
        this.#rear = (this.#rear + 1) % this.#queueCap;
        this.#queue[this.#rear] = x;
        this.#counter++;
    }

    dequeue() {
        if (this.#isEmpty()) {
            return "No queuers here, the queue is empty";
        }
        let temp = this.#queue[this.#front];
        this.#front = (this.#front + 1) % this.#queueCap;
        this.#counter--;
        return temp;
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
        return this.#counter === this.#queueCap;
    }

    #isEmpty() {
        return this.#front === -1;
    }
}

const MuhCircularQueue = new CircularQueue();
