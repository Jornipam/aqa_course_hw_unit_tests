const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

const competitorPizzasLowerCase = []
const myPizzasТ1LowerCase = [];
const myPizzasТ2LowerCase = [];


// привести все значения к нижнему регистру; обьединить наборы моих пицц в один список
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

for (const nestedArr of myPizzasТ1LowerCase){
  if (!competitorPizzasLowerCase.includes(nestedArr)){
    resultUnique.push(nestedArr)
  }
  else if (competitorPizzasLowerCase.includes(nestedArr)){
    resultNull = null
  }
}

for (const nestedArr of myPizzasТ2LowerCase){
  if (!competitorPizzasLowerCase.includes(nestedArr)){
    resultUnique.push(nestedArr)
  }
  else if (competitorPizzasLowerCase.includes(nestedArr)){
    resultNull = null
  }
}
console.log(resultUnique)
console.log(resultNull)