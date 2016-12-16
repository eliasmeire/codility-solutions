function solution(a) {
  let doubleSum = 0, maxDoubleSum = 0, maxSum = a[1]
    
  for(let i = 2; i < a.length - 1; i++) {
    doubleSum = Math.max(doubleSum + a[i], maxSum)
    maxDoubleSum = Math.max(maxDoubleSum, doubleSum)                                    
    maxSum = Math.max(0, a[i], maxSum + a[i]) 
  }
    
  return maxDoubleSum
}
