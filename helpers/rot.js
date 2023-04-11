function rotEncode(string) {
  let words = string.split(' ');
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = '';
    let middleIndex = Math.floor(word.length / 2);
    for (let j = 0; j < middleIndex; j++) {
      reversedWord += word[word.length - j - 1];
      reversedWord += word[j];
    }
    if (word.length % 2 !== 0) {
      reversedWord += word[middleIndex];
    }
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(' ');
}
  
  const _rotEncode = rotEncode;
export { _rotEncode as rotEncode };
  
let result;
  function rotDecode(y) {
    result = rotEncode(y);
    return result;
  }
  
  const _rotDecode = rotDecode;
export { _rotDecode as rotDecode };


// function oddTriangleRow(n) {
//   let rowStart = n * (n - 1) + 1; // вычисляем первое число строки
//   let row = "";
//   for (let i = 0; i < n; i++) {
//     row += rowStart + 2 * i + " "; // добавляем к строке каждое следующее нечетное число
//   }
//   return row.trim(); // удаляем пробел в конце строки
// }