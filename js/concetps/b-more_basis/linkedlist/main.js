// Definición de la clase Nodo
class Node {
  constructor(data) {
      this.data = data; // Almacena el dato del nodo
      this.next = null; // Apuntador al siguiente nodo (inicialmente null)
  }
}

// Definición de la clase ListaEnlazada
class LinkedList {
  constructor() {
      this.head = null; // Puntero al primer nodo de la lista (inicialmente null)
  }

  // Método para insertar un nodo al final de la lista
  append(data) {
      const newNode = new Node(data); // Crear un nuevo nodo con el dato proporcionado

      if (!this.head) { // Si la lista está vacía
          this.head = newNode; // El nuevo nodo se convierte en el primer nodo de la lista
          return;
      }

      let current = this.head; // Empezar desde el primer nodo

      // Avanzar hasta el último nodo
      while (current.next) {
          current = current.next;
      }

      // Enlazar el nuevo nodo al último nodo de la lista
      current.next = newNode;
  }

  // Método para imprimir la lista
  print() {
      let current = this.head; // Empezar desde el primer nodo

      // Recorrer la lista e imprimir los datos de cada nodo
      while (current) {
          console.log(current.data);
          current = current.next; // Avanzar al siguiente nodo
      }
  }
}

// Ejemplo de uso
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.print(); // Salida: 1 2 3
