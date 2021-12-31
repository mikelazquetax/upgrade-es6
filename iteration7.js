const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().
 */

let totalScore = exams.reduce((acc,item) =>{
    return acc + item.score
}, 0)

console.log(totalScore)

/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */
let totalAprobados = exams.reduce((acc,item)=>{
    if(item.score >= 5){
        return acc + item.score
    }else{
        return acc
    }
})

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

let media = totalScore / exams.length
console.log(media)