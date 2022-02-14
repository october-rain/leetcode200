class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    let head = this.head;
    if (!head) {
      this.head = node;
      this.length++;
      return node;
    }
    while (head.next) {
      head = head.next;
    }
    head.next = node;
    this.length++;
    return node;
  }

  print() {
    let head = this.head;
    let str = "";
    if (this.head) {
      while (head.next) {
        str += head.val + "->";
        head = head.next;
      }
      str += head.val;
    }
    console.log(str);
  }
}

let linkNodeList = new LinkNodeList();
linkNodeList.append(1);
linkNodeList.append(2);
linkNodeList.append(3);
linkNodeList.append(4);

linkNodeList.print();

console.log(linkNodeList.length);
