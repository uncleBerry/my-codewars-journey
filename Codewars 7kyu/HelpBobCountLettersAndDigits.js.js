// Fungsi ini menghitung jumlah huruf dan angka dalam string
function countLettersAndDigits(input) {
  // Cari semua huruf (a-z, A-Z) dan angka (0-9) dalam string menggunakan .match()
  // [a-zA-Z0-9] → Menemukan huruf besar, huruf kecil, dan angka
  // g → Global flag untuk mencari semua kecocokan dalam string
  const cekk = input.match(/[a-zA-Z0-9]/g);

  // Jika hasil pencarian (cekk) berisi data, kembalikan jumlah elemennya
  // Jika tidak ditemukan huruf atau angka, kembalikan 0
  return cekk ? cekk.length : 0;
}

  console.log(countLettersAndDigits("hel2!lo"), 6);
  console.log(countLettersAndDigits("n!!_ice!!123"), 7);
  console.log(countLettersAndDigits("1"), 1);
  console.log(countLettersAndDigits("?"), 0);
  console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
  console.log(countLettersAndDigits("aBcDeFg090"), 10);
  console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);