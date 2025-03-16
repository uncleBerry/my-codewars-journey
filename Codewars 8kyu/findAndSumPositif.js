function positiveSum(arr) {
//menemukan nilai positif
 const newArr = arr.filter(num => num > 0)
//menjumlahkan angka positif
let sum = 0; 
for (let i = 0; i < newArr.length; i++) {
     sum += newArr[i]; 
    } 
    return sum;
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);