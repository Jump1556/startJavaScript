function generateRange(min, max, step){
  var arr = []
  for (var i = min; i<=max; i=i+step) {
    arr.push(i)
  }
  return arr
}
