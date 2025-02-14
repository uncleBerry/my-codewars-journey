//SoalNya

//Anda akan diberikan array (a) dan nilai limit (batas). Anda harus memeriksa apakah semua nilai dalam array berada di bawah atau sama dengan nilai limit. Jika ya, kembalikan true. Jika tidak, kembalikan false.

// Anda dapat menganggap semua nilai dalam array adalah angka.

// Jangan gunakan loop. Jangan ubah array input.

//Code/solusinya :

function smallEnough(a, limit ){
  return a.every(num => num <= limit);
}

var a = [1,2,3,4,5];
var limit = 5;

console.log(smallEnough(a, limit));

//Cara kerja :
//Method .every() mengecek apakah semua elemen dalam array memenuhi kondisi num <= limit.
//Jika semua benar (true), maka fungsi return true.
//Jika ada satu saja yang lebih besar dari limit, langsung return false tanpa mengecek elemen lain.
