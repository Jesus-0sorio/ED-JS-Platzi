class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // Metodo para seleccionar el primer elemento
  peek(){
    return this.top;
  }
  // Metodo para agregar un elemento a final
  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else{
    newNode.next = this.top;
    this.top = newNode;
    }
    this.length++;
    return this;
  }
  // Metodo para remover el ultimo elemento
  pop(){
    if(this.length === 0) return "El stack esta vacio"
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

let myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);