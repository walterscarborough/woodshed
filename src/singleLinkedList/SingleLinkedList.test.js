import test from 'ava';
import {SingleLinkedList, Node, } from './SingleLinkedList';

test('pushFront() inserts a new node', async t => {
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
