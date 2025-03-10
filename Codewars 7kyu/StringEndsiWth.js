function solution(str, ending){
  return str.endsWith(ending)
}

console.log(solution('abcde', 'e'), true)
console.log(solution('abcde', 'abc'), false)

//dengan menggunakan method "str.endsWith(ending)", jadi nya begini method endsWith() akan mengecek parameter str yang berisi string, dan setelah itu method endsWith() akan mengecek parameter ending yang ada didalam kurung methodnya apakah isi string nya ada di akhir string ayang ada didalam parameter str