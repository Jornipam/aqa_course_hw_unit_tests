/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = [];
let map = [];
let filter = [];
let find = [];
let sort = [];
let reduce = [];
let some;
let every;

//1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
numbers.forEach((el) => {
   if (!(el % 3)){forEach.push(el)}
   return(forEach)
})
console.log(forEach);

//2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
map = numbers.map((el, index, array) => el - array.length);
console.log(map);
     
//  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
filter = numbers.filter((el, i, arr) => {return el > arr[i - 1]})
console.log(filter);

//  4. find - присвойте элемент, равный своему индексу //2
find = numbers.find((el, i) => el === i);
console.log(find);

//  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
sort = numbers.sort((a, b) => a - b);
console.log(sort);

//  6. reduce - получите сумму всех чисел массива //466
reduce = numbers.reduce((result, el) => {
   return result + el
})
console.log(reduce);

//7. some - проверьте, есть ли в массиве элементы больше 90 //true
some = numbers.some((el) => el > 90);
console.log(some);

//  8. every - проверьте, что все элементы массива двухзначные //false
every = numbers.every((el,i,arr) => el.length === 2);
console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every }
