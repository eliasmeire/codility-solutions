function solution(a) {
  let intersections = 0
  a = a.map((el, i) => [i - el, i + el])
  a.sort((a,b) => a[0] - b[0])
  
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if(a[i][1] >= a[j][0]) {
        intersections++
        if(intersections > 10000000)
          return -1
      } else {
        break
      }
    }
  }
  return intersections
}
