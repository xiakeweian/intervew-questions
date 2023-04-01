function Node(key, left, right) {
  this.key = key
  this.left = left
  this.right = right
}

Node.prototype.show = function () {
  return this.key
}

function BST() {
  this.root = null
  this.count = 0
}

BST.prototype.insert = function (key) {
  var newNode = new Node(key, null, null)

  if (!this.root) {
    this.root = newNode
    this.count++
  } else {
    var current = this.root,
      parent

    while (true) {
      parent = current
      if (key < current.key) {
        current = current.left

        if (current === null) {
          parent.left = newNode
          this.count++
          break
        }
      } else if (key > current.key) {
        current = current.right

        if (current === null) {
          parent.right = newNode
          this.count++
          break
        }
      }
    }
  }
}

BST.prototype.contain = function (key) {
  var current = this.root

  while (true) {
    if (key < current.key) {
      current = current.left
      if (current === null) {
        break
      }
    } else if (key > current.key) {
      current = current.right
      if (current === null) {
        break
      }
    } else {
      return true
    }
  }

  return false
}

BST.prototype.preOrder = function () {
  function tranverse(node) {
    if (node !== null) {
      console.log(node.show())
      tranverse(node.left)
      tranverse(node.right)
    }
  }

  return tranverse(this.root)
}

BST.prototype.inOrder = function () {
  function tranverse(node) {
    if (node !== null) {
      tranverse(node.left)
      console.log(node.show())
      tranverse(node.right)
    }
  }

  return tranverse(this.root)
}

BST.prototype.postOrder = function () {
  function tranverse(node) {
    if (node !== null) {
      tranverse(node.left)
      tranverse(node.right)
      console.log(node.show())
    }
  }

  return tranverse(this.root)
}

BST.prototype.levelOrder = function () {
  var q = []
  q.push(this.root)

  while (q.length > 0) {
    var curent = q.shift()
    console.log(curent.show())
    if (curent.left !== null) {
      q.push(curent.left)
    }
    if (curent.right !== null) {
      q.push(curent.right)
    }
  }
}

var arr = [8, 10, 6, 3, 9, 2, 1, 14, 0]
var bst = new BST()

for (let i = 0; i < arr.length; i++) {
  bst.insert(arr[i])
}

// console.log(bst);
// console.log(bst.contain(-1))
// bst.preOrder();
// bst.inOrder();
// bst.postOrder();
bst.levelOrder()

function binarySearch(arr, target) {
  var l = 0,
    r = arr.length - 1

  while (l < r) {
    var mid = Math.floor((l + r) / 2)
    var item = arr[mid]

    if (target < item) {
      r = mid - 1
    } else if (target < item) {
      l = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

var q = [0, 1, 2, 3, 4]

console.log(binarySearch(q, 4))
