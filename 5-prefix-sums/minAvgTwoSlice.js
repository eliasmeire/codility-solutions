function solution(a) {
  let avg2, avg3
  let min = 10000, minIndex = 0

  for (let i = 0; i < a.length -1; i++) {
    avg2 = (a[i] + a[i+1]) / 2
    avg3 = (a[i] + a[i+1] + a[i+2]) / 3
    if(avg2 < min) {
      min = avg2
      minIndex = i
    } else if (avg3 < min) {
      min = avg3
      minIndex = i
    }
  }
  return minIndex
}
