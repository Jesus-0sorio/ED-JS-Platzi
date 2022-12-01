// Clase del nodo del linkedlist
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Clase linkedlist
class myDoubleLinkedList{
  constructor(value) {
    this.head =  {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // Metodo para agregar un nodo al final
  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  // Metodo agregar un nodo al inicio
  prepend(value){
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // Metodo para inserta un nodo en cualquier parte de la lista
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }
    
    const newNode = new Node(value);
    const firstPointer = this.getIndexNode(index - 1);
    newNode.prev = firstPointer
    newNode.next = firstPointer.next;
    firstPointer.next.prev = newNode
    firstPointer.next = newNode
    
    this.length++
    return this;
  }
  // Metodo para eliminar un nodo en especifico
  delete(index){
    const firstPointer = this.getIndexNode(index-1);
    const holdPointer = this.getIndexNode(index+1);
    firstPointer.next = holdPointer
    holdPointer.prev = firstPointer
    this.length--;
    return this;
  }
  // Metodo para buscar un nodo 
  getIndexNode(index){
    let i = 0;
    let currentNode = this.head;

    while(i != index){
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
}

let myLinkedList = new myDoubleLinkedList(1);
console.log(myLinkedList.append(2))
console.log(myLinkedList.append(3))
console.log(myLinkedList.prepend(0))
console.log(myLinkedList.insert(3, 888))
