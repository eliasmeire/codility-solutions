function solution(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      stack.push(true)
    } else if(!stack.pop()) {
      return 0
    }
  }
  if(stack.length) {
    return 0
  }
  return 1
}
