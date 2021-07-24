function GreatestCommonDivisor(a, b) {
  if (b === 0) return a

  return GreatestCommonDivisor(b, a % b)
}

console.log(GreatestCommonDivisor(10, 6))
console.log(GreatestCommonDivisor(270, 192))
