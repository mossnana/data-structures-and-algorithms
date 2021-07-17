function selectionSort(arr) {
  let pos = arr.length - 1

  for (; pos > 0; pos--) {
    let max_index = pos
    for (let index = 0; index < pos; index++) {
      if (arr[index] > arr[max_index]) {
        max_index = index
      }
    }
    const temp = arr[pos]
    arr[pos] = arr[max_index]
    arr[max_index] = temp
  }
}

function reverseSelectionSort(arr) {
  let pos = arr.length - 1

  for (; pos > 0; pos--) {
    let max_index = pos
    for (let index = 0; index < pos; index++) {
      if (arr[index] < arr[max_index]) {
        max_index = index
      }
    }
    const temp = arr[pos]
    arr[pos] = arr[max_index]
    arr[max_index] = temp
  }
}

const numbers = Array(1000).fill(undefined).map((_, index) => {
  return 1000-index
})
console.time('built-in sort')
numbers.sort((a, b) => {
  return a-b
}) // built-in sort: 0.207ms
console.timeEnd('built-in sort')

const numbers2 = Array(1000).fill(undefined).map((_, index) => {
  return 1000-index
})
console.time('selection sort')
selectionSort(numbers2) // selection sort: 4.850ms
console.timeEnd('selection sort')

const reverseNumbers = [1,2,3,4,5]
reverseSelectionSort(numbers)
console.log(numbers)
