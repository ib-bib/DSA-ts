type item = number | string;

let stackTop: number = -1;
const stackCap = 1090519040;
const stackArr: item[] = [];

const stackPush = (x: item) => {
    if (isFull()) {
        console.log("Cannot insert more items!");
        return;
    }
    stackArr[++stackTop] = x;
}

const stackPop = () => {
    if (isEmpty()) {
        return "Nothing to pop. Stack is empty.";
    }
    return stackArr[stackTop--];
}

const stackPeek = () => {
    if (isEmpty()) {
        return "Nothing to peek. Stack is empty.";
    }
    return stackArr[stackTop];
}

const isEmpty = () => {
    return stackTop === -1;
}

const isFull = () => {
    return stackTop + 1 === stackCap;
}
