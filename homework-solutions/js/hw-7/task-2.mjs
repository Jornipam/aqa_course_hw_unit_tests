/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // 1. разделить слово на массив из букв. 2.перевернуть запись сменой индексов букв 3.сравнить получишееся слово с исходным 
let result = false
word = word.toLowerCase()
let reverseWord = word.toLowerCase().split('').reverse().join('')
 if (word === reverseWord){
  result = true
 }
  return(result)
}
console.log("Слово является палиндромом : " + isPalindrom("Строка"))
console.log("Слово является палиндромом : " + isPalindrom("Мадам"))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
const arrayWords = sentence.split(" ");
let maxLength = 0;

 for(const element of arrayWords){
  if (element.length > maxLength){
    maxLength = element.length
  }
 };

const longestWords = arrayWords.filter(element => element.length === maxLength);

return longestWords
};

console.log(findLongestWords("Вот и найди здесь сааамое длинное слово"));

export { isPalindrom, findLongestWords };
