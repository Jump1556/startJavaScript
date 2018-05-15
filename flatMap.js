Array.prototype.flatMap = function(f) {
  return this.map(f).reduce((a, b) => a.concat(b), [])
}