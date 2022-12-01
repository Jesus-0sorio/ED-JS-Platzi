
class HashTable{
  constructor(size){
    this.data = new Array(size)
  }
  hashMethod(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // Metodo para agregar datos
  set(key, value){
    const address = this.hashMethod(key);
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key, value]);
    return this.data[address]
  }
  // Metodo para obtener un dato
  get(key){
    const address = this.hashMethod(key);
    const current = this.data[address];
    if(current){
      for(let i = 0; i < current.length; i++){
        if(current[i][0] === key){
          return  current[i][1]
        }
      }
    }
    else{
      return undefined;
    }
  }
  // Metodo para eliminar datos
  delete(key){
    const address = this.hashMethod(key);
    const current = this.data[address];
    if(current){
      for (let i = 0; i < current.length; i++) {
        if(current[i][0] === key){
          delete current[i]
          current.splice(i,1)
          return "Dato eliminado"
        }
      }
    }
    else{
      return undefined;
    }
  }
  // Metodo para obtener todos los key
  getKeys(){
    let res = "";
    if(this.data){
      for (let i = 0; i < this.data.length; i++) {
        if(this.data[i]){
          for (let j = 0; j < this.data[i].length; j++){
            if(this.data[i][j][0]){
              res += this.data[i][j][0] + "\n"
            }  
          }
        }      
      }
      return res
    } else{
      return undefined
    }
  }
}


const myHashTable = new HashTable(50)
console.log(myHashTable)
myHashTable.set("Diego", 1990)
console.log(myHashTable)
myHashTable.set("Mariana", 1998)
myHashTable.set("Arturo", 1998)
console.log(myHashTable)
myHashTable.set("Alejandra", 2000)
console.log(myHashTable.getKeys())