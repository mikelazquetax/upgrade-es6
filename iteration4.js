const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const usuarios = users.map(users => users.name)
console.log(usuarios)
var usuariosAnacleto = []

usuarios.forEach(function(nombre){
    debugger
    if(nombre[0] == 'A'){
        nombre = 'Anacleto'
    }
    usuariosAnacleto.push(nombre)
 
})


console.log(usuariosAnacleto)

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

    var ciudades = cities.filter(function(ciud){
        return ciud.isVisited === true
    })
    var ciudadesV = ciudades.map(ciudades => ({name: ciudades.name + ' Visitado', isVisited: ciudades.isVisited}) )

    console.log(ciudadesV)





var pilots = [ 
    { id: 2, name: "Wedge Antilles", faction: "Rebels", }, 
    { id: 8, name: "Ciena Ree", faction: "Empire", }, 
    { id: 40, name: "Iden Versio", faction: "Empire", }, 
    { id: 66, name: "Thane Kyrell", faction: "Rebels", }];

    var rebels = pilots.filter(function (pilot) {  
        return pilot.faction === "Rebels";});

        console.log(rebels)