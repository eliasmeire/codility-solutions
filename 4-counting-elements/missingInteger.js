function solution(a) {  
  a = new Set(a)
  for (let i = 1; i <= a.size + 1; i++) {
    if(!a.has(i))
      return i
  }
  return 1
}