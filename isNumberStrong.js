function strong(n) {
  var num = n.toString()
  var sum = 0
  for (var i=0; i<num.length; i++) {
    var result = factorialize(Number(num[i]))
    sum += result
  }
  return sum == n ? "STRONG!!!!" : "Not Strong !!"
}

function factorialize(num) {
  if ( num === 1)
    return 1
  for (var i = num - 1; i >= 1; i--) {
    num *= i
  }
  return num
}


//strong(1), "STRONG!!!!"
//strong(145), "STRONG!!!!"
//strong(7), "Not Strong !!"
//strong(185), "Not Strong !!"