var line
var casenum = 0

while (line = readline()) {
  var maps = createGrid(line)
  var count = countStars(maps)
  casenum++
  print("Case " + casenum + ": " + count)
}
    

function createGrid(line) {
  var nums = line.split(' ')
  var n = parseInt(nums[0])
  var m = parseInt(nums[1])
  var maps = []
  
  for (var i=0; i<n; i++) {
    line = readline()
    var row = line.split('')
    maps.push(row)
  }
  return maps
}


function countStars(maps) {
  var count = 0
  var fill = (i, j) => (maps[i]||[])[j]=='-' ? ((maps[i]||[])[j]=1,fill(i-1,j),fill(i+1,j),fill(i,j-1),fill(i,j+1)) : null
  maps.forEach((row, i) => row.forEach((c, j) => c=='-' ? (count++, fill(i,j)) : null))
  return count
}