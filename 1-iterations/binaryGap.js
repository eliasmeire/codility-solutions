function solution(n) {
  let bin = n.toString(2).replace(/^0+|0+$/, '')  
  let gaps = bin.split('1')
  let longest = gaps.reduce((a,b) => a.length > b.length ? a : b)
  return longest.length
}