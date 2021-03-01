
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = []

  if (!matrix || !matrix.length){
    return result
  }
  
  matrix.forEach((element, index) => {
    if (index % 2 !== 0){
      element = element.reverse()
    }
    element.map((item) => {
      result.push(item)
    })
  });

  return result
}
