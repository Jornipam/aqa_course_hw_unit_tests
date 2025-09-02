/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
const vowels = 'aeiou'

function countVowels(word){
  let countVowels = 0;
for (const char of word){
  if (vowels.includes(char.toLowerCase())) {
      countVowels++;
    }
}
return countVowels
}

function sortedByVowels(wordsArr) {
  wordsArr.sort((a,b) => {
    return (countVowels(a) - countVowels(b))
  })
  return wordsArr
}
console.log(sortedByVowels(words))

export { sortedByVowels };