/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]; */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const mayoriaEdad = ages.filter((item)=>{
    return item > 18
})

console.log(mayoriaEdad)


/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]; */

const edadPar = ages.filter((item)=>{
    return item % 2 == 0
})

console.log(edadPar)

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LOL = streamers.filter((item)=>{
    return item.gameMorePlayed == 'League of Legends'
})
console.log(LOL)

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]; */


const streamerU = streamers.filter((item)=>{
  return  item.name.includes('u')
})

console.log(streamerU)

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */


const legends = streamers.filter((item)=>{
const lol = item.gameMorePlayed.includes('League')

return lol
})

console.log(legends)

const age35 = legends.filter((item)=>{
if (item.age > 35){
    item.gameMorePlayed = item.gameMorePlayed.toUpperCase()
}
return item
})

console.log(age35)


