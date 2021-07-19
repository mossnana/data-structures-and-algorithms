function minimumEqual(arr) {
  const counted = new Set()
  let minCounter = 0

  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    const comparator = arr[i]
    if (counted.has(comparator)) continue
    else counted.add(comparator)
    for (let j = 0; j < arr.length; j++) {
      let comparative = arr[j]
      if (comparative === comparator) continue
      while (comparative != comparator) {
        if (comparative < comparator) comparative++
        else comparative--
        counter++
      }
    }
    if (i === 0) minCounter = counter
    else if (i > 0 && counter < minCounter) minCounter = counter
  }

  return minCounter
}

console.log(minimumEqual([3,2,1,1,2,3,1])) // 5
console.log(minimumEqual([4,1,4,1])) // 6
console.log(minimumEqual([3,3,3])) // 0
