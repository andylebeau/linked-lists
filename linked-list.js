class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.error = "The Linked List has no values.";
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;

    return this.toString();
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;

    return this.toString();
  }

  getSize() {
    this.size
      ? console.log(this.size)
      : console.log(`The size is '0'.\n${this.error}`);
  }

  getHead() {
    this.head
      ? console.log(this.head)
      : console.log(`The Head is 'null'.\n${this.error}`);
  }

  getTail() {
    this.tail
      ? console.log(this.tail)
      : console.log(`The Tail is 'null'.\n${this.error}`);
  }

  at(index) {
    if (!this.size)
      return console.log(`Index '${index}' is invalid. ${this.error}`);
    if (index === this.size)
      return console.log(`Index '${index}' is the 'null pointer'.`);
    if ((this.size && index < 0) || index > this.size - 1)
      return console.log(`The index of ${index} does not exist.`);
    else {
      let pointer = this.head;
      for (let i = 0; i < index; i++) {
        pointer = pointer.next;
      }
      return pointer;
    }
  }

  pop() {
    if (!this.size)
      return console.log(`There is nothing to 'pop'. ${this.error}`);
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.at(this.size - 1).next = null;
    }
    this.size--;
    return this.toString();
  }

  unshift() {
    if (this.size === 0)
      return console.log(`There is nothing to 'unshift'. ${this.error}`);
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return this.toString();
  }

  contains(value) {
    const result = this.find(value, false) ? true : false;
    console.log(result);
    return result;
  }

  find(value, display = true) {
    if (this.size === 0) return null;
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        if (display) {
          console.log(`'${value}' appears at index ${index}.`);
        }
        return `'${value}' appears at index ${index}.`;
      }
      pointer = pointer.next;
      index++;
    }
    console.log(`'${value}' cannot be found.`);
    return null;
  }

  toString(pointer = this.head) {
    if (!pointer) return "The node list is empty.";
    let string = "";
    for (let i = 0; i < this.size; i++) {
      string += `${pointer.value} -> `;
      pointer = pointer.next;
    }
    string += "null";
    console.log(string);
    return string;
  }

  insertAt(value, index) {
    if (index <= 0) return this.prepend(value);
    if (index > this.size) return this.append(value);
    else {
      const node = new Node(value);
      const prev = this.at(index - 1);
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  removeAt(index) {
    if (index >= this.size) return this.pop();
    if (index <= 0) return this.unshift();
    else {
      const prev = this.at(index - 1);
      const next = this.at(index + 1);
      prev.next = next;
      this.size--;
    }
  }
}

const list = new LinkedList();
