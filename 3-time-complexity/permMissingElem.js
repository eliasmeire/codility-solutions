function solution(a) {
  if (a.length === 0)
    return 1
  
  let sum = a.reduce((a,b) => a + b)
  let sumWithMissing = (a.length + 1) * (a.length + 2) / 2
  return sumWithMissing - sum;
}