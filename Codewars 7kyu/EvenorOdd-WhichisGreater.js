function evenOrOdd(numbers) {
    // 1. Inisialisasi variabel untuk menyimpan jumlah bilangan genap dan ganjil
    let evenSum = 0;
    let oddSum = 0;

    // 2. Periksa apakah parameter 'numbers' adalah string.
    // Jika iya, ubah string tersebut menjadi array angka agar bisa dihitung.
    if (typeof numbers === 'string') {
        numbers = numbers.split('').map(Number); 
        // .split('') => Membagi string menjadi array karakter
        // .map(Number) => Mengubah setiap elemen array dari string menjadi number
    }

    // 3. Iterasi setiap elemen array untuk menghitung jumlah bilangan genap dan ganjil
    numbers.forEach(num => {
        if(num % 2 === 0) {
            evenSum += num; // Tambahkan ke jumlah bilangan genap
        } else {
            oddSum += num; // Tambahkan ke jumlah bilangan ganjil
        }
    });

    // 4. Bandingkan jumlah bilangan genap dan ganjil, lalu berikan hasil yang sesuai
    if (evenSum > oddSum) {
        return 'Even is greater than Odd';
    } else if (oddSum > evenSum) {
        return 'Odd is greater than Even';
    } else {
        return 'Even and Odd are the same';
    }
}


console.log(evenOrOdd('12'), 'Even is greater than Odd');
console.log(evenOrOdd('123'), 'Odd is greater than Even');
console.log(evenOrOdd('112'), 'Even and Odd are the same');

