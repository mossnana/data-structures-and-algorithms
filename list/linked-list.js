class Vertex {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  __firstInsert(value) {
    const vtx = new Vertex(value)
    vtx.next = this.head
    this.head = vtx
    this.tail = vtx
  }

  isEmpty() {
    return this.head === null
  }

  unshift(value) {
    // for first time unshift
    if (this.isEmpty()) {
      return this.__firstInsert(value)
    }

    const vtx = new Vertex(value)
    vtx.next = this.head
    this.head = vtx
  }

  append(value) {
    // for first time append
    if (this.isEmpty()) {
      return this.__firstInsert(value)
    }

    const vtx = new Vertex(value)
    this.tail.next = vtx
    this.tail = vtx
  }

  insert(value, position = 0) {
    if (position === 0) {
      return this.unshift(value)
    }

    let pre = this.head
    for (let index = 0; index < position - 1; index++) {
      pre = pre.next
    }

    const after = pre.next
    const vtx = new Vertex(value)
    vtx.next = after
    pre.next = vtx
  }

  searchOne(value) {
    let index = 0
    let temp = this.head

    while(temp.value !== value) {
      index++
      temp = temp.next

      if (temp === null) {
        return -1
      }
    }

    return index
  }
}

const myList = new LinkedList()
myList.unshift(1)
myList.unshift(2)
myList.unshift(3)
myList.append(4)
myList.insert(5, 1)
console.log(myList.searchOne(1))
console.log(myList.searchOne(50))
