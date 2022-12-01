
class myArry {
  constructor() {
    this.length = 0;
    //En data se guardaran todos los elemntos
    this.data = {};
  }
  //Regresa el elemento que se busque mediante el index
  get(index) {
    return this.data[index];
  }
  //Agrega un nuevo elemento
  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.data
  }
  //Elimina el ultimo elemento
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }
  //Elimina el primer elemento del array
  shift() {
    const firstItem = this.data[0];
    this.switchIndex(0);
    return firstItem;
  }
  //Agrega un el elemento al inicio del array
  unshift(item) {
    if(!item) return this.length
    this.length++
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
    return this.data
  }
  //Elimina un elemento en especifico con el index
  delete(index) {
    let element = this.data[index];
    this.switchIndex(index);
    return element;
  }
  //Corrige el index si se elimina o se agrega un elemento
  switchIndex(index){
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
}

const myArray = new myArry();
console.log(myArray)

myArray.push("ho")
myArray.push("hola")
myArray.push("la")
console.log(myArray)
console.log(myArray.unshift("asd"))
console.log(myArray.delete(2))
console.log(myArray)
