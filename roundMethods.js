/*
Ways to round a number in JS:

1. Math.round(x) returns the value of the given number rounded to the nearest integer
   if decimls needed can be done trick *100/100

2. Math.ceil(x) returns a Number, representing the nearest integer when rounding upwards
3. Math.floor(x) returns the largest integer less than or equal to a given number
4. number.toFixed(x) returns string, representing a number, with the exact number of decimals
*/

function round(num) {
  var a = Math.ceil(num)
  var b = Math.floor(num)
  var c = Math.round(num)
  var d = num.toFixed(1)
  var answer = `num=${arguments[0]}, ceil=${a}, floor=${b}, round=${c}, toFixed=${d}`
  console.log(answer)
  return answer 
}

round(5.112)