
var twoSum = function (array, start_idx, s) {
  let hash = {}
  for (let i = start_idx; i < array.length; i++) {
    let curr = array[i]
    let sub = s - curr;
    const check = hash[sub]
    if (check !== undefined) {
      return [sub, curr]
    } else {
      hash[curr] = i
    }
  }
  return 0
}

function findArrayQuadruplet(arr, s) {
  // your code goes here
  arr = arr.sort((a,b) => a - b)
  if (arr.length <= 3) return []
  for (let i=0; i < arr.length - 3; i++) {
    for (let j=i+1; j < arr.length - 2; j++) {
      //let addition = twoSum(arr.slice(j+1, arr.length), s - (arr[i] + arr[j]))
      let addition = twoSum(arr, j+1, s - (arr[i] + arr[j]))
      if (addition) {
        return [arr[i], arr[j]].concat(addition)//.sort((a,b) => a - b)   
      }
    }
  }
  return []
}

let arr = [2, 7, 4, 0, 9, 5, 1, 3]
let s =  20