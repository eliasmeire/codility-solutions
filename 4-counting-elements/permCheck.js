function solution(a) {
  a.sort((a,b) => a-b)
  for (var i = a.length - 1; i >= 0; i--) {
    if(a[i] !== i + 1)
      return 0
  }
  return 1
}