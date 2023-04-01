import redPackage from './redPackage'
//冒泡排序
function bubbleSort(arr) {
  var ret = arr.slice(0),
    len = ret.length,
    i,
    j,
    temp

  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (ret[j] > ret[j + 1]) {
        temp = ret[j]
        ret[j] = ret[j + 1]
        ret[j + 1] = temp
      }
    }
  }

  return ret
}

function bubbleSort2(arr) {
  var ret = arr.slice(0),
    i = ret.length - 1,
    temp

  while (i > 0) {
    var pos = 0
    for (j = 0; j < i; j++) {
      if (ret[j] > ret[j + 1]) {
        temp = ret[j]
        ret[j] = ret[j + 1]
        ret[j + 1] = temp
        pos = j
      }
    }
    i = pos
  }

  return ret
}
//插入排序
function inserSort(arr) {
  var ret = arr.slice(0),
    len = ret.length,
    temp,
    i,
    j

  for (i = 1; i < len; i++) {
    temp = ret[i]
    j = i - 1
    while (ret[j] > temp) {
      ret[j + 1] = ret[j]
      j--
    }
    ret[j + 1] = temp
  }

  return ret
}
//选择排序
function selectSort(arr) {
  var ret = arr.slice(0),
    len = ret.length,
    minIndex,
    i,
    j

  for (i = 0; i < len; i++) {
    minIndex = i
    for (j = i + 1; j < len; j++) {
      if (ret[j] < ret[minIndex]) {
        minIndex = j
      }
    }

    temp = ret[minIndex]
    ret[minIndex] = ret[i]
    ret[i] = ret[minIndex]
  }

  return ret
}
//快排
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  var povitIndex = Math.floor((arr.length - 1) / 2),
    povit = arr.splice(povitIndex, 1)[0],
    len = arr.length,
    left = [],
    right = []

  for (var i = 0; i < len; i++) {
    if (arr[i] < povit) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(povit, quickSort(right))
}

// var arr = [90, 87, 45, 30, 78];

// console.log(bubbleSort2(arr))
// console.log(inserSort(arr))
// console.log(selectSort(arr))
// console.log(quickSort(arr.slice(0)))

console.log(redPackage(1000, 20, 10, 300))
