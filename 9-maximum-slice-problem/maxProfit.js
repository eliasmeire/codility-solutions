function solution(a) {
  let maxProfit = 0, profit = 0

  for (var i = 1; i < a.length; i++) {
    profit = Math.max(0, profit + a[i] - a[i-1])
    maxProfit = Math.max(profit, maxProfit) 
  }
  return maxProfit
}
