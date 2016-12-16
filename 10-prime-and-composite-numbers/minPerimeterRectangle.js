function solution(n) {
  let i = 1
  let minPerimeter = Number.MAX_VALUE
  let perimeter = (a,b) => 2*(a+b)

  while (i * i < n) {
    if (n % i === 0 && perimeter(i,n/i) < minPerimeter)
      minPerimeter = perimeter(i,n/i)
    i++
  }

  if (i * i === n)
    minPerimeter = perimeter(i,i)

  return minPerimeter
}
