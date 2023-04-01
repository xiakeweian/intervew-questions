export default function redPackage(sum, len, min, max) {
  var _sum = sum - len * min,
    ret = []

  for (var i = 0; i < len; i++) {
    if (i === len - 1) {
      ret.push(_sum + min)
    } else {
      var money
      do {
        money = Math.random() * _sum
        money = Math.floor(money * 100) / 100
      } while (money > max - min)

      _sum -= money

      ret.push(money + min)
    }
  }

  return ret
}
