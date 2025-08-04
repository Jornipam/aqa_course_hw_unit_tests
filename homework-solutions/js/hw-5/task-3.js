 /**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowels = "aeyuio"
vowels = vowels.split("")
let vowelsCount = 0;
let consonantsCount = 0;
for (let char of word.split("")){
  if (vowels.includes(char)){
    vowelsCount ++
  }
  else {consonantsCount ++}
}
console.log(`hello contains ${vowelsCount} vowels and ${consonantsCount} consonants`)

export { vowelsAndConsonantsResult };
