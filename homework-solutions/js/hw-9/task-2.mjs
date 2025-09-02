/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];
//1
function addCharacter(array, name, age) {
  const newObj = {name, age};
  array.push(newObj)
  return array
}
console.log(addCharacter(characters, 'Anna', 22))

//2
function getCharacter(name, array) {
  return array.find((elem) => elem.name === name) ||  null
}
console.log(getCharacter('Fred', characters))

//3
function getCharactersByAge(minAge, array) {
  return array.filter((elem) => elem.age >= minAge)
}
console.log(getCharactersByAge(40, characters))

//4
function updateCharacter(name, newCharacter, array) {
  const getChar = getCharacter(name, array)
  
  return array
}
console.log('Jack', ,characters)

//5
function removeCharacter(name) {
  // Ваш код
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
