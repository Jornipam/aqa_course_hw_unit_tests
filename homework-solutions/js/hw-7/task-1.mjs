/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const arrOfArguments = [];
  for ( let arg of arrays){
    arrOfArguments.push(...arg)
  };
  console.log(arrOfArguments);
  return(arrOfArguments);
}
mergeArrays([1,2], [3,4], [5,6]);

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  //приводим к нижнему регистру и разбиваем предложение на слова
  const words = sentence.toLowerCase().split(' ');
 // для каждого слова , начиная со второго, в words приводим первую букву к верхнему регистру и прицепляем к ней остаток слова со второй буквы
  for (let i = 1; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  //соединяем все слова в одно разделенные "_" 
  return words.join('_');
};
console.log(devideBy('Я мозг сломала пока поняла как это надо делать'))

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n < 3){
    return n - 1;
  } else {
    return (fibonacci(n - 1) + fibonacci(n - 2))
  }
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
