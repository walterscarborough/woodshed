class SingleLinkedList {
  head = null;

  isEmpty() {
    return this.head === null;
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
