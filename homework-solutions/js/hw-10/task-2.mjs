/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function countOccurrences(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (obj[number]) {
      obj[number] += 1;
    } else {
       obj[number] = 1;
    }
  }
  return obj;
}
console.log(countOccurrences(numbers))

export { countOccurrences };
