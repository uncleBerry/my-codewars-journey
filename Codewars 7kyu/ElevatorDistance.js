function elevatorDistance(array) {

//Hitung selisih absolut antara lantai saat ini dan lantai berikutnya.
let totalDistance = 0;

 array.forEach((element, index) => {
    if( index < array.length -1) {
    totalDistance += Math.abs(array[index] - array[index + 1])
    }
 });

//Jumlahkan semua jarak tersebut untuk mendapatkan total jarak yang ditempuh.
return totalDistance;

  }





console.log(elevatorDistance([5,2,8]), 9);
console.log(elevatorDistance([1,2,3]), 2);
console.log(elevatorDistance([7,1,7,1]), 18);