function catMouse(x){
    //Cari posisi karakter 'C'
   const posisiC = x.indexOf('c');

   //Cari posisi karakter 'M'
   const posisiM = x.indexOf('m')

    //Hitung jarak antar 'C' dan 'm'
   const jarak = posisiM - posisiC;

   //Pengecekan kondisi
   return jarak <= 4 ?  "Caught!": "Escaped!";

}
console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");