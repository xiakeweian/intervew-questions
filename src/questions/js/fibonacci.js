function* fibonacci(len) {
  let count = len
  let a = 0
  let b = 1

  yield a
  yield b

  while (count > 2) {
    count--
    b = a + b
    a = b
    yield b
  }
}

export default fibonacci
