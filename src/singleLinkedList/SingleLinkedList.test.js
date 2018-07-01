import test from 'ava';
import {SingleLinkedList, } from './SingleLinkedList';
import {Node, } from './Node';

test('empty() returns false when a list is empty', async t => {
  const linkedList = new SingleLinkedList();

  t.is(linkedList.isEmpty(), true);
});

test('empty() returns true when a list is not empty', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(node);

  t.is(linkedList.isEmpty(), false);
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
});

test('popFront() removes the current head node', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();
  linkedList.pushFront(node);

  const poppedNode = linkedList.popFront();

  t.is(linkedList.head, null);
  t.is(poppedNode, node);
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
});

test('pushFront() inserts a new node at the front of the list', async t => {
  const node = new Node('A');
  const linkedList = new SingleLinkedList();

  linkedList.pushFront(node);

  t.is(linkedList.head, node);
  t.is(linkedList.head.data, 'A');
  t.is(linkedList.head.next, null);
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
});
