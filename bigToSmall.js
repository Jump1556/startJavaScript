function bigToSmall(arr){
  // flat output `arr` to a one-dimensional array
  let result=[].concat(...arr)
  // sort array in descending order
  result.sort(function numberDes(a,b) {
    return b-a;
    })
  // connect the elements into a string with separator ">"
  return result.join(">")
}
