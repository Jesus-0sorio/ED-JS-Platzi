/*
    2 - 0
  /   \
 1  -  3
*/


// Edge list

const graphEdge = [
  [0, 2],
  [2, 1],
  [2, 3],
  [1, 3]
];

// Adjacent List
//             Indices
//  0      1        2         3
const graphAdjacent = [[2], [2, 3], [0, 1, 3], [1, 3]];

// Haciendolo pero mediante un objeto
const graphHash = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
}


// Adjancet Matrix
const graphMatrix = [
  // Nodos
  // 0  1  2  3
  [0, 0, 1, 0],  // 0
  [0, 0, 1, 1],  // 1
  [1, 1, 0, 1],  // 2
  [0, 1, 1, 0]   // 3
]
// Representancion como un objeto
const graphMatrixObj = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}