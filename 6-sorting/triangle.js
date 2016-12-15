function solution(a) {
  a.sort((a,b) => b - a)
  let p, q, r
  for (let i = 0; i < a.length - 2; i++) {
    [p,q,r] = [i, i + 1, i + 2]

    if(a[p] + a[q] > a[r] && a[q] + a[r] > a[p] && a[r] + a[p] > a[q])
      return 1
  }
  return 0
}
