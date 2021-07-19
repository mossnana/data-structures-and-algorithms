function undirectedGraphSequence(firstGraph, secondGraph) {
  const graphLength = firstGraph.length
  let sequences = []

  for (let i = 0; i < graphLength; i++) {
    let sequence = i + 1
    if (firstGraph[i] === sequence || secondGraph[i] === sequence) {
      if (firstGraph[i] < secondGraph[i]) sequences.push(firstGraph[i])
      else sequences.push(secondGraph[i])
    }
  }

  for (let i = 0; i < sequences.length; i++) {
    if (sequences[i] !== i+1) return false
  }

  return true
}

console.log(undirectedGraphSequence([1,2,4,4,3], [2,3,1,3,1])) // true
console.log(undirectedGraphSequence([1,2,1,3], [2,4,3,4])) // false
console.log(undirectedGraphSequence([2,4,5,3], [3,5,6,4])) // false
console.log(undirectedGraphSequence([1,3], [2,2])) // true
