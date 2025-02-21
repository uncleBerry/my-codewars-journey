function add(n) {
  return function(x) {
    return n + x;
  }
}
var addOne = add(1);
console.log(addOne(3));