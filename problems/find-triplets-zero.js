function findTripletsZero(numbers) {
  const length = numbers.length
  const result = []
  
  for (let i=0; i<length; i++) {
    const currentSet = new Set()
    for (let j=i+1; j<length; j++) {
      const diff = -(numbers[i] + numbers[j])
      if (currentSet.has(diff)) {
        result.push([diff, numbers[i], numbers[j]])
      } else {
        currentSet.add(numbers[j])
      }
    }
  }
  
  return result
}
