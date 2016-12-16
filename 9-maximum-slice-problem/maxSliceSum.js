function solution(a) {
  let maxSum = a[0] || 0, sum = 0

  for (var i = 0; i < a.length; i++) {
    sum = Math.max(a[i], sum + a[i])
    maxSum = Math.max(sum, maxSum) 
  }
  return maxSum
}
