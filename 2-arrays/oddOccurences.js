function solution(a) {
  let occurences = a.reduce((obj,b) => {
    if (obj[b] === undefined) {
      obj[b] = 1
    } else {
      obj[b]++
    }
    return obj
  }, {})

  for(let key in occurences) {
    if(occurences[key] % 2 !== 0) 
      return parseInt(key)
  }
}