class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  //Metodo para insertar un nodo
  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while(true){
        if (value < currentNode.value) {
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          else {
            currentNode = currentNode.left
          }
        } else{
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }
  // Metodo para buscar un nodo
  search(value){
    let currentNode = this.root;
    if(currentNode === null){
      this.insert(value)
      return "El nodo no existe, fue creado";
    }
    while (true) {      
      if (currentNode === null) {
        this.insert(value)
        return "El nodo no existe, fue creado";
      }
      else if (currentNode.value === value) {
        return currentNode
      } else {
        if (currentNode.value <= value) {
          currentNode = currentNode.right
        } else {
          currentNode = currentNode.left
        }
      }
    }
  }
  // Metodo para elimar un nodo
  delete(value){
    let currentNode = this.root;
    if(currentNode === null){
      return "El arbol esta vacio";
    }
    while (true) {      
      if (currentNode === null) {
        return "El nodo no existe";
      } else {
        if (currentNode.value <= value) {
          if(currentNode.right && currentNode.right.value === value){
            currentNode.right = null
            return this
          }
          currentNode = currentNode.right
        } else {
          if(currentNode.left && currentNode.left.value === value){
            currentNode.left = null
            return this
          }
          currentNode = currentNode.left
        }
      }
    }
  }
}

let myTree = new BinarySearchTree();
myTree.insert(50)
myTree.insert(100)
myTree.insert(15)
myTree.insert(10)
myTree.insert(20)
myTree.insert(80)
myTree.insert(110)
