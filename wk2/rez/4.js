const sampleArray = [1, 2, 3, 4, 5]

function reduceLeft (arr, update, intialAcc) {
  let acc = intialAcc
  for (const element of arr) {
    acc = update(acc, element)
  }
  return acc
}

console.warn(reduceLeft(sampleArray, (acc, el) => acc + el, 0))