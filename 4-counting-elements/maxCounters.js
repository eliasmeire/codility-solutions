function solution(n, a) {
  let counters = Array(n).fill(0)
  let maxCounter = 0
  let maxCounterSet = 0

  for (var i = 0; i < a.length; i++) {
    if(a[i] === n + 1) {
      maxCounterSet = maxCounter
    } else {      
      if(counters[a[i] - 1] < maxCounterSet) {
        counters[a[i] - 1] = maxCounterSet + 1
      } else {
        counters[a[i] - 1]++
      }
      if(counters[a[i] - 1] > maxCounter)
        maxCounter = counters[a[i] - 1]
    }
  }

  if(maxCounterSet !== 0) {
    counters.forEach((el, i) => {
      if(el < maxCounterSet)
        counters[i] = maxCounterSet
    })
  }
  return counters
}