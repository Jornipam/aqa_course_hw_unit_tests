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
<<<<<<< HEAD

//1
function addCharacter(character) {
 if (character && typeof character === 'object' && 
      character.name && typeof character.name === 'string' &&
      character.age && typeof character.age === 'number') {
        characters.push(character);
      } else {
        throw new Error('Некорректный объект');
  }
  return characters
}
console.log(addCharacter({name: 'Anna', age: 30}))

//2
function getCharacter(name) {
  if (name.length === 0){
    throw new Error('invalid character')
  }else {
      return characters.find((character) => character.name === name )
  }
}
console.log(getCharacter('Fred'))

//3
function getCharactersByAge(minAge) {
  if (typeof minAge != 'number') {
    throw new Error("invalid character");
  } else {
    return characters.filter((el) => el.age >= minAge)
  }
}
console.log(getCharactersByAge(40))

//4
function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  character.name = newCharacter.name;
  character.age = newCharacter.age;
  return characters
}
console.log(updateCharacter("Anna", {name: 'Olya', age: 35}))

//5
function removeCharacter(name) {
const indexCharacter = characters.findIndex((el) => el.name === name)
  if (indexCharacter === -1) {
    throw new Error("Character not found");
  } else {
    characters.splice(indexCharacter,1)
  }
return characters
}
console.log(removeCharacter('Jack'))

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
