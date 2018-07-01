const getLastNode = nextNode => {
  if (nextNode.next !== null) {
    return getLastNode(nextNode.next);
  }

  return nextNode;
};

class SingleLinkedList {
  head = null;

  isEmpty() {
    return this.head === null;
  }

  popBack() {
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

  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  size() {
    const countNodes = (nextNode, counter = 0) => {
      counter += 1;

      if (nextNode.next !== null) {
        return countNodes(nextNode.next, counter);
      }

      return counter;
    };

    if (this.head === null) {
      return 0;
    }

    return countNodes(this.head);
  }
}

module.exports = {
  SingleLinkedList,
};
