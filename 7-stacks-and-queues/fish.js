function solution(a, b) {
  let downStreamFish = []
  let alive = a.length
  for (var i = 0; i < a.length; i++) {
    if(b[i] === 1) {
      downStreamFish.push(a[i])
    } else {
      while(downStreamFish[downStreamFish.length - 1] !== undefined) {
        if(downStreamFish[downStreamFish.length - 1] > a[i]) {
          alive--
          break
        } else if(downStreamFish[downStreamFish.length - 1] < a[i]) {
          alive--
          downStreamFish.pop()
        }
      }
    }
  }
  return alive
}
