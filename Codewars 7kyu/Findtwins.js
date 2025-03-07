function elimination(arr){
  var duplicate = arr.filter((num, index, array) => array.indexOf(num) !== index);

  return  duplicate.length > 0 ? duplicate[0] : null;
}
console.log(elimination([2,5,34,1,22,1])); 
console.log(elimination([2,5,34,22]));   

