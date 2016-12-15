function solution(a) {
  let eastCars = 0
  let passingCars = 0
  
  for(let i = 0; i < a.length; i++) {
    if(a[i] === 0) {
      eastCars++
    } else {
      passingCars += eastCars
      if(passingCars > 1000000000)
        return -1
    }
  }
  return passingCars
}
