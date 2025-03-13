function vowel2index(str) {
    return  str.replace(/[aeiou]/gi, (match, index) => index + 1);
  }


 console.log(vowel2index('this is my string'), 'th3s 6s my str15ng');
 console.log(vowel2index('Codewars is the best site in the world'), 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');


 