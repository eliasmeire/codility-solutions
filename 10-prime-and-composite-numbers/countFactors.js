function solution(n) {
  let i = 1
  let factors = 0
  while (i * i < n) {
    if (n % i === 0) {
      factors += 2
    }
    i++
  }

  if (i * i === n)
    factors++

  return factors
}
