const numbers = [32, 21, 63, 95, 100, 67, 43];

let result = numbers.find((value) =>{
    return value === 100
})
//otra forma de hacerlo + simplificada
let resultado = numbers.find(value => value === 100)

console.log(resultado)

//Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

let movie2010 = movies.find(value => value.date == 2010)
console.log(movie2010)


//ado el siguiente javascript, usa .find() para econtrar el alien de nombre 
/* 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado. */

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let alien = aliens.find(item => item.name === 'Cucushumushu')
let mutacion = mutations.find(item => item.name === 'Porompompero')

let nuevoAlien = {...alien, mutation: {...mutacion}}

console.log(nuevoAlien)