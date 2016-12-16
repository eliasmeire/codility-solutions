function solution(a) {
  if(a.length === 1)
    return 0

  let stack = [a[0]]
  let dominatorIndex = -1
  for (let i = 1; i < a.length; i++) {
    if(a[i] !== stack[stack.length - 1] && stack.length) {
      stack.pop()
    } else {
      dominatorIndex = i
      stack.push(a[i])
    }
  }

  let nDominators = a.filter((el) => el === stack[0]).length
  if(nDominators > a.length / 2) {
    return dominatorIndex
  }
  return -1
}
