window.onload = () => {};
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

let { title } = game;
let { gender } = game;
let { year } = game;

const fruits = ["Banana", "Strawberry", "Orange"];

let frutas = [...fruits];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let {name} = animalFunction()
let {race} = animalFunction()

console.log(name)
console.log(race)


const car = {brand: 'Mazda 6', itv: [2015, 2011, 2020] }

let {brand} = car
let {itv} = car

console.log(brand)
console.log(itv[0],itv[1],itv[2])

itvCar = [...itv]

console.log(itvCar[0], itvCar[1], itvCar[2])