function solution(a) {
  let current  
  let min = 2000
  let sumLow = 0
  let sumHigh = a.reduce((a,b) => a + b)

  for (var i = 0; i < a.length - 1; i++) {
    sumLow += a[i]
    sumHigh -= a[i]
    current = Math.abs(sumLow - sumHigh)
    if (min > current)
      min = current
  }
  return min
}
