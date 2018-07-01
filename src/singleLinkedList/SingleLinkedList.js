class SingleLinkedList {
  head = null;

  isEmpty() {
    return this.head === null;
  }

  popBack() {
    const getLastNode = nextNode => {
      if (nextNode.next !== null) {
        return getLastNode(nextNode.next);
      }

      return nextNode;
    };

    const pruneDanglingNext = (nextNode, lastNode) => {
      if (nextNode.next !== lastNode) {
        return pruneDanglingNext(nextNode.next, lastNode);
      }

      nextNode.next = null;
    };

    const lastNode = getLastNode(this.head);
    pruneDanglingNext(this.head, lastNode);

    return lastNode;
  }

  popFront() {
    const headNode = this.head;

    this.head = null;

    return headNode;
  }

  pushFront(node) {
    if (this.head !== null) {
      node.next = this.head;
    }

    this.head = node;
  }
}

class Node {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

module.exports = {
  SingleLinkedList,
  Node,
};
