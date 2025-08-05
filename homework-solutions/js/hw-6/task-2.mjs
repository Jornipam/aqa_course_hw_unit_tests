/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:*/
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;
resultUnique = new Array()

const competitorPizzasLowerCase = [];
const myPizzasТ1LowerCase = [];
const myPizzasТ2LowerCase = [];

//приведение к нижнему регистру массивов
for (let nestedArr of competitorPizzas){
  nestedArr = nestedArr.toLowerCase()
  competitorPizzasLowerCase.push(nestedArr)
};

for (let nestedArr of myPizzasT1){
  nestedArr = nestedArr.toLowerCase()
    myPizzasТ1LowerCase.push(nestedArr)
};

for (let nestedArr of myPizzasT2){
  nestedArr = nestedArr.toLowerCase()
    myPizzasТ2LowerCase.push(nestedArr)
};

// сравнение  моего массива с конкурентом в поиске уникальных пицц 
for (const nestedArr of myPizzasТ1LowerCase){
  if (!competitorPizzasLowerCase.includes(nestedArr)){
    resultUnique.push(nestedArr)
  }
  else if (competitorPizzasLowerCase.includes(nestedArr)){
    resultNull = null
  }
};

for (const nestedArr of myPizzasТ2LowerCase){
  if (!competitorPizzasLowerCase.includes(nestedArr)){
    resultUnique.push(nestedArr)
  }
  else if (competitorPizzasLowerCase.includes(nestedArr)){
    resultNull = null
  }
};

console.log(resultUnique)
console.log(resultNull)

export { resultNull, resultUnique };
