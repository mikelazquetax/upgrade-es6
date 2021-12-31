const pointsList = [32, 54, 21, 64, 75, 43]

let puntos = [...pointsList]
console.log(puntos)


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let juguetes ={...toy}
console.log(juguetes)


const pointsLis2 = [54,87,99,65,32];


let puntosConcat = [...pointsList, ...pointsLis2]
console.log(puntosConcat)

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


let juguetesConcat = {...toy, ...toyUpdate}
console.log(juguetesConcat)

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colores = [...colors]

var amar = colores.splice(2,1)
console.log(colores)