function solution(s, p, q) {
  let weights = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 }
  let counter = {'A': 0, 'C': 0, 'G': 0}
  let result = []
  
  let prefixSums = s.split('').reduce((a,b,i, arr) => {    
    a.push({'A': counter.A, 'C': counter.C, 'G': counter.G})
    counter[b]++
    if(i === arr.length - 1)
        a.push({'A': counter.A, 'C': counter.C, 'G': counter.G})
    return a
  }, [])

  for (var i = 0; i < p.length; i++) {
    let low = p[i]
    let high = q[i] + 1
    
    if(low === high) {
      result.push(weights[s[low]])
    } else if(prefixSums[high].A - prefixSums[low].A > 0) {
      result.push(weights.A)
    } else if (prefixSums[high].C - prefixSums[low].C > 0) {
      result.push(weights.C)
    } else if (prefixSums[high].G - prefixSums[low].G > 0) {
      result.push(weights.G)
    } else {
      result.push(weights.T)
    }
  }

  return result
}
