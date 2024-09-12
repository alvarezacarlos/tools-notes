class Node {
  constructor(data) {
    this.data = data; // la clase Node obtiene la data e inicializa el atributo data de la instancia
    this.next = null; // next inicialmente sera null para cada instancia de esta clase <para cada nodo>
  }
}

class LinkedList {
  constructor() {
    this.head = null; // head inicialmente sera null para cada instancia de esta clase
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // console.log(newNode)
      this.head = newNode;
      return;
    }

    let currentNode = this.head; // start from the first node in the list
    while (currentNode.next) {
      // if current.next has something <it is not null we will continue the bucle>
      // we will iterate each node in the list until we reach the last one.
      // we will know we reach the last one when currentNode.next is null

      // point to the next node in the list
      // since each new node will be stored in the next prop of the prev node we will use the next prop to iterate through all of them untill we reach a next prop equal to null
      currentNode = currentNode.next;
    }
    // the bucle will finish when it reached the next equal to null. At that point we will have the latest node of the list in the variable currentNode. since these are object and object are updated just by having its  memory reference, and currentNode is referencing to the actual memory position of that last node, we can affect the currentNode and the changes will affect that last note in the list as well. just as bellow:
    currentNode.next = newNode
  }
}

const myLinkedList = new LinkedList();
console.log(myLinkedList);
myLinkedList.addNode({ node: 1, desc: "something here" });
myLinkedList.addNode({ node: 2, desc: "something here" });
myLinkedList.addNode({ node: 3, desc: "something here" });
myLinkedList.addNode({ node: 4, desc: "something here" });
myLinkedList.addNode({ node: 5, desc: "something here" });

console.log(myLinkedList);
