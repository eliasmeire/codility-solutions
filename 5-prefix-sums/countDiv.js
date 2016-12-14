function solution(a, b, k) {
  if(a % k !== 0)
    a += k - (a % k)
  b -= (b % k)
  return (b - a) / k + 1
}
