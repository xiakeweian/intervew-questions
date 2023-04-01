function KMP(sourceStr, searchStr) {
  var sourceLen = sourceStr.length,
    searchLen = searchStr.length,
    i = 0,
    j = 0,
    result = -1

  for (; i < sourceLen; i++) {
    for (j = 0; j < searchLen; j++) {
      if (sourceStr.charAt(i) === searchStr.charAt(j)) {
        if (j === searchLen - 1) {
          result = i - j
          break
        } else {
          i++
        }
      } else {
        if (j >= 1) {
          i += searchLen - next(searchStr.slice(0, j))
        } else {
          i = i - j
        }

        break
      }
    }

    if (result !== -1) {
      break
    }
  }

  return result
}

function next(str) {
  var prefix = [],
    subfix = [],
    result = 0,
    len = str.length

  for (let i = 0; i < len; i++) {
    prefix[i] = str.slice(0, i + 1)
    subfix[i] = str.slice(-i - 1)
    if (prefix[i] === subfix[i]) {
      result = prefix.length
    }
  }

  return result
}

var s = 'ahnfucjnasijnf    BBC ABCDAB ABCDABCDABDE'
var t = 'ABCDABD'

console.log(KMP(s, t))
