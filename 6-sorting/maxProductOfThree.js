function solution(a) {
  let n = a.length
  a.sort((a,b) => a - b)
  return Math.max(a[n-1] * a[n-2] * a[n-3], a[0] * a[1] * a[n-1])
}
