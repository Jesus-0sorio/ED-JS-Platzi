class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // Metodo toma el primer elemento de la línea
  peek(){
    return this.top;
  }
  // Metodo agrega un elemento al final de la línea
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else{
      this.bottom.next = newNode;
      this.bottom = newNode;
    }
    this.length++;
    return this;
  }
  // Metodo remover el primer elemento de la línea
  dequeue(){
    if(!this.length) return "El Queue esta vacio";
    else if(this.length === 1){
      this.top = null;
      this.bottom = null;
    }else{
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }
}

let myQueue = new Queue();
myQueue.enqueue(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)