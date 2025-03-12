function XO(str) {
   
      // Ubah string menjadi huruf kecil agar tidak peka huruf besar/kecil
    const ubah = str.toLowerCase();

    // Hitung jumlah huruf 'x' dan 'o'
    const nyariX = (ubah.match(/x/g) || []).length;
    const nyariO = (ubah.match(/o/g) || []).length;
        // Bandingkan jumlahnya
    return nyariX === nyariO;
}



console.log(XO('xo', true));
console.log(XO('XO', true));
console.log(XO('xxxoo', false));
console.log(XO("xxOo", true));
console.log(XO('', true, 'Empty string contains equal amount of x and o'));