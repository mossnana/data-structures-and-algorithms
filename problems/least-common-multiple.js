/* 
  LeastCommonMultiple = (| a x b |) / GreatestCommonDivisor(a, b)
*/

function GreatestCommonDivisor(a, b) {
  if (b === 0) return a

  return GreatestCommonDivisor(b, a % b)
}

function LeastCommonMultiple(a, b) {
  return (a * b) / GreatestCommonDivisor(a, b)
}

console.log(LeastCommonMultiple(6, 8))
console.log(LeastCommonMultiple(28851538, 1183019))
