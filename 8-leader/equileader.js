function solution(a) {
  let stack = [a[0]]
  for (let i = 1; i < a.length; i++) {
    if(a[i] !== stack[stack.length - 1] && stack.length) {
      stack.pop()
    } else {
      stack.push(a[i])
    }
  }
  let candidate = stack[0]
  let nLeaders = a.filter((el) => el === candidate).length
  let leader = null
  if(nLeaders > a.length / 2 && candidate !== undefined) {
    leader = candidate
  } else {
    return 0
  }

  let nLeadersDone = 0
  let nEquiLeaders = 0
  let length, lengthDone
  for (let i = 0; i < a.length; i++) {
    lengthDone = i + 1
    length = a.length - lengthDone

    if(a[i] === leader) {
      nLeaders--
      nLeadersDone++
    }
    if(nLeaders > length/2 && nLeadersDone > lengthDone/2) {
      nEquiLeaders++
    }
  }
  return nEquiLeaders
}
