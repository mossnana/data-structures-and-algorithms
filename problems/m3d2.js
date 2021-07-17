class Queue {
  constructor() {
    this.values = []
  }

  front() {
    if (this.values.length < 1) {
      return null
    }

    return this.values[0]
  }

  back() {
    if (this.values.length < 1) {
      return null
    }

    return this.values[this.values.length - 1]
  }

  push(value) {
    this.values.push(value)
  }

  pop(value) {
    this.values.shift()
  }

  empty() {
    return this.values.length < 1
  }
}

function printTree(finalValue = -1, previous = { 1: -1 }) {
  let out = "1 "
  while(previous[finalValue] != -1) {
    if (previous[finalValue] * 3 == finalValue) {
      out = out + "-> x 3 "
    } else {
      out = out + "-> ÷ 2 "
    }
    finalValue = previous[finalValue]
  }
  
  console.log(out)
}

function m3d2(target) {
  const previous = {}
  const quota = new Queue()
  let currentVal = 1

  quota.push(currentVal)
  previous[1] = -1

  while(!quota.empty()) {
    currentVal = quota.front()
    quota.pop()

    if (currentVal === target) break

    const left = Math.floor(currentVal/2)
    const right = Math.floor(currentVal*3)

    if (!previous[left]) {
      quota.push(left)
      previous[left] = currentVal
    }

    if (!previous[right]) {
      quota.push(right)
      previous[right] = currentVal
    }
  }

  if (currentVal === target) {
    printTree(currentVal, previous)
  }
}

m3d2(30)
