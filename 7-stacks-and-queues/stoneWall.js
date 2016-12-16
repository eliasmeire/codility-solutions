function solution(h) {
  let stack = [h[0]]
  let blocks = 1
  for (let i = 1; i < h.length; i++) {
    while(stack.length && h[i] <= stack[stack.length - 1]) {
      if(h[i] === stack[stack.length - 1])
        blocks--
      stack.pop()
    }
    stack.push(h[i])
    blocks++
  }
  return blocks
}
