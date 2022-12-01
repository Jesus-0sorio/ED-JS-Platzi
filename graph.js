/*
const graph = {
  1: [3, 4, 6],
  3: [1, 5, 6],
  4: [1, 5, 8],
  5: [3, 4],
  6: [1, 3],
  8: [4]
}
*/
class Graph {
  constructor() {
    this.node = 0;
    this.adjacentList = {};
  }
  // Metodo para añadir nodos/vertices
  addVertex(node) {
    this.adjacentList[node] = [];
    this.node++;
  }  
  //Metodo para añadir edge/borde/punteros
  addBorder(node, edge){
    edge.sort((a,b) => a - b)
    const data = this.adjacentList[node];
    for(let i = 0; i < edge.length; i++){
      if(data[i] != edge[i]){
        data.push(edge[i]);
        this.adjacentList[edge[i]].push(node)
      }
    }
    this.adjacentList[node] = data
    return this;
  }
}

const graph = new Graph();
graph.addVertex(1)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(8)
graph.addBorder(1, [3,6,4])
graph.addBorder(3, [1, 5, 6])
graph.addBorder(4, [1,8,5])
graph.addBorder(5, [4,3])
graph.addBorder(6, [1,3])
graph.addBorder(8, [4])