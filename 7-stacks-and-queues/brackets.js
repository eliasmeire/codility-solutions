function solution(s) {
  let stack = []

  for(let i = 0; i < s.length; i++) {
    if (/^[([{]$/.test(s[i])) {
      stack.push(s[i])
    } else {            
      switch(s[i]) {
        case ')': if(stack[stack.length - 1] !== '(') {
                    return 0
                  }
                  break
        case ']': if(stack[stack.length - 1] !== '[') {
                    return 0
                  }
                  break
        case '}': if(stack[stack.length - 1] !== '{') {
                    return 0
                  }
                  break                            
      }
      stack.pop()
    }
  }
  if(stack.length === 0) {
    return 1
  }
  return 0    
}
