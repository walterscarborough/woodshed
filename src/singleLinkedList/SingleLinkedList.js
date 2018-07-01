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

class SingleLinkedList {
  head = null;

  isEmpty() {
    return this.head === null;
  }

  popBack() {
    const lastNode = getLastNode(this.head);
    pruneDanglingNext(this.head, lastNode);

    return lastNode;
  }

  popFront() {
    const headNode = this.head;

    this.head = null;

    return headNode;
  }

  pushBack(node) {
    const lastNode = getLastNode(this.head);
    lastNode.next = node;
  }

  pushFront(node) {
    if (this.head !== null) {
      node.next = this.head;
    }

    this.head = node;
  }
}

module.exports = {
  SingleLinkedList,
};
