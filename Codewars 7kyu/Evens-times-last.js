function evenLast(numbers) {
//Jika array kosong, kamu harus mengembalikan 0.

 if (numbers.length === 0) {
    return 0;
}

   //Ambil semua elemen yang memiliki indeks genap
   const hasil = numbers.filter((_, index) => index % 2 === 0);
  


   //Jumlahkan elemen-elemen tersebut
const sum = hasil.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


 
   //Kalikan hasil penjumlahan tersebut dengan elemen terakhir dalam array
   const elemenTerakhir = numbers[numbers.length - 1];
   return sum * elemenTerakhir;
   
}

  


 console.log(evenLast([2, 3, 4, 5]), 30)