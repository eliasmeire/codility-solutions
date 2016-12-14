function solution(x,a) {
  let set = new Set()
  for (var i = 0; i < a.length; i++) {
    if(a[i] <= x) {
      set.add(a[i])
      if(set.size === x)
        return i
    }
  }
  return -1
}