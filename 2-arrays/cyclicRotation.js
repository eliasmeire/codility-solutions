function solution(a, k) {
  if(a.length === 0)
    return a
  
  while (k > 0) {
    a.unshift(a.pop())        
    k--
  }
  return a
}
