import test from 'ava';
import {SingleLinkedList, } from './SingleLinkedList';
import {Node, } from './Node';

const getLinkedListSize = linkedList => {
  let hasNextNode = linkedList.head !== null;
  let currentNode = JSON.parse(JSON.stringify(linkedList.head));
  let counter = 0;

  while (hasNextNode) {
    counter += 1;
    currentNode = JSON.parse(JSON.stringify(currentNode.next));

    if (currentNode === null) {
      hasNextNode = false;
    }
  }

  return counter;
};

test('empty() returns false when a list is empty', async t => {
  const linkedList = new SingleLinkedList();

  t.is(linkedList.isEmpty(), true);
  t.is(getLinkedListSize(linkedList), 0);
});

test('empty() returns true when a list is not empty', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(node);

  t.is(linkedList.isEmpty(), false);
  t.is(getLinkedListSize(linkedList), 1);
});

test('popBack() removes the current end node', async t => {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const linkedList = new SingleLinkedList();
  linkedList.pushFront(nodeA);
  linkedList.pushFront(nodeB);
  linkedList.pushFront(nodeC);

  const poppedNode = linkedList.popBack();

  t.is(linkedList.head, nodeC);
  t.is(linkedList.head.next, nodeB);
  t.is(linkedList.head.next.next, null);
  t.is(poppedNode, nodeA);
  t.is(getLinkedListSize(linkedList), 2);
});

test('popFront() removes the current head node', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();
  linkedList.pushFront(node);

  const poppedNode = linkedList.popFront();

  t.is(linkedList.head, null);
  t.is(poppedNode, node);
  t.is(getLinkedListSize(linkedList), 0);
});

test('pushBack() inserts a new node at the end of the list', async t => {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(nodeA);
  linkedList.pushFront(nodeB);
  linkedList.pushBack(nodeC);

  t.is(linkedList.head, nodeB);
  t.is(linkedList.head.next, nodeA);
  t.is(linkedList.head.next.next, nodeC);
  t.is(getLinkedListSize(linkedList), 3);
});

test('pushFront() inserts a new node at the front of the list', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(node);

  t.is(linkedList.head, node);
  t.is(linkedList.head.data, 'A');
  t.is(linkedList.head.next, null);
  t.is(getLinkedListSize(linkedList), 1);
});

test('pushFront() inserts a new node that points to the previous node', async t => {
  const headNode = new Node('A');
  const lastNode = new Node('B');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(lastNode);
  linkedList.pushFront(headNode);

  t.is(linkedList.head, headNode);
  t.is(linkedList.head.data, 'A');
  t.is(linkedList.head.next, lastNode);
  t.is(linkedList.head.next.data, 'B');
  t.is(linkedList.head.next.next, null);
  t.is(getLinkedListSize(linkedList), 2);
});

test('reverse() reverses the order of the list', async t => {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(nodeA);
  linkedList.pushFront(nodeB);
  linkedList.pushFront(nodeC);

  linkedList.reverse();

  t.is(linkedList.head, nodeA);
  t.is(linkedList.head.next, nodeB);
  t.is(linkedList.head.next.next, nodeC);
  t.is(getLinkedListSize(linkedList), 3);
});

test('size() is 0 when the list is empty', async t => {
  const linkedList = new SingleLinkedList();

  t.is(linkedList.size(), 0);
  t.is(getLinkedListSize(linkedList), 0);
});

test('size() is 3 when the list has three nodes', async t => {
  const linkedList = new SingleLinkedList();
  linkedList.pushFront(new Node('A'));
  linkedList.pushFront(new Node('B'));
  linkedList.pushFront(new Node('C'));

  t.is(linkedList.size(), 3);
  t.is(getLinkedListSize(linkedList), 3);
});
