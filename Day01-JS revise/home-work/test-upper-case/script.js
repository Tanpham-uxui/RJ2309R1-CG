let str1 = 'Nguyen van Nam';
let str2 = 'NGUYEN VAN NAM';
let str3 = 'nguyen van Nam';

function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
       console.log("String's first character is uppercase");
    } else {
       console.log("String's first character is not uppercase");
    }
 }
 console.log(isFirstLetterUpperCase(str1));
 console.log(isFirstLetterUpperCase(str2));
 console.log(isFirstLetterUpperCase(str3));